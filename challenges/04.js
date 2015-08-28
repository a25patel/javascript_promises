var db = require('monk')('localhost/stocks-example')
var post = db.get('posts')
var comment = db.get('comments')



post.remove({}).then(function(){
  return comment.remove({})
}).then(function(){
  return post.insert({task: 'Clean room'}).then(function(result){
    var masterObject = {};
    masterObject.post = result;
    return masterObject;
  })
}).then(function(masterObject){
  return comment.insert({comment: 'Food', postId: masterObject.post._id}).then(function(result){
    masterObject.comment = result;
    return masterObject;
  })
}).then(function(masterObject){
  console.log('Success!');
  console.log(masterObject);
  db.close();
})



// delete all posts and all comments
// and when all documents in both collections are empty
// then insert a post and
// when the post has finished inserting
// then insert a comment with that post id
// then close the database connection with db.close()
