import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
    <ad-section>
      <p>U.S. senators are up in arms following the recent ruling
         stripping them of their beloved selfie sticks.</p>
      <p>A bipartisan committee drafted a resolution to smuggle
         selfie sticks onto the floor by any means necessary.</p>
    </ad-section>
  `
})
export class ArticleComponent { 
  title:string = 'Selfie Sticks Banned from Senate Floor';
}
