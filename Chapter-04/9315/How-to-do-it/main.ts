const a = Promise.resolve('baz');
console.log(a);
// Promise {status: 'resolved', value: 'baz'}

const b = Promise.resolve(a);
console.log(b);
// Promise {status: 'resolved', value: 'baz'}

console.log(a === b);
// true

const c = Promise.reject('qux');
// Error qux
console.log(c)
// Promise {status: 'rejected', value: 'qux'}

const d = Promise.resolve(c);
console.log(d);
// Promise {status: 'rejected', value: 'qux'}

console.log(c === d);
// true
