var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')

//redo the entire promises repo with all challenges complete! 


// PROMISES

users.remove({}, function (err) {
  users.insert({name: 'Joe'}, function (err, result) {
    users.insert({name: 'Sue'}, function (err, result) {
      users.insert({name: 'Tim'}, function (err, result) {
        users.insert({name: 'Kim'}, function (err, result) {
          users.find({}, function (err, results) {
            console.log("\nSuccess! The records are: \n");
            console.log(results);
            db.close()
          })
        })
      })
    })
  })
})


// CallBack
//
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
//
// users.remove({}).then(function(){
//   return users.insert({name: 'Joe'})
// }).then(function(){
//   return users.insert({name: 'Sue'})
// }).then(function(){
//   return users.insert({name: 'Tim'})
// }).then(function(){
//   return users.insert({name: 'Kim'})
// }).then(function(){
//   return users.find({})
// }).then(function(results){
//   console.log("\nSuccess! The records are: \n");
//   console.log(results);
//   db.close()
// });
