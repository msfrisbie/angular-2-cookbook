var p = new Promise((resolve, reject) => { 
  // executor will immediately throw an exception, forcing
  // a reject
  throw 123; 
})
.then(
  // child promise resolved handler
  data => console.log('resolved', data), 
  // child promise rejected handler
  data => console.log('rejected', data));

// "rejected", 123