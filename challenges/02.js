var db = require('monk')('localhost/stocks-example')
var post = db.get('posts')
var Comment = db.get('comments')

post.remove({}).then(function(){
  return post.insert({name: 'Joe'})
}).then(function(result){
  return post.insert({verse: 'hello'})
}).then(function(result){
  return post.find({})
}).then(function(result){
  console.log(result);
  db.close();
})



// delete all posts and
// then insert a post and
// then insert another post and
// then console.log the second post that was created
// then close the database connection with db.close()
