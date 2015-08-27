var db = require('monk')('localhost/javascript-promises-examples')

var users = db.get('users')
var promise = users.insert



users.remove({}).then(function(){
  return Promise.all([
    users.insert({name:'Sue'}),
    users.insert({name:'Tim'}),
    users.insert({name:'Kim'}),
    users.insert({name:'Joe'})
  ]).then(function(result){
    return users.find({})
  }).then(function(result){
    console.log('\nSuccess! The records are:\n');
    console.log(result);
    db.close()
  })
})

// CALLBACKS
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
