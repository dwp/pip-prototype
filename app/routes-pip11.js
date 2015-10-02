module.exports = function(app){

   // session to forms

   app.get('/pip11/', function (req, res) {
     res.render('pip11/apply');
   });

   /*******************
   Helper
   *******************/
   app.get('/pip11/helper', function (req, res) {
       res.render('pip11/helper', {
         helper : req.session['pip11-helper'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip11/helper', function (req, res) {
     req.session['pip11-helper'] = req.body;
     req.session['pip11-helper']['helper' + req.body.helper] = req.body.helper;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/nationality');
     }
   });

   /*******************
   Nationality
   *******************/
   app.get('/pip11/nationality', function (req, res) {
       res.render('pip11/nationality', {
         nationality : req.session['pip11-nationality'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip11/nationality', function (req, res) {
     req.session['pip11-nationality'] = req.body;
     req.session['pip11-nationality']['britishCitizen' + req.body.britishCitizen] = req.body.britishCitizen;
     req.session['pip11-nationality']['livingUK' + req.body.livingUK]             = req.body.livingUK;
     req.session['pip11-nationality']['beenAbroad' + req.body.beenAbroad]         = req.body.beenAbroad;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/paymentsFromAbroad');
     }
   });

   /*******************
   Payments from abroad
   *******************/
   app.get('/pip11/paymentsFromAbroad', function (req, res) {
       res.render('pip11/paymentsFromAbroad', {
         paymentsFromAbroad : req.session['pip11-paymentsFromAbroad'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip11/paymentsFromAbroad', function (req, res) {
     req.session['pip11-paymentsFromAbroad'] = req.body;
     req.session['pip11-paymentsFromAbroad']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     req.session['pip11-paymentsFromAbroad']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/conditionDetails');
     }
   });

   /*******************
   conditionDetails
   *******************/
   app.get('/pip11/conditionDetails', function (req, res) {
       res.render('pip11/conditionDetails', {
         paymentsFromAbroad : req.session['pip11-conditionDetails'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip11/conditionDetails', function (req, res) {
     req.session['pip11-conditionDetails'] = req.body;
     //req.session['pip11-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip11-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip11-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/conditionAffects');
     }
   });

   /*******************
   check and change
   *******************/
   app.get('/pip11/check-and-change', function (req, res) {
     res.render('pip11/check-and-change', {
       helper             : req.session['pip11-helper'],
       nationality        : req.session['pip11-nationality'],
       paymentsFromAbroad : req.session['pip11-paymentsFromAbroad']
     });
   });
};
