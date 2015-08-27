var db = require('monk')('localhost/stocks-example')
var post = db.get('posts')
var Comment = db.get('comments')

post.remove({}).then(function(){
  return post.insert({name: 'Today'})
  
}).then(function(result){
  console.log('Success!' + result);
  db.close();
})



// delete all posts and
// then insert a post and
// then close the database connection with db.close()
