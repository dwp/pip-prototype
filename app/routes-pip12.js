module.exports = function(app){

   // session to forms

   app.get('/pip12/', function (req, res) {
     res.render('pip12/apply');
   });

   /*******************
   Helper
   *******************/
   app.get('/pip12/helper', function (req, res) {
       res.render('pip12/helper', {
         page   : '1',
         helper : req.session['pip12-helper'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip12/helper', function (req, res) {
     req.session['pip12-helper'] = req.body;
     req.session['pip12-helper']['helper' + req.body.helper] = req.body.helper;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/nationality');
     }
   });

   /*******************
   Nationality
   *******************/
   app.get('/pip12/nationality', function (req, res) {
       res.render('pip12/nationality', {
         page        : '2',
         nationality : req.session['pip12-nationality'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip12/nationality', function (req, res) {
     req.session['pip12-nationality'] = req.body;
     req.session['pip12-nationality']['britishCitizen' + req.body.britishCitizen] = req.body.britishCitizen;
     req.session['pip12-nationality']['livingUK' + req.body.livingUK]             = req.body.livingUK;
     req.session['pip12-nationality']['beenAbroad' + req.body.beenAbroad]         = req.body.beenAbroad;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/paymentsFromAbroad');
     }
   });

   /*******************
   Payments from abroad
   *******************/
   app.get('/pip12/paymentsFromAbroad', function (req, res) {
       res.render('pip12/paymentsFromAbroad', {
         page               : '3',
         paymentsFromAbroad : req.session['pip12-paymentsFromAbroad'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/paymentsFromAbroad', function (req, res) {
     req.session['pip12-paymentsFromAbroad'] = req.body;
     req.session['pip12-paymentsFromAbroad']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     req.session['pip12-paymentsFromAbroad']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/conditionDetails');
     }
   });

   /*******************
   conditionDetails **todo
   *******************/
   app.get('/pip12/conditionDetails', function (req, res) {
       res.render('pip12/conditionDetails', {
         conditionDetails   : req.session['pip12-conditionDetails'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/conditionDetails', function (req, res) {
     req.session['pip12-conditionDetails'] = req.body;
     //req.session['pip12-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip12-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip12-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/medications');
     }
   });

   /*******************
   medications **todo
   *******************/
   app.get('/pip12/medications', function (req, res) {
       res.render('pip12/medications', {
         medications   : req.session['pip12-medications'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/medications', function (req, res) {
     req.session['pip12-medications'] = req.body;

     if(req.body.currentMedications === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip12/manageMedications?edit=true');
       } else {
         res.redirect('pip12/manageMedications');
       }
     } else if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/treatments');
     }
   });

   /*******************
   manageMedications **todo
   *******************/
   app.get('/pip12/manageMedications', function (req, res) {
       res.render('pip12/manageMedications', {
         medications   : req.session['pip12-manageMedications'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/manageMedications', function (req, res) {
     req.session['pip12-manageMedications'] = req.body;
     //req.session['pip12-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip12-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip12-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/treatments');
     }
   });

   /*******************
   treatments **todo
   *******************/
   app.get('/pip12/treatments', function (req, res) {
       res.render('pip12/treatments', {
         medications   : req.session['pip12-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/treatments', function (req, res) {
     req.session['pip12-treatments'] = req.body;

     if(req.body.plannedTreatments === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip12/manageTreatments?edit=true');
       } else {
         res.redirect('pip12/manageTreatments');
       }
     } else if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/sideEffects');
     }
   });

   /*******************
   manageTreatments **todo
   *******************/
   app.get('/pip12/manageTreatments', function (req, res) {
       res.render('pip12/manageTreatments', {
         medications   : req.session['pip12-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/manageTreatments', function (req, res) {
     req.session['pip12-manageTreatments'] = req.body;
     //req.session['pip12-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip12-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip12-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/sideEffects');
     }
   });

   /*******************
   sideEffects **todo
   *******************/
   app.get('/pip12/sideEffects', function (req, res) {
       res.render('pip12/sideEffects', {
         medications   : req.session['pip12-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip12/sideEffects', function (req, res) {
     req.session['pip12-sideEffects'] = req.body;
     //req.session['pip12-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip12-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip12-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/conditionAffects');
     }
   });


   /*******************
   conditionAffects
   *******************/
   app.get('/pip12/conditionAffects', function (req, res) {
       res.render('pip12/conditionAffects', {
         conditioneffects : req.session['pip12-conditioneffects'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip12/conditionAffects', function (req, res) {
     req.session['pip12-conditioneffects'] = req.body;
     req.session['pip12-conditioneffects']['conditioneffects' + req.body.conditioneffects] = req.body.conditioneffects;


     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/hcp-condition');
     }
   });

   /*******************
   hcp-condition
   *******************/
   app.get('/pip12/hcp-condition', function (req, res) {
       res.render('pip12/hcp-condition', {
         hcpcondition : req.session['pip12-hcp-condition'],
         'edit'       : req.param('edit')
       });
   });
   app.post('/pip12/hcp-condition', function (req, res) {
     req.session['pip12-hcp-condition'] = req.body;
     req.session['pip12-hcp-condition']['monitored' + req.body.monitored] = req.body.monitored;

     if(req.body.monitored === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip12/hcp-condition-2?edit=true');
       } else {
         res.redirect('pip12/hcp-condition-2');
       }
     } else if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/healthcareprofessional');
     }
   });

   /*******************
   hcp-condition2
   *******************/
   app.get('/pip12/hcp-condition-2', function (req, res) {
       res.render('pip12/hcp-condition-2', {
         hcpcondition2 : req.session['pip12-hcp-condition-2'],
         'edit'        : req.param('edit')
       });
   });

   app.post('/pip12/hcp-condition-2', function (req, res) {
     req.session['pip12-hcp-condition-2'] = req.body;
     req.session['pip12-hcp-condition-2']['conditionEffects' + req.body.conditionEffects] = req.body.conditionEffects;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/healthcareprofessional');
     }
   });

   /*******************
   healthcareprofessional **todo
   *******************/
   app.get('/pip12/healthcareprofessional', function (req, res) {
       res.render('pip12/healthcareprofessional', {
         healthcareprofessional : req.session['pip12-healthcareprofessional'],
         'edit'                 : req.param('edit')
       });
   });

   app.post('/pip12/healthcareprofessional', function (req, res) {
     req.session['pip12-healthcareprofessional'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/submitEvidence');
     }
   });

   /*******************
   submitEvidence **todo
   *******************/
   app.get('/pip12/submitEvidence', function (req, res) {
       res.render('pip12/submitEvidence', {
         submitEvidence : req.session['pip12-submitEvidence'],
         'edit'         : req.param('edit')
       });
   });

   app.post('/pip12/submitEvidence', function (req, res) {
     req.session['pip12-submitEvidence'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/summaryMain');
     }
   });

   /*******************
   specialAids **todo
   *******************/
   app.get('/pip12/specialAids', function (req, res) {
       res.render('pip12/specialAids', {
         specialAids : req.session['pip12-specialAids'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip12/specialAids', function (req, res) {
     req.session['pip12-specialAids'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/gettingAround');
     }
   });

   /*******************
   gettingAround
   *******************/
   app.get('/pip12/gettingAround', function (req, res) {
       res.render('pip12/gettingAround', {
         frequency : req.session['pip12-gettingAround'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip12/gettingAround', function (req, res) {
     req.session['pip12-gettingAround'] = req.body;
     req.session['pip12-gettingAround']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/seeing');
     }
   });

   /*******************
   seeing
   *******************/
   app.get('/pip12/seeing', function (req, res) {
       res.render('pip12/seeing', {
         frequency : req.session['pip12-seeing'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip12/seeing', function (req, res) {
     req.session['pip12-seeing'] = req.body;
     req.session['pip12-seeing']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip12/check-and-change');
     } else {
       res.redirect('pip12/hearing');
     }
   });

    /*******************
    hearing
    *******************/
    app.get('/pip12/hearing', function (req, res) {
        res.render('pip12/hearing', {
          frequency : req.session['pip12-hearing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/hearing', function (req, res) {
      req.session['pip12-hearing'] = req.body;
      req.session['pip12-hearing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/speaking');
      }
    });

    /*******************
    speaking
    *******************/
    app.get('/pip12/speaking', function (req, res) {
        res.render('pip12/speaking', {
          frequency : req.session['pip12-speaking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/speaking', function (req, res) {
      req.session['pip12-speaking'] = req.body;
      req.session['pip12-speaking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/gettingUp');
      }
    });

    /*******************
    gettingUp
    *******************/
    app.get('/pip12/gettingUp', function (req, res) {
        res.render('pip12/gettingUp', {
          frequency : req.session['pip12-gettingUp'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/gettingUp', function (req, res) {
      req.session['pip12-gettingUp'] = req.body;
      req.session['pip12-gettingUp']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/toilet');
      }
    });

    /*******************
    toilet
    *******************/
    app.get('/pip12/toilet', function (req, res) {
        res.render('pip12/toilet', {
          frequency : req.session['pip12-toilet'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/toilet', function (req, res) {
      req.session['pip12-toilet'] = req.body;
      req.session['pip12-toilet']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/washing');
      }
    });

    /*******************
    washing
    *******************/
    app.get('/pip12/washing', function (req, res) {
        res.render('pip12/washing', {
          frequency : req.session['pip12-washing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/washing', function (req, res) {
      req.session['pip12-washing'] = req.body;
      req.session['pip12-washing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/gettingDressed');
      }
    });

    /*******************
    gettingDressed
    *******************/
    app.get('/pip12/gettingDressed', function (req, res) {
        res.render('pip12/gettingDressed', {
          frequency : req.session['pip12-gettingDressed'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/gettingDressed', function (req, res) {
      req.session['pip12-gettingDressed'] = req.body;
      req.session['pip12-gettingDressed']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/preparingandcookingfood');
      }
    });

    /*******************
    preparingandcookingfood
    *******************/
    app.get('/pip12/preparingandcookingfood', function (req, res) {
        res.render('pip12/preparingandcookingfood', {
          frequency : req.session['pip12-preparingandcookingfood'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/preparingandcookingfood', function (req, res) {
      req.session['pip12-preparingandcookingfood'] = req.body;
      req.session['pip12-preparingandcookingfood']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/eatinganddrinking');
      }
    });

    /*******************
    eatinganddrinking
    *******************/
    app.get('/pip12/eatinganddrinking', function (req, res) {
        res.render('pip12/eatinganddrinking', {
          frequency : req.session['pip12-eatinganddrinking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/eatinganddrinking', function (req, res) {
      req.session['pip12-eatinganddrinking'] = req.body;
      req.session['pip12-eatinganddrinking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/goingOut');
      }
    });

    /*******************
    goingOut
    *******************/
    app.get('/pip12/goingOut', function (req, res) {
        res.render('pip12/goingOut', {
          'test'    : 'test',
          frequency : req.session['pip12-goingOut'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/goingOut', function (req, res) {
      req.session['pip12-goingOut'] = req.body;
      req.session['pip12-goingOut']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/gettingOn');
      }
    });

    /*******************
    outAndAbout **todo /no longer used
    *******************/
    app.get('/pip12/outAndAbout', function (req, res) {
        res.render('pip12/outAndAbout', {
          frequency : req.session['pip12-outAndAbout'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/outAndAbout', function (req, res) {
      req.session['pip12-outAndAbout'] = req.body;
      req.session['pip12-outAndAbout']['outAndAbout' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/gettingOn');
      }
    });

    /*******************
    gettingOn **todo
    *******************/
    app.get('/pip12/gettingOn', function (req, res) {
        res.render('pip12/gettingOn', {
          frequency : req.session['pip12-gettingOn'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/gettingOn', function (req, res) {
      req.session['pip12-gettingOn'] = req.body;
      req.session['pip12-gettingOn']['gettingOn' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/goingSomewhereNeverbeenBefore');
      }
    });

    /*******************
    goingSomewhereNeverbeenBefore **todo
    *******************/
    app.get('/pip12/goingSomewhereNeverbeenBefore', function (req, res) {
        res.render('pip12/goingSomewhereNeverbeenBefore', {
          frequency : req.session['pip12-goingSomewhereNeverbeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/goingSomewhereNeverbeenBefore', function (req, res) {
      req.session['pip12-goingSomewhereNeverbeenBefore'] = req.body;
      req.session['pip12-goingSomewhereNeverbeenBefore']['goingSomewhereNeverbeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/goingSomewherebeenBefore');
      }
    });

    /*******************
    goingSomewherebeenBefore **todo
    *******************/
    app.get('/pip12/goingSomewherebeenBefore', function (req, res) {
        res.render('pip12/goingSomewherebeenBefore', {
          frequency : req.session['pip12-goingSomewherebeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/goingSomewherebeenBefore', function (req, res) {
      req.session['pip12-goingSomewherebeenBefore'] = req.body;
      req.session['pip12-goingSomewherebeenBefore']['goingSomewherebeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/understanding-q');
      }
    });

    /*******************
    understanding-q **todo
    *******************/
    app.get('/pip12/understanding-q', function (req, res) {
        res.render('pip12/understanding-q', {
          frequency : req.session['pip12-understanding-q'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/understanding-q', function (req, res) {
      req.session['pip12-understanding-q'] = req.body;
      req.session['pip12-understanding-q']['understanding-q' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip12/check-and-change');
      } else {
        res.redirect('pip12/money');
      }
    });

    /*******************
    money **todo
    *******************/
    app.get('/pip12/money', function (req, res) {
        res.render('pip12/money', {
          frequency : req.session['pip12-money'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/money', function (req, res) {
      req.session['pip12-money'] = req.body;
      req.session['pip12-money']['money' + req.body.frequency] = req.body.frequency;

      res.redirect('pip12/check-and-change');

    });

    /*******************
    additionalInfo **todo
    *******************/
    app.get('/pip12/additionalInfo', function (req, res) {
        res.render('pip12/additionalInfo', {
          frequency : req.session['pip12-additionalInfo'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip12/additionalInfo', function (req, res) {
      req.session['pip12-additionalInfo'] = req.body;
      req.session['pip12-additionalInfo']['additionalInfo' + req.body.frequency] = req.body.frequency;

      res.redirect('pip12/declaration');

    });


   /*******************
   check and change
   *******************/
   app.get('/pip12/check-and-change', function (req, res) {
     res.render('pip12/check-and-change', {
       helper                        : req.session['pip12-helper'],
       nationality                   : req.session['pip12-nationality'],
       paymentsFromAbroad            : req.session['pip12-paymentsFromAbroad'],
       conditionDetails              : req.session['pip12-conditionDetails'],
       conditioneffects              : req.session['pip12-conditioneffects'],
       hcpcondition                  : req.session['pip12-hcp-condition'],
       hcpcondition2                 : req.session['pip12-hcp-condition-2'],
       healthcareprofessional        : req.session['pip12-healthcareprofessional'],
       submitEvidence                : req.session['pip12-submitEvidence'],
       specialAids                   : req.session['pip12-specialAids'],
       gettingAround                 : req.session['pip12-gettingAround'],
       seeing                        : req.session['pip12-seeing'],
       hearing                       : req.session['pip12-hearing'],
       speaking                      : req.session['pip12-speaking'],
       gettingUp                     : req.session['pip12-gettingUp'],
       toilet                        : req.session['pip12-toilet'],
       washing                       : req.session['pip12-washing'],
       gettingDressed                : req.session['pip12-gettingDressed'],
       preparingandcookingfood       : req.session['pip12-preparingandcookingfood'],
       eatinganddrinking             : req.session['pip12-eatinganddrinking'],
       goingOut                      : req.session['pip12-goingOut'],
       gettingOn                     : req.session['pip12-gettingOn'],
       goingSomewhereNeverbeenBefore : req.session['pip12-goingSomewhereNeverbeenBefore'],
       goingSomewherebeenBefore      : req.session['pip12-goingSomewherebeenBefore'],
       understandingq                : req.session['pip12-understanding-q'],
       money                         : req.session['pip12-money'],
       additionalInfo                : req.session['pip12-additionalInfo']
     });
   });

   app.post('/pip12/check-and-change', function (req, res) {

     res.redirect('pip12/additionalInfo');
   });

   /*******************
   declaration
   *******************/
   app.post('/pip12/declaration', function (req, res) {

       var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD),
           date      = new Date(),
           emailText = '<b>helper</b>'            + JSON.stringify(req.session['pip12-helper'], null, " <br/>") +
           '<hr />' +
           '<b>nationality</b>'                   + JSON.stringify(req.session['pip12-nationality'], null, " <br/>") +
           '<hr />' +
           '<b>paymentsFromAbroad</b>'            + JSON.stringify(req.session['pip12-paymentsFromAbroad'], null, " <br/>") +
           '<hr />' +
           '<b>conditionDetails</b>'              + JSON.stringify(req.session['pip12-conditionDetails'], null, " <br/>") +
           '<hr />' +
           '<b>conditioneffects</b>'              + JSON.stringify(req.session['pip12-conditioneffects'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition</b>'                  + JSON.stringify(req.session['pip12-hcp-condition'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition2</b>'                 + JSON.stringify(req.session['pip12-hcp-condition-2'], null, " <br/>") +
           '<hr />' +
           '<b>healthcareprofessional</b>'        + JSON.stringify(req.session['pip12-healthcareprofessional'], null, " <br/>") +
           '<hr />' +
           '<b>submitEvidence</b>'                + JSON.stringify(req.session['pip12-submitEvidence'], null, " <br/>") +
           '<hr />' +
           '<b>specialAids</b>'                   + JSON.stringify(req.session['pip12-specialAids'], null, " <br/>") +
           '<hr />' +
           '<b>gettingAround</b>'                 + JSON.stringify(req.session['pip12-gettingAround'], null, " <br/>") +
           '<hr />' +
           '<b>seeing</b>'                        + JSON.stringify(req.session['pip12-seeing'], null, " <br/>") +
           '<hr />' +
           '<b>hearing</b>'                       + JSON.stringify(req.session['pip12-hearing'], null, " <br/>") +
           '<hr />' +
           '<b>speaking</b>'                      + JSON.stringify(req.session['pip12-speaking'], null, " <br/>") +
           '<hr />' +
           '<b>gettingUp</b>'                     + JSON.stringify(req.session['pip12-gettingUp'], null, " <br/>") +
           '<hr />' +
           '<b>toilet</b>'                        + JSON.stringify(req.session['pip12-toilet'], null, " <br/>") +
           '<hr />' +
           '<b>washing</b>'                       + JSON.stringify(req.session['pip12-washing'], null, " <br/>") +
           '<hr />' +
           '<b>gettingDressed</b>'                + JSON.stringify(req.session['pip12-gettingDressed'], null, " <br/>") +
           '<hr />' +
           '<b>preparingandcookingfood</b>'       + JSON.stringify(req.session['pip12-preparingandcookingfood'], null, " <br/>") +
           '<hr />' +
           '<b>eatinganddrinking</b>'             + JSON.stringify(req.session['pip12-eatinganddrinking'], null, " <br/>") +
           '<hr />' +
           '<b>goingOut</b>'                      + JSON.stringify(req.session['pip12-goingOut'], null, " <br/>") +
           '<hr />' +
           '<b>gettingOn</b>'                     + JSON.stringify(req.session['pip12-gettingOn'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereNeverbeenBefore</b>' + JSON.stringify(req.session['pip12-goingSomewhereNeverbeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewherebeenBefore</b>'      + JSON.stringify(req.session['pip12-goingSomewherebeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>understandingq</b>'                + JSON.stringify(req.session['pip12-understanding-q'], null, " <br/>") +
           '<hr />' +
           '<b>money</b>'                         + JSON.stringify(req.session['pip12-money'], null, " <br/>") +
           '<hr />' +
           '<b>additionalInfo</b>'                + JSON.stringify(req.session['pip12-additionalInfo'], null, " <br/>") +
           '<hr />' +
           '<b>declaration</b>'                +   JSON.stringify(req.body, null, " <br/>");

      if (process.env.sendEmail === 'True') {
       sendgrid.send({
         //to :       'gup.dwp@gmail.com',
         to:       process.env.EMAIL,
         from:     'PIP-User-Research@UserResearch.com',
         subject:  'Sent at - ' + date.toString(),
         html:     emailText
       }, function(err, json) {
         if (err) { return console.error(err); } else { req.session.destroy(); }
         console.error(json);
       });
     }

    res.redirect('pip12/thankyou');
   });


};
