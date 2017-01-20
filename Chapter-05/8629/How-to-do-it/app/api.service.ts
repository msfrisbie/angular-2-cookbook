import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class APIService {
  constructor(private http_:Http) {}
  
  search(query:string):Observable<string> {
    return this.http_
      .get('static/response.json')
      .map(r => r.json()['prefix'] + query)
      .concatMap(
        x => Observable.of(x).delay(Math.random()*1000));
  }
}