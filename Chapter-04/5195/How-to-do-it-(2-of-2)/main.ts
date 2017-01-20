// p1 is a simple promise to which you can attach handlers
const p1 = new Promise((resolve, reject) => {});

// p1 exposes a then() method which accepts a 
// resolve handler (onFulfilled), and a 
// reject handler (onRejected)
p1.then(
  // onFulfilled is invoked when resolve() is invoked
  () => {},
  // onRejected is invoke when reject() is invoked
  () => {});
// If left here, p1 will forever remain "pending"


// Using the 'new' keyword still allows you to call a
// method on the returned instance, so defining the
// then() handlers immediately is allowed.
//
// Instantly resolves p2
const p2 = new Promise((resolve, reject) => resolve())
  .then(
    // This method will immediately be invoked following
    // the p2 executor invoking resolve()
    () => console.log('resolved!'));
// "resolved!"


// Instantly rejects p3
const p3 = new Promise((resolve, reject) => reject())
  .then(
    () => console.log('resolved!'),
    // This second method will immediately be invoked following
    // the p3 executor invoking reject()
    () => console.log('rejected!'));
// "rejected!"


const p4 = new Promise((resolve, reject) => reject())
  // If you don’t require use of the resolve handler,
  // catch() allows you to define just the error handling
  .catch(() => console.log('rejected!'));


// executor parameters can be captured outside its lexical
// scope for later invocation
var outerResolve;
const p5 = new Promise((resolve, reject) => {
  outerResolve = resolve;
}).then(() => console.log('resolved!'));

outerResolve();
// "resolved!"
