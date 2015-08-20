var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')
var messages = db.get('messages')

messages.remove({}).then(function f1() {
  return users.remove({})
}).then(function f2() {
  return users.insert({name: 'Joe'})
}).then(function f3(joe) {
  return messages.insert({senderId: joe._id})
}).then(function f4(message) {
  console.log("Message was inserted!", message);
  db.close()
})

//
// 1. Run messages.remove - aka remove all items in the collection messages
// 2. Once that is complete, remove all items in the users collection
// 3. Once that is complete, insert 'Joe' into the users collection
// 4. Once that is complete, insert a sender ID for joe in messages collection
// 5. once that is complete log that it worked and the information that was inserted
// in messages collection
// 6. close database
//
// NOW:
// .remove
// .then(f1)
// .then(f2)
// .then(f3)
// .then(f4)
//
// LATER:
// f1 (wait until the remove happens, then call...)
//   f2  (wait until the insert happens, then call...)
//     f3  (wait until the insert happens, then call...)
//       f4 (wait until the insert happens, then call...)
