module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes her

    //Test journey for 'sandbox'

    app.post('/test-post', function (req, res) {


      res.render('sandbox/pip07',req.body);
    });


    app.post('/story-gen/preparing-food-more', function (req, res) {

      res.render('story-gen/preparing-food-more',req.body);
    });

    app.post('/story-gen/eating-drinking-more', function (req, res) {

      res.render('story-gen/eating-drinking-more',req.body);
    });
      
      
  }
};
