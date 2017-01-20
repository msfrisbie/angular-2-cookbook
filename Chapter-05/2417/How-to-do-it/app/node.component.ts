import {Component, Input, OnDestroy} from '@angular/core';
import {PubSubService} from './publish-subscribe.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'node',
  template: `
    <p>Heard {{count}} of {{subscribeChannel}}</p>
    <button (click)="send()">Send {{publishChannel}}</button>
  `
})
export class NodeComponent implements OnDestroy {
  @Input() publishChannel:string;
  @Input() subscribeChannel:string;
  count:number = 0;
  private pubSubServiceSubscription_:Subscription;


  constructor(private pubSubService_:PubSubService) {}
  
  send() {
    this.pubSubService_
      .publish(this.publishChannel, {});
  }

  ngAfterViewInit() {
    this.pubSubService_
      .subscribe(this.subscribeChannel, 
                 event => ++this.count);
  }

  ngOnDestroy() {
    this.pubSubServiceSubscription_.unsubscribe();
  }

}
