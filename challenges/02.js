var db = require('monk')('localhost/stocks-example')
var Post = db.get('posts')
var Comment = db.get('comments')

// delete all posts and
// then insert a post and
// then insert another post and
// then console.log the second post that was created
// then close the database connection with db.close()
