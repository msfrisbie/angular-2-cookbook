var outerResolveA, outerResolveB;
const promiseA = new Promise((resolve, reject) => {
  outerResolveA = resolve;
});
const promiseB = new Promise((resolve, reject) => {
  outerResolveB = resolve;
});

const multiPromiseAB = Promise.all([promiseA, promiseB])
  .then((values) => console.log(values));

outerResolveA(123);
outerResolveB(456);

// [123, 456]



var outerResolveC, outerRejectD;
var promiseC = new Promise((resolve, reject) => {
  outerResolveC = resolve;
});
var promiseD = new Promise((resolve, reject) => {
  outerRejectD = reject;
});

var multiPromiseCD = Promise.all([promiseC, promiseD])
  .then(
    values => console.log(values),
    rejectedValue => console.error(rejectedValue));

// resolve a collection promise, no handler execution
outerResolveC(123);
// reject a collection promise, rejection handler executes
outerRejectD(456);

// (error) 456
