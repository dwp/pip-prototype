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
   conditionDetails **todo
   *******************/
   app.get('/pip11/conditionDetails', function (req, res) {
       res.render('pip11/conditionDetails', {
         conditionDetails   : req.session['pip11-conditionDetails'],
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
   conditionAffects
   *******************/
   app.get('/pip11/conditionAffects', function (req, res) {
       res.render('pip11/conditionAffects', {
         conditioneffects : req.session['pip11-conditioneffects'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip11/conditionAffects', function (req, res) {
     req.session['pip11-conditioneffects'] = req.body;
     req.session['pip11-conditioneffects']['conditioneffects' + req.body.conditioneffects] = req.body.conditioneffects;


     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/hcp-condition');
     }
   });

   /*******************
   hcp-condition
   *******************/
   app.get('/pip11/hcp-condition', function (req, res) {
       res.render('pip11/hcp-condition', {
         hcpcondition : req.session['pip11-hcp-condition'],
         'edit'       : req.param('edit')
       });
   });
   app.post('/pip11/hcp-condition', function (req, res) {
     req.session['pip11-hcp-condition'] = req.body;
     req.session['pip11-hcp-condition']['monitored' + req.body.monitored] = req.body.monitored;

     if(req.body.monitored === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip11/hcp-condition-2?edit=true');
       } else {
         res.redirect('pip11/hcp-condition-2');
       }
     } else if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/healthcareprofessional');
     }
   });

   /*******************
   hcp-condition2
   *******************/
   app.get('/pip11/hcp-condition-2', function (req, res) {
       res.render('pip11/hcp-condition-2', {
         hcpcondition2 : req.session['pip11-hcp-condition-2'],
         'edit'        : req.param('edit')
       });
   });

   app.post('/pip11/hcp-condition-2', function (req, res) {
     req.session['pip11-hcp-condition-2'] = req.body;
     req.session['pip11-hcp-condition-2']['conditionEffects' + req.body.conditionEffects] = req.body.conditionEffects;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/healthcareprofessional');
     }
   });

   /*******************
   healthcareprofessional **todo
   *******************/
   app.get('/pip11/healthcareprofessional', function (req, res) {
       res.render('pip11/healthcareprofessional', {
         healthcareprofessional : req.session['pip11-healthcareprofessional'],
         'edit'                 : req.param('edit')
       });
   });

   app.post('/pip11/healthcareprofessional', function (req, res) {
     req.session['pip11-healthcareprofessional'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/submitEvidence');
     }
   });

   /*******************
   submitEvidence **todo
   *******************/
   app.get('/pip11/submitEvidence', function (req, res) {
       res.render('pip11/submitEvidence', {
         submitEvidence : req.session['pip11-submitEvidence'],
         'edit'         : req.param('edit')
       });
   });

   app.post('/pip11/submitEvidence', function (req, res) {
     req.session['pip11-submitEvidence'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/aboutYourHome');
     }
   });

   /*******************
   specialAids **todo
   *******************/
   app.get('/pip11/specialAids', function (req, res) {
       res.render('pip11/specialAids', {
         specialAids : req.session['pip11-specialAids'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip11/specialAids', function (req, res) {
     req.session['pip11-specialAids'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/gettingAround');
     }
   });

   /*******************
   gettingAround
   *******************/
   app.get('/pip11/gettingAround', function (req, res) {
       res.render('pip11/gettingAround', {
         frequency : req.session['pip11-gettingAround'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip11/gettingAround', function (req, res) {
     req.session['pip11-gettingAround'] = req.body;
     req.session['pip11-gettingAround']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/seeing');
     }
   });

   /*******************
   seeing
   *******************/
   app.get('/pip11/seeing', function (req, res) {
       res.render('pip11/seeing', {
         frequency : req.session['pip11-seeing'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip11/seeing', function (req, res) {
     req.session['pip11-seeing'] = req.body;
     req.session['pip11-seeing']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip11/check-and-change');
     } else {
       res.redirect('pip11/hearing');
     }
   });

    /*******************
    hearing
    *******************/
    app.get('/pip11/hearing', function (req, res) {
        res.render('pip11/hearing', {
          frequency : req.session['pip11-hearing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/hearing', function (req, res) {
      req.session['pip11-hearing'] = req.body;
      req.session['pip11-hearing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/speaking');
      }
    });

    /*******************
    speaking
    *******************/
    app.get('/pip11/speaking', function (req, res) {
        res.render('pip11/speaking', {
          frequency : req.session['pip11-speaking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/speaking', function (req, res) {
      req.session['pip11-speaking'] = req.body;
      req.session['pip11-speaking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/caringForYourself');
      }
    });

    /*******************
    gettingUp
    *******************/
    app.get('/pip11/gettingUp', function (req, res) {
        res.render('pip11/gettingUp', {
          frequency : req.session['pip11-gettingUp'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/gettingUp', function (req, res) {
      req.session['pip11-gettingUp'] = req.body;
      req.session['pip11-gettingUp']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/toilet');
      }
    });

    /*******************
    toilet
    *******************/
    app.get('/pip11/toilet', function (req, res) {
        res.render('pip11/toilet', {
          frequency : req.session['pip11-toilet'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/toilet', function (req, res) {
      req.session['pip11-toilet'] = req.body;
      req.session['pip11-toilet']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/washing');
      }
    });

    /*******************
    washing
    *******************/
    app.get('/pip11/washing', function (req, res) {
        res.render('pip11/washing', {
          frequency : req.session['pip11-washing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/washing', function (req, res) {
      req.session['pip11-washing'] = req.body;
      req.session['pip11-washing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/gettingDressed');
      }
    });

    /*******************
    gettingDressed
    *******************/
    app.get('/pip11/gettingDressed', function (req, res) {
        res.render('pip11/gettingDressed', {
          frequency : req.session['pip11-gettingDressed'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/gettingDressed', function (req, res) {
      req.session['pip11-gettingDressed'] = req.body;
      req.session['pip11-gettingDressed']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/preparingandcookingfood');
      }
    });

    /*******************
    preparingandcookingfood
    *******************/
    app.get('/pip11/preparingandcookingfood', function (req, res) {
        res.render('pip11/preparingandcookingfood', {
          frequency : req.session['pip11-preparingandcookingfood'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/preparingandcookingfood', function (req, res) {
      req.session['pip11-preparingandcookingfood'] = req.body;
      req.session['pip11-preparingandcookingfood']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/eatinganddrinking');
      }
    });

    /*******************
    eatinganddrinking
    *******************/
    app.get('/pip11/eatinganddrinking', function (req, res) {
        res.render('pip11/eatinganddrinking', {
          frequency : req.session['pip11-eatinganddrinking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/eatinganddrinking', function (req, res) {
      req.session['pip11-eatinganddrinking'] = req.body;
      req.session['pip11-eatinganddrinking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/leavingYourHome');
      }
    });

    /*******************
    goingOut
    *******************/
    app.get('/pip11/goingOut', function (req, res) {
        res.render('pip11/goingOut', {
          frequency : req.session['pip11-goingOut'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/goingOut', function (req, res) {
      req.session['pip11-goingOut'] = req.body;
      req.session['pip11-goingOut']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/outAndAbout');
      }
    });

    /*******************
    outAndAbout **todo
    *******************/
    app.get('/pip11/outAndAbout', function (req, res) {
        res.render('pip11/outAndAbout', {
          frequency : req.session['pip11-outAndAbout'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/outAndAbout', function (req, res) {
      req.session['pip11-outAndAbout'] = req.body;
      req.session['pip11-outAndAbout']['outAndAbout' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/gettingOn');
      }
    });

    /*******************
    gettingOn **todo
    *******************/
    app.get('/pip11/gettingOn', function (req, res) {
        res.render('pip11/gettingOn', {
          frequency : req.session['pip11-gettingOn'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/gettingOn', function (req, res) {
      req.session['pip11-gettingOn'] = req.body;
      req.session['pip11-gettingOn']['gettingOn' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/understanding');
      }
    });

    /*******************
    goingSomewhereNeverbeenBefore **todo
    *******************/
    app.get('/pip11/goingSomewhereNeverbeenBefore', function (req, res) {
        res.render('pip11/goingSomewhereNeverbeenBefore', {
          frequency : req.session['pip11-goingSomewhereNeverbeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/goingSomewhereNeverbeenBefore', function (req, res) {
      req.session['pip11-goingSomewhereNeverbeenBefore'] = req.body;
      req.session['pip11-goingSomewhereNeverbeenBefore']['goingSomewhereNeverbeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/goingSomewherebeenBefore');
      }
    });

    /*******************
    goingSomewherebeenBefore **todo
    *******************/
    app.get('/pip11/goingSomewherebeenBefore', function (req, res) {
        res.render('pip11/goingSomewherebeenBefore', {
          frequency : req.session['pip11-goingSomewherebeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/goingSomewherebeenBefore', function (req, res) {
      req.session['pip11-goingSomewherebeenBefore'] = req.body;
      req.session['pip11-goingSomewherebeenBefore']['goingSomewherebeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/understanding-q');
      }
    });

    /*******************
    understanding-q **todo
    *******************/
    app.get('/pip11/understanding-q', function (req, res) {
        res.render('pip11/understanding-q', {
          frequency : req.session['pip11-understanding-q'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/understanding-q', function (req, res) {
      req.session['pip11-understanding-q'] = req.body;
      req.session['pip11-understanding-q']['understanding-q' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/money');
      }
    });

    /*******************
    money **todo
    *******************/
    app.get('/pip11/money', function (req, res) {
        res.render('pip11/money', {
          frequency : req.session['pip11-money'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/money', function (req, res) {
      req.session['pip11-money'] = req.body;
      req.session['pip11-money']['money' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip11/check-and-change');
      } else {
        res.redirect('pip11/additionalInfo');
      }
    });

    /*******************
    additionalInfo **todo
    *******************/
    app.get('/pip11/additionalInfo', function (req, res) {
        res.render('pip11/additionalInfo', {
          frequency : req.session['pip11-additionalInfo'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip11/additionalInfo', function (req, res) {
      req.session['pip11-additionalInfo'] = req.body;
      req.session['pip11-additionalInfo']['additionalInfo' + req.body.frequency] = req.body.frequency;

      res.redirect('pip11/check-and-change');

    });


   /*******************
   check and change
   *******************/
   app.get('/pip11/check-and-change', function (req, res) {
     res.render('pip11/check-and-change', {
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
};
