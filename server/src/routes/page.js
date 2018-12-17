module.exports = function(app, db) {
  // Set Collection and Schema
  var pageSchema = require("../../models/page");
  var page = db.model("pages", pageSchema);

  // Add new page
  app.post('/posts', (req, res) => {
    var Components = new Object();
    Components["v1"] = { "type" : "TextComponent", "Titel": "Ein toller" ,"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do."};
    
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
    page.findById(req.params.id, 'title description components', function (error, post) {
      if (error) { throw error; }
      post.title = req.body.title
      post.description = req.body.description
      post.components = req.body.components

      post.save(function (error) {
        if (error) { throw error; }
        res.send({
          success: true
        })
      })
    })
  })

  // Add a page component
  app.put('/posts/:id/new/', (req, res) => {
    page.findById(req.params.id, 'title description components newComponent newCompID', function (error, post) {
      if (error) { throw error; }
      post.title = req.body.title
      post.description = req.body.description
      var componentList = req.body.components
      componentList[req.body.newCompID] = req.body.newComponent;
      post.components = componentList;

      post.save(function (error) {
        if (error) { throw error; }
        res.send({
          success: true
        })
      })
    })
  })

  app.delete('/posts/:id/del/', (req, res) => {
    page.findById(req.params.id, 'title description components delCompID', function (error, post) {
      if (error) { throw error; }
      post.title = req.body.title
      post.description = req.body.description
      var componentList = req.body.components
      delete componentList[req.body.delCompID]
      post.components = componentList

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
