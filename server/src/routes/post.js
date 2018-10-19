module.exports = function(app, db) {
  // Set Collection and Schema
  var PostSchema = require("../../models/post");
  var Post = db.model("posts", PostSchema);

  // Add new post
  app.post('/posts', (req, res) => {
    var new_post = new Post({
      title: req.body.title,
      description: req.body.description
    })

    new_post.save(function (error) {
      if (error) { throw error; }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })

  // Fetch all posts
  app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
      if (error) { throw error; }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })

  // Fetch single post
  app.get('/post/:id', (req, res) => {
    Post.findById(req.params.id, 'title description', function (error, post) {
      if (error) { throw error; }
      res.send(post)
    })
  })

  // Update a post
  app.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description', function (error, post) {
      if (error) { throw error; }
      post.title = req.body.title
      post.description = req.body.description

      post.save(function (error) {
        if (error) { throw error; }
        res.send({
          success: true
        })
      })
    })
  })

  // Delete a post
  app.delete('/posts/:id', (req, res) => {
    Post.remove({
      _id: req.params.id
    }, function(err, post){
      if (err) { res.send(err)}
      res.send({
        success: true
      })
    })
  })
};
