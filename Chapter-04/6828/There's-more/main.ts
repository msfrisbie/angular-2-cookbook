const incr = val => {
  console.log(val);
  return ++val;
};

var outerResolve;
const firstPromise = new Promise((resolve, reject) => { 
  outerResolve = resolve; 
});

// define firstPromise's handler
firstPromise.then(incr);
// append another handler for firstPromise, and collect
// the returned promise in secondPromise
const secondPromise = firstPromise.then(incr);
// append another handler for the second promise, and collect
// the returned promise in thirdPromise
const thirdPromise = secondPromise.then(incr);

// at this point, invoking outerResolve() will:
// resolve firstPromise; firstPromise’s handlers executes
// resolve secondPromise; secondPromises’s handler executes
// resolve thirdPromise; no handlers defined yet

// additional promise handler definition order is
// unimportant; they will be resolved as the promises
// sequentially have their states defined
secondPromise.then(incr);
firstPromise.then(incr);
thirdPromise.then(incr);

// the setup currently defined is as follows:
// firstPromise -> secondPromise -> thirdPromise
// incr()          incr()           incr()
// incr()          incr()
// incr()

outerResolve(0);
// 0
// 0
// 0
// 1
// 1
// 2
