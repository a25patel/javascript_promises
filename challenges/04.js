var db = require('monk')('localhost/stocks-example')
var Post = db.get('posts')
var Comment = db.get('comments')

// delete all posts and all comments
// and when all documents in both collections are empty
// then insert a post and
// when the post has finished inserting
// then insert a comment with that post id
// then close the database connection with db.close()
