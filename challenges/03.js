var db = require('monk')('localhost/stocks-example')
var Post = db.get('posts')
var Comment = db.get('comments')

// delete all posts and
// then insert 4 different posts
// then when all posts have been inserted
// then close the database connection with db.close()
