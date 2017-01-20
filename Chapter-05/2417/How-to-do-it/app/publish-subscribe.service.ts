import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscriber} from 'rxjs/Subscriber';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Injectable()
export class PubSubService {
  private publishSubscribeSubject_:Subject<any> = new Subject();
  emitter_:Observable<any>;

  constructor() {
    this.emitter_ = this.publishSubscribeSubject_.asObservable();
  }

  publish(channel:string, event:any):void {
    this.publishSubscribeSubject_.next({
      channel: channel,
      event: event
    });
  }

  subscribe(channel:string, handler:((value:any) => void)):Subscriber {
    return this.emitter_
      .filter(emission => emission.channel === channel)
      .map(emission => emission.event)
      .subscribe(handler);
  }
}

