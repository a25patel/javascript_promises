var db = require('monk')('localhost/javascript-promises-examples')

var users = db.get('users')
var promise = users.insert

users.remove({}).then(function(){
  Promise.all([
    users.insert({name: 'Joe'}),
    users.insert({name: 'Sue'}),
    users.insert({name: 'Tim'}),
    users.insert({name: 'Kim'}),
  ])
.then(function(result){
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




//Change alll of this to promise.all. Need to finish all the challenges as well, then do
// mongo assocations plus promises once more, then move on!
