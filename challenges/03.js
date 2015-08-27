var db = require('monk')('localhost/stocks-example')
var Post = db.get('posts')
var Comment = db.get('comments')

Post.remove({}).then(function(){
  return Promise.all([
    Post.insert({task: 'Clean room'}),
    Post.insert({task: 'Vaccuum'}),
    Post.insert({task: 'Get Mail'}),
    Post.insert({task: 'get groceries'})
  ])
}).then(function(result){
  return Post.find({})
}).then(function(result){
  console.log(result);
  console.log('Success!');
  db.close();
})





// delete all posts and
// then insert 4 different posts
// then when all posts have been inserted
// then close the database connection with db.close()
