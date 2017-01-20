import {Component, Input, ngOnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'article',
  template: `
    <h1>{{title}}</h1>
    <p>Shares: {{count}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  @Input() shares:Observable<Event>;
  count:number = 0;
  title:string = 
    'Insurance Fraud Grows In Wake of Apple Pie Hubbub';
    
  constructor(private changeDetectorRef_: ChangeDetectorRef) {}
    
  ngOnInit() {
    this.shares.subscribe((e:Event) => {
      ++this.count;
      this.changeDetectorRef_.markForCheck();  
    });
  }
}

