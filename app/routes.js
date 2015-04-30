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


    app.post('/mvp/eating-drinking-more', function (req, res) {

      res.render('mvp/eating-drinking-more',req.body);
    });
      
      
      
    app.post('/error/personal-details', function (req, res) {
      res.render('error/personal-details-error',req.body);
    });
      
      
  }
};
