import {Component} from '@angular/core';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
    <p>Word count: {{wordCount}}</p>
    <text-editor (countUpdate)="updateWordCount($event)">
    </text-editor>
  `
})
export class ArticleComponent { 
  title:string =  `
    Maternity Ward Resorts to Rock Paper Scissors Following 
    Baby Mixup`;
  wordCount:number = 0;
  
  updateWordCount(e:number):void {
    this.wordCount = e;
  }
}
