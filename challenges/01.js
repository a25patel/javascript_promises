var db = require('monk')('localhost/stocks-example')
var Post = db.get('posts')
var Comment = db.get('comments')

Post.remove({}).then(function(){
  return Post.insert({newPost: 'Hello'})
}).then(function(result){
  console.log('success');
  console.log(result);
  db.close();
})



// delete all posts and
// then insert a post and
// then close the database connection with db.close()
