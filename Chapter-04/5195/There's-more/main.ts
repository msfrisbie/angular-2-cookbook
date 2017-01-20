var resolveHandler = () => {}, 
    rejectHandler = () => {};
const p0 = new Promise((resolve, reject) => {
  // state can be defined with any of the following:
  // resolve();
  // reject();
  // resolve(myData);
  // reject(myData);
}).then(resolveHandler, rejectHandler);



const p1 = new Promise((resolve, reject) => {
  // console.info is the resolve handler,
  // console.error is the reject handler
  
  resolve(123);
}).then(console.info, console.error); 

// (info) 123

// reset to demonstrate reject()
const p2 = new Promise((resolve, reject) => {
  // console.info is the resolve handler,
  // console.error is the reject handler
  
  reject(456);
}).then(console.info, console.error); 

// (error) 456



const p3 = new Promise((resolve, reject) => {
  // immediately resolve the promise
  resolve(123);
});

// subsequently define a handler, will be immediately
// invoked since promise is already resolved 
p3.then(console.info);

// (info) 123



const p4 = new Promise((resolve, reject) => {
  // Invoke resolve() after 1 second
  setTimeout(() => resolve(), 1000);
});

const cb = () => console.log('called');

p4.then(cb);
p4.then(cb);

// After 1 second:
// "called"
// "called"
