// This executor is passed resolve and reject, but is 
// effectively a no-op, so the promise p2 will forever 
// remain in the 'pending' state.
const p1 = new Promise((resolve, reject) => {});

// This executor invokes 'resolve' immediately, so
// p2 will transition directly to the 'fulfilled' state.
const p2 = new Promise((resolve, reject) => resolve());

// This executor invokes 'reject' immediately, so
// p3 will transition directly to the 'rejected' state.
// A transition to the 'rejected' state will also throw
// an exception. This exception is thrown after the 
// executor completes, so any logic following the 
// invocation of reject will still be executed.
const p3 = new Promise((resolve, reject) => {
  reject();
  // This log() prints before the exception is thrown
  console.log('I got rejected!'); 
});

// This executor invokes 'resolve' immediately, so
// p4 will transition directly to the 'fulfilled' state.
// Once a promise exits the 'pending' state, it cannot change
// again, so even though reject is invoked afterwards, the
// final state of p4 is still 'fulfilled'.
const p4 = new Promise((resolve, reject) => {
  resolve();
  reject();
});

// This executor assigns its resolve function to a variable
// in the encompassing lexical scope so it can be called
// outside the promise definition.
var outerResolve;
const p5 = new Promise((resolve, reject) => {
  outerResolve = resolve;
});
// State of p5 is 'pending'

outerResolve();
// State of p5 is 'fulfilled'
