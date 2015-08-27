var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')



// PROMISES
users.remove({}).then(function(){
  return users.insert({name:'Joe'})
}).then(function(result){
  return users.insert({name:'Sue'})
}).then(function(result){
  return users.insert({name:'Tim'})
}).then(function(result){
  return users.insert({name:'Kim'})
}).then(function(result){
  return users.find({})
}).then(function(result){
  console.log('\nSuccess! The records are:\n');
  console.log(result);
  db.close()
})


// CAlLBACKS

// users.remove({}, function (err) {
//   users.insert({name: 'Joe'}, function (err, result) {
//     users.insert({name: 'Sue'}, function (err, result) {
//       users.insert({name: 'Tim'}, function (err, result) {
//         users.insert({name: 'Kim'}, function (err, result) {
//           users.find({}, function (err, results) {
//             console.log("\nSuccess! The records are: \n");
//             console.log(results);
//             db.close()
//           })
//         })
//       })
//     })
//   })
// })
