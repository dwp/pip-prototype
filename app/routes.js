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



    //Sprint 5 journey

    app.post('/pip5/preparing-food-more', function (req, res) {

      res.render('pip5/preparing-food-more',req.body);
    });

    app.post('/pip5/eating-drinking-more', function (req, res) {

      res.render('pip5/eating-drinking-more',req.body);
    });

    app.post('/pip5/moving-around-more', function (req, res) {

      res.render('pip5/moving-around-more',req.body);
    });

    app.post('/pip5/mixing-with-people-more', function (req, res) {

      res.render('pip5/mixing-with-people-more',req.body);
    });

    app.get('/pip11/healthcareprofessional', function (req, res) {
      if(req.query.monitored === 'Yes') {
        res.render('pip11/hcp-condition-2');
      } else {
        res.render('pip11/healthcareprofessional');
      }
    });

    app.post('/pip5/going-out-more', function (req, res) {

      res.render('pip5/going-out-more',req.body);
    });





    app.post('/story-gen/preparing-food-more', function (req, res) {

      res.render('story-gen/preparing-food-more',req.body);
    });

    app.post('/story-gen/eating-drinking-more', function (req, res) {

      res.render('story-gen/eating-drinking-more',req.body);
    });

    app.post('/story-gen/moving-around-more', function (req, res) {

      res.render('story-gen/moving-around-more',req.body);
    });

    app.post('/story-gen/mixing-with-people-more', function (req, res) {

      res.render('story-gen/mixing-with-people-more',req.body);
    });

    app.post('/story-gen/comunicating-more', function (req, res) {

      res.render('story-gen/communicating-more',req.body);
    });

    app.post('/story-gen/managing-treatments-more', function (req, res) {

      res.render('story-gen/managing-treatments-more',req.body);
    });

    app.post('/story-gen/going-out-more', function (req, res) {

      res.render('story-gen/going-out-more',req.body);
    });

    app.post('/story-gen/washing-bathing-more', function (req, res) {

      res.render('story-gen/washing-bathing-more',req.body);
    });

    app.post('/story-gen/going-to-toilet-more', function (req, res) {

      res.render('story-gen/going-to-toilet-more',req.body);
    });

    app.post('/story-gen/dressing-undressing-more', function (req, res) {

      res.render('story-gen/dressing-undressing-more',req.body);
    });

    app.post('/story-gen/reading-more', function (req, res) {

      res.render('story-gen/reading-more',req.body);
    });

    app.post('/story-gen/managing-money-more', function (req, res) {

      res.render('story-gen/managing-money-more',req.body);
    });

    /* route for review */

    require('./routes_review')(app);
    require('./review_flow')(app);
    require('./sprint6_1')(app);
    require('./sprint7_1')(app);
    require('./sprint8_1')(app);
    require('./routes-pip10')(app);

  }
};
