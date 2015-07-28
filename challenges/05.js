var db = require('monk')('localhost/stocks-example')
var Post = db.get('posts')
var Comment = db.get('comments')

// delete all posts and all comments
// and once they are deleted
// then insert a post and
// when that is inserted
// then insert 3 comments for that post
// once all comments are inserted
// then close the database connection with db.close()
