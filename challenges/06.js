var db = require('monk')('localhost/stocks-example')
var post = db.get('posts')
var comment = db.get('comments')

post.remove({}).then(function(){
  return comment.remove({})
}).then(function(){
  return post.insert({post: 'Galvanize is the bees kness'}).then(function(result){
    var master = {};
    master.post = result
    return master
  })
}).then(function(master){
  return comment.insert({comment: 'Hell yes it is!', postId: master.post._id}).then(function(result){
    master.comment = result;
    return master
  })
}).then(function(master){
  db.close();
  console.log(master.post);
  console.log(master.comment);
})





// delete all posts and all comments
// and once they are deleted
// then insert a post and
// when that is inserted
// then insert a comment
// then close the database connection with db.close()
// then console log the post and the comment
