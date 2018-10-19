module.exports = function(app, db) {
  // Set Collection and Schema
  var pageSchema = require("../../models/page");
  var page = db.model("pages", pageSchema);

  // Add new page
  app.post('/posts', (req, res) => {
    var Components = {TextComponent : { "id" : "v1", "Titel": "Ein toller" ,"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do."},
                      TextImageComponent : { "id" : "v2", "Titel": "Ein toller" ,"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.", "ImgSrc": "/img/test.img"}};

    var new_page = new page({
      title: req.body.title,
      description: req.body.description,
      components: Components
    })

    new_page.save(function (error) {
      if (error) { throw error; }
      res.send({
        success: true,
        message: 'page saved successfully!'
      })
    })
  })

  // Fetch all posts (title + description)
  app.get('/posts', (req, res) => {
    page.find({}, 'title description', function (error, posts) {
      if (error) { throw error; }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })

  // Fetch single post
  app.get('/post/:id', (req, res) => {
    page.findById(req.params.id, 'title description components', function (error, post) {
      if (error) { throw error; }
      res.send(post)
    })
  })

  // Update a post
  app.put('/posts/:id', (req, res) => {
    page.findById(req.params.id, 'title description', function (error, post) {
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
    page.remove({
      _id: req.params.id
    }, function(err, post){
      if (err) { res.send(err)}
      res.send({
        success: true
      })
    })
  })
}
