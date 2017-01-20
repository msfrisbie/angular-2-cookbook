import {Component, ViewChildren, QueryList, ngAfterViewInit, ChangeDetectorRef} 
  from '@angular/core';
import {InnerComponent} from './inner.component';

@Component({
  selector: 'outer',
  template: `
    <button (click)="add()">Moar</button>
    <button (click)="remove()">Less</button>
    <button (click)="shuffle()">Shuffle</button>
    <inner *ngFor="let i of list"
           val="{{i}}">
    </inner>
    <p>Value of last: {{lastVal}}</p>
  `
})
export class OuterComponent implements AfterViewInit {
  @ViewChildren(InnerComponent) innerComponents: 
    QueryList<InnerComponent>;
  list:Array<number> = [];
  lastVal:number;

  constructor(private changeDetectorRef_:ChangeDetectorRef) {}

  add():void {
    this.list.push(this.list.length)
  }

  remove():void {
    this.list.pop();
  }

  shuffle():void {
    // simple assignment shuffle
    this.list = this.list.sort(() => (4*Math.random()>2)?1:-1);
  }
  
  ngAfterViewInit() {
    this.innerComponents.changes
      .subscribe(innerComponents => {
        this.lastVal = (innerComponents.last || {}).val;
        this.changeDetectorRef_.detectChanges();
      });
  }
}
