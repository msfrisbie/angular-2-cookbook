import {Observable} from 'rxjs/Rx';

var outerResolve, outerReject;

const p1 = new Promise((resolve, reject) => {
  outerResolve = resolve;
  outerReject = reject;
});

var o1 = Observable.fromPromise(p1);

o1.subscribe(
  // onNext handler
  () => console.log('resolved!'),
  // onError handler
  () => console.log('rejected'),
  // onCompleted handler
  () => console.log('finished!'));
  
outerResolve();
// "resolved!"
// "finished!"