// Use this method to capture the cancellation function
var cancel; 

const cancelPromise = new Promise((resolve, reject) => { 
  cancel = reject; 
}); 
const delayedPromise = new Promise((resolve, reject) => 
  setTimeout(resolve.bind(null, 'foobar'), 3000))
.then(() => console.log('still resolved!')); 

// Promise.race() creates a new promise
Promise.race([cancelPromise, delayedPromise])
.then(
  val => console.log(val), 
  () => console.error('cancelled!'));

// If you invoke cancel() before 3 seconds elapses
// (error) "cancelled!""


// Instead, if 3 seconds elapses
// "foobar"
