var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users');
var promise = users.remove({});

// {name: "foo", age: 24}

// name | "foo"
// age  | 24

// 0 | "foo"
// 1  | 24

// ******* WHAT IS THE 0? ({0: 1})
promise.then(function(){
  console.log(arguments);
})

users.insert({name: 'Harry'}).then(function(){
  console.log(arguments);
})

promise.then(function(x){
  console.log(x);
})
//.remove() returns a writeresult OBJECT that contains status of operation
// writeResults has information about the # of items removed! In this case 1 because only
// one item was inserted!

users.insert({name: 'Harry'}).then(function(x){
  console.log(x);
})

users.insert({name: 'Harry'}).then(function () {
  users.insert({name: 'Sally'}).then(function () {
    users.remove({}).then(function () {
      console.log(arguments);
    })
  })
})
// 1. A promise is an object. Calls on the method of 'then' which in turn returns an async call
// 2. Then: returns a promise, stores the function passed to it
// 3. All promises are async calls but not all asycn calls are promises
// 4. Promises are used for asynchronous calls or call back functions
    // a. A callback function is a function that uses information obtained from a previous function nd passes it as the arguement.
          //pretty much a function passed to another function
    //b. An asynchronous callback is invoked after the function returns.



// Promises Under the Hood! (this stuff is already built in! Don't ever have to do this)
// NOW
var Promise = function(fn){
  this.callbacks = []
}

Promise.prototype.then = function(callback){
  this.callbacks.push(callback)
  return new Promise(...)
}

// LATER
this.callbacks.forEach(function(callback){
  callback.call(null, args)
})





// Promise function passes a success(onFulfill) and a failure(onReject)
function (onFulfill, onReject) {
  var self = this
    , retPromise = new Promise;
    //*******DON'T UNDERSTAND WHAT IS HAPPENING HERE !!!!!!!!!!\
    // Is this just setting a new promise to a var?!

  if ('function' == typeof onReject) {
    // if the promise returns a rejection, normally cases of no data or information
    //then function will execute this.
    //**** WHAT IS HANDLER?! IS THIS CALLING THE FUNCTION AGAIN?!
    self.onReject(handler(retPromise, onReject));
  } else {
    //*** NOT SURE WHAT IS HAPPENING HERE ?!
    self.onReject(retPromise.reject.bind(retPromise));
  }
  if ('function' == typeof onFulfill) {
    // if the promise returns data, aka is successful, carry out this

    self.onFulfill(handler(retPromise, onFulfill));
  } else {
    //AGAIN NOT SURE WHAT IS HAPPENING HERE.
    self.onFulfill(retPromise.fulfill.bind(retPromise));
  }

  return retPromise;
}
