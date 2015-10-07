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

/*
    app.get('/pip11/healthcareprofessional', function (req, res) {
      if(req.query.monitored === 'Yes') {
        res.render('pip11/hcp-condition-2');
      } else {
        res.render('pip11/healthcareprofessional');
      }
    });*/

    app.get('/pip11/emailtest', function (req, res) {
      var toilet = req.session['pip11-toilet'];

      var sendgrid  = require('sendgrid')('app38093582@heroku.com', 'sjdylbcy8257');
      //(process.env.SENDGRID_USERNAME, sjdylbcy8257);
      var emailText = "test line 1" + "\n" +
                      " test line 2<br />" +
                      "test line 3<br />" + toilet;
      sendgrid.send({
        to:       'gup.dwp@gmail.com',
        from:     'app38093582@heroku.com',
        subject:  'PIP User researhc --- Sept 30',
        html:     emailText
      }, function(err, json) {
        if (err) { return console.error(err); }
        console.error(json);
      });
      res.render('pip11/emailtest', {
        helper                        : req.session['pip11-helper'],
        nationality                   : req.session['pip11-nationality'],
        paymentsFromAbroad            : req.session['pip11-paymentsFromAbroad'],
        conditionDetails              : req.session['pip11-conditionDetails'],
        conditioneffects              : req.session['pip11-conditioneffects'],
        hcpcondition                  : req.session['pip11-hcp-condition'],
        hcpcondition2                 : req.session['pip11-hcp-condition-2'],
        healthcareprofessional        : req.session['pip11-healthcareprofessional'],
        submitEvidence                : req.session['pip11-submitEvidence'],
        specialAids                   : req.session['pip11-specialAids'],
        gettingAround                 : req.session['pip11-gettingAround'],
        seeing                        : req.session['pip11-seeing'],
        hearing                       : req.session['pip11-hearing'],
        speaking                      : req.session['pip11-speaking'],
        gettingUp                     : req.session['pip11-gettingUp'],
        toilet                        : req.session['pip11-toilet'],
        washing                       : req.session['pip11-washing'],
        gettingDressed                : req.session['pip11-gettingDressed'],
        preparingandcookingfood       : req.session['pip11-preparingandcookingfood'],
        eatinganddrinking             : req.session['pip11-eatinganddrinking'],
        goingOut                      : req.session['pip11-goingOut'],
        outAndAbout                   : req.session['pip11-outAndAbout'],
        gettingOn                     : req.session['pip11-gettingOn'],
        goingSomewhereNeverbeenBefore : req.session['pip11-goingSomewhereNeverbeenBefore'],
        goingSomewherebeenBefore      : req.session['pip11-goingSomewherebeenBefore'],
        understandingq                : req.session['pip11-understanding-q'],
        money                         : req.session['pip11-money'],
        additionalInfo                : req.session['pip11-additionalInfo']
      });
    });

    /* route for review */

    require('./routes_review')(app);
    require('./review_flow')(app);
    require('./sprint6_1')(app);
    require('./sprint7_1')(app);
    require('./sprint8_1')(app);
    require('./routes-pip11')(app);

  }
};
