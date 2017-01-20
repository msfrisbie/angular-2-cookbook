import {Component} from '@angular/core';
import {APIService} from './api.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'search',
  template: `
    <input [formControl]="queryField">
    <p *ngFor="let result of results">{{result}}</p>
  `
})
export class SearchComponent {
  results:Array<string> = [];
  queryField:FormControl = new FormControl();
  
  constructor(private apiService_:APIService) {
    this.queryField.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(query => this.apiService_.search(query))
      .subscribe(result => this.results.push(result));
  }
}