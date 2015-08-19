var db = require('monk')('localhost/javascript-promises-examples')
var users = db.get('users')


var fraggle = users.find({})




users.remove({})
  .then(function () {
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




var calls = {
  remove: function(){
    return users.remove({}).then(function(result){
      var master = {}
      master.result = result;
      return master
    })
  },

  insert1: function(name){
    return users.insert({name: 'Joe'}).then(function(result){
      master.results = result
      return master
    })
  },
}


// CallBack

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
