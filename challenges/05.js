var db = require('monk')('localhost/stocks-example')
var post = db.get('posts')
var comment = db.get('comments')

post.remove({}).then(function(){
  return comment.remove({})
}).then(function(){
  return post.insert({post:"Omg! Can't wait for labor day weekend"}).then(function(result){
    var masterObject = {};
    masterObject.post = result
    return masterObject
  })
}).then(function(masterObject){
  return Promise.all([
    comment.insert({comment: 'Omg neither can i!', postId: masterObject.post._id}),
    comment.insert({comment: 'Yay lets do something!', postId: masterObject.post._id}),
    comment.insert({comment: 'Mimosas and samosas forever!', postId: masterObject.post._id})
  ]).then(function(results){
    masterObject.comment = results;
    return masterObject
  })
}).then(function(masterObject){
  console.log('Success!');
  console.log(masterObject);
  db.close();
})



// delete all posts and all comments
// and once they are deleted
// then insert a post and
// when that is inserted
// then insert 3 comments for that post
// once all comments are inserted
// then close the database connection with db.close()
