module.exports = function(app){

   // session to forms

   app.get('/pip14a/', function (req, res) {
     res.render('pip14a/apply');
   });

   /*******************
   Helper
   *******************/
   app.get('/pip14a/helper', function (req, res) {
       res.render('pip14a/helper', {
         page   : '1',
         helper : req.session['pip14a-helper'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip14a/helper', function (req, res) {
     req.session['pip14a-helper'] = req.body;
     req.session['pip14a-helper']['helper' + req.body.helper] = req.body.helper;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/aboutYou');
     }
   });

   /*******************
   aboutYou
   *******************/
   app.get('/pip14a/aboutYou', function (req, res) {
       res.render('pip14a/aboutYou', {
         page   : '2',
         helper : req.session['pip14a-aboutYou'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip14a/aboutYou', function (req, res) {
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/contactDetails');
     }
   });

   /*******************
   contactDetails
   *******************/
   app.get('/pip14a/contactDetails', function (req, res) {
       res.render('pip14a/contactDetails', {
         page   : '3',
         helper : req.session['pip14a-contactDetails'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip14a/contactDetails', function (req, res) {
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/contactPref');
     }
   });

   /*******************
   contactPref
   *******************/
   app.get('/pip14a/contactPref', function (req, res) {
       res.render('pip14a/contactPref', {
         page   : '4',
         helper : req.session['pip14a-contactPref'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip14a/contactPref', function (req, res) {
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/nationality');
     }
   });

   /*******************
   Nationality
   *******************/
   app.get('/pip14a/nationality', function (req, res) {
       res.render('pip14a/nationality', {
         page        : '5',
         nationality : req.session['pip14a-nationality'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip14a/nationality', function (req, res) {
     req.session['pip14a-nationality'] = req.body;
     req.session['pip14a-nationality']['britishCitizen' + req.body.britishCitizen] = req.body.britishCitizen;
     req.session['pip14a-nationality']['livingUK' + req.body.livingUK]             = req.body.livingUK;
     req.session['pip14a-nationality']['beenAbroad' + req.body.beenAbroad]         = req.body.beenAbroad;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/paymentsFromAbroad');
     }
   });

   /*******************
   Payments from abroad
   *******************/
   app.get('/pip14a/paymentsFromAbroad', function (req, res) {
       res.render('pip14a/paymentsFromAbroad', {
         page               : '6',
         paymentsFromAbroad : req.session['pip14a-paymentsFromAbroad'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14a/paymentsFromAbroad', function (req, res) {
     req.session['pip14a-paymentsFromAbroad'] = req.body;
     req.session['pip14a-paymentsFromAbroad']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     req.session['pip14a-paymentsFromAbroad']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/youAndYourCondition');
     }
   });

   /*******************
   conditionDetails **todo
   *******************/
   app.get('/pip14a/conditionDetails', function (req, res) {
       res.render('pip14a/conditionDetails', {
         page             : '7',
         conditionDetails : req.session['pip14a-conditionDetails'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip14a/conditionDetails', function (req, res) {
     req.session['pip14a-conditionDetails'] = req.body;
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/medications');
     }
   });

   /*******************
   medications **todo
   *******************/
   app.get('/pip14a/medications', function (req, res) {
       res.render('pip14a/medications', {
         page        : '8',
         medications : req.session['pip14a-medications'],
         'edit'      : req.param('edit')
       });
   });
   app.post('/pip14a/medications', function (req, res) {
     req.session['pip14a-medications'] = req.body;

     if(req.body.currentMedications === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip14a/manageMedications?edit=true');
       } else {
         res.redirect('pip14a/manageMedications');
       }
     } else if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/treatments');
     }
   });

   /*******************
   manageMedications **todo
   *******************/
   app.get('/pip14a/manageMedications', function (req, res) {
       res.render('pip14a/manageMedications', {
         page               : '9',
         medications   : req.session['pip14a-manageMedications'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14a/manageMedications', function (req, res) {
     req.session['pip14a-manageMedications'] = req.body;
     //req.session['pip14a-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip14a-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip14a-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/treatments');
     }
   });

   /*******************
   treatments **todo
   *******************/
   app.get('/pip14a/treatments', function (req, res) {
       res.render('pip14a/treatments', {
         page               : '10',
         medications   : req.session['pip14a-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14a/treatments', function (req, res) {
     req.session['pip14a-treatments'] = req.body;

     if(req.body.atHome === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip14a/manageTreatments?edit=true');
       } else {
         res.redirect('pip14a/manageTreatments');
       }
     } else if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/sideEffects');
     }
   });

   /*******************
   manageTreatments **todo
   *******************/
   app.get('/pip14a/manageTreatments', function (req, res) {
       res.render('pip14a/manageTreatments', {
         page               : '11',
         medications   : req.session['pip14a-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14a/manageTreatments', function (req, res) {
     req.session['pip14a-manageTreatments'] = req.body;
     //req.session['pip14a-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip14a-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip14a-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/sideEffects');
     }
   });

   /*******************
   sideEffects **todo
   *******************/
   app.get('/pip14a/sideEffects', function (req, res) {
       res.render('pip14a/sideEffects', {
         page               : '12',
         medications   : req.session['pip14a-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14a/sideEffects', function (req, res) {
     req.session['pip14a-sideEffects'] = req.body;
     //req.session['pip14a-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip14a-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip14a-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/conditionAffects');
     }
   });


   /*******************
   conditionAffects
   *******************/
   app.get('/pip14a/conditionAffects', function (req, res) {
       res.render('pip14a/conditionAffects', {
         page               : '13',
         conditioneffects : req.session['pip14a-conditioneffects'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip14a/conditionAffects', function (req, res) {
     req.session['pip14a-conditioneffects'] = req.body;
     req.session['pip14a-conditioneffects']['conditioneffects' + req.body.conditioneffects] = req.body.conditioneffects;


     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/hcp-condition');
     }
   });

   /*******************
   hcp-condition
   *******************/
   app.get('/pip14a/hcp-condition', function (req, res) {
       res.render('pip14a/hcp-condition', {
         page               : '14',
         hcpcondition : req.session['pip14a-hcp-condition'],
         'edit'       : req.param('edit')
       });
   });
   app.post('/pip14a/hcp-condition', function (req, res) {
     req.session['pip14a-hcp-condition'] = req.body;
     req.session['pip14a-hcp-condition']['monitored' + req.body.monitored] = req.body.monitored;

     if(req.body.monitored === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip14a/hcp-condition-2?edit=true');
       } else {
         res.redirect('pip14a/hcp-condition-2');
       }
     } else if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/healthcareprofessional');
     }
   });

   /*******************
   hcp-condition2
   *******************/
   app.get('/pip14a/hcp-condition-2', function (req, res) {
       res.render('pip14a/hcp-condition-2', {
         page               : '15',
         hcpcondition2 : req.session['pip14a-hcp-condition-2'],
         'edit'        : req.param('edit')
       });
   });

   app.post('/pip14a/hcp-condition-2', function (req, res) {
     req.session['pip14a-hcp-condition-2'] = req.body;
     req.session['pip14a-hcp-condition-2']['conditionEffects' + req.body.conditionEffects] = req.body.conditionEffects;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/healthcareprofessional');
     }
   });

   /*******************
   healthcareprofessional **todo
   *******************/
   app.get('/pip14a/healthcareprofessional', function (req, res) {
       res.render('pip14a/healthcareprofessional', {
         page               : '16',
         healthcareprofessional : req.session['pip14a-healthcareprofessional'],
         'edit'                 : req.param('edit')
       });
   });

   app.post('/pip14a/healthcareprofessional', function (req, res) {
     req.session['pip14a-healthcareprofessional'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/submitEvidence');
     }
   });

   /*******************
   submitEvidence **todo
   *******************/
   app.get('/pip14a/submitEvidence', function (req, res) {
       res.render('pip14a/submitEvidence', {
         page               : '17',
         submitEvidence : req.session['pip14a-submitEvidence'],
         'edit'         : req.param('edit')
       });
   });

   app.post('/pip14a/submitEvidence', function (req, res) {
     req.session['pip14a-submitEvidence'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/specialAids');
     }
   });

   /*******************
   specialAids **todo
   *******************/
   app.get('/pip14a/specialAids', function (req, res) {
       res.render('pip14a/specialAids', {
         page               : '18',
         specialAids : req.session['pip14a-specialAids'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip14a/specialAids', function (req, res) {
     req.session['pip14a-specialAids'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/seeing');
     }
   });

   /*******************
   seeing
   *******************/
   app.get('/pip14a/seeing', function (req, res) {
       res.render('pip14a/seeing', {
         page               : '19',
         frequency : req.session['pip14a-seeing'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip14a/seeing', function (req, res) {
     req.session['pip14a-seeing'] = req.body;
     req.session['pip14a-seeing']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/speaking');
     }
   });

   /*******************
   speaking
   *******************/
   app.get('/pip14a/speaking', function (req, res) {
       res.render('pip14a/speaking', {
         page               : '20',
         frequency : req.session['pip14a-speaking'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip14a/speaking', function (req, res) {
     req.session['pip14a-speaking'] = req.body;
     req.session['pip14a-speaking']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip14a/check-and-change');
     } else {
       res.redirect('pip14a/hearing');
     }
    });

    /*******************
    hearing
    *******************/
    app.get('/pip14a/hearing', function (req, res) {
        res.render('pip14a/hearing', {
          page               : '21',
          frequency : req.session['pip14a-hearing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/hearing', function (req, res) {
      req.session['pip14a-hearing'] = req.body;
      req.session['pip14a-hearing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/youAndYourHome');
      }
    });


    /*******************
    gettingUp
    *******************/
    app.get('/pip14a/gettingUp', function (req, res) {
        res.render('pip14a/gettingUp', {
          page               : '22',
          frequency : req.session['pip14a-gettingUp'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/gettingUp', function (req, res) {
      req.session['pip14a-gettingUp'] = req.body;
      req.session['pip14a-gettingUp']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/toilet');
      }
    });

    /*******************
    toilet
    *******************/
    app.get('/pip14a/toilet', function (req, res) {
        res.render('pip14a/toilet', {
          page               : '23',
          frequency : req.session['pip14a-toilet'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/toilet', function (req, res) {
      req.session['pip14a-toilet'] = req.body;
      req.session['pip14a-toilet']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/washing');
      }
    });

    /*******************
    washing
    *******************/
    app.get('/pip14a/washing', function (req, res) {
        res.render('pip14a/washing', {
          page               : '24',
          frequency : req.session['pip14a-washing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/washing', function (req, res) {
      req.session['pip14a-washing'] = req.body;
      req.session['pip14a-washing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/gettingDressed');
      }
    });

    /*******************
    gettingDressed
    *******************/
    app.get('/pip14a/gettingDressed', function (req, res) {
        res.render('pip14a/gettingDressed', {
          page               : '25',
          frequency : req.session['pip14a-gettingDressed'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/gettingDressed', function (req, res) {
      req.session['pip14a-gettingDressed'] = req.body;
      req.session['pip14a-gettingDressed']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/preparingandcookingfood');
      }
    });

    /*******************
    preparingandcookingfood
    *******************/
    app.get('/pip14a/preparingandcookingfood', function (req, res) {
        res.render('pip14a/preparingandcookingfood', {
          page               : '26',
          frequency : req.session['pip14a-preparingandcookingfood'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/preparingandcookingfood', function (req, res) {
      req.session['pip14a-preparingandcookingfood'] = req.body;
      req.session['pip14a-preparingandcookingfood']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/eatinganddrinking');
      }
    });

    /*******************
    eatinganddrinking
    *******************/
    app.get('/pip14a/eatinganddrinking', function (req, res) {
        res.render('pip14a/eatinganddrinking', {
          page               : '27',
          frequency : req.session['pip14a-eatinganddrinking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/eatinganddrinking', function (req, res) {
      req.session['pip14a-eatinganddrinking'] = req.body;
      req.session['pip14a-eatinganddrinking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/leavingYourHome');
      }
    });

    /*******************
    goingOut
    *******************/
    app.get('/pip14a/goingOut', function (req, res) {
        res.render('pip14a/goingOut', {
          page               : '28',
          frequency : req.session['pip14a-goingOut'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/goingOut', function (req, res) {
      req.session['pip14a-goingOut'] = req.body;
      req.session['pip14a-goingOut']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/gettingOn');
      }
    });

    /*******************
    gettingOn **todo
    *******************/
    app.get('/pip14a/gettingOn', function (req, res) {
        res.render('pip14a/gettingOn', {
          page               : '29',
          frequency : req.session['pip14a-gettingOn'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/gettingOn', function (req, res) {
      req.session['pip14a-gettingOn'] = req.body;
      req.session['pip14a-gettingOn']['gettingOn' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/understanding');
      }
    });

    /*******************
    goingSomewhereLocalJourney **todo
    *******************/
    app.get('/pip14a/goingSomewhereLocalJourney', function (req, res) {
        res.render('pip14a/goingSomewhereLocalJourney', {
          page               : '30',
          frequency : req.session['pip14a-goingSomewhereLocalJourney'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/goingSomewhereLocalJourney', function (req, res) {
      req.session['pip14a-goingSomewhereLocalJourney'] = req.body;
      req.session['pip14a-goingSomewhereLocalJourney']['goingSomewhereLocalJourney' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/goingSomewhereNeverbeenBefore');
      }
    });

    /*******************
    goingSomewhereNeverbeenBefore **todo
    *******************/
    app.get('/pip14a/goingSomewhereNeverbeenBefore', function (req, res) {
        res.render('pip14a/goingSomewhereNeverbeenBefore', {
          page               : '31',
          frequency : req.session['pip14a-goingSomewhereNeverbeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/goingSomewhereNeverbeenBefore', function (req, res) {
      req.session['pip14a-goingSomewhereNeverbeenBefore'] = req.body;
      req.session['pip14a-goingSomewhereNeverbeenBefore']['goingSomewhereNeverbeenBefore' + req.body.frequency] = req.body.frequency;

      if(req.body.frequency === 'None of the time') {
        if (req.param('edit')) {
          res.redirect('pip14a/understanding-q?edit=true');
        } else {
          res.redirect('pip14a/understanding-q');
        }
      } else if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/goingSomewherebeenBefore');
      }
    });

    /*******************
    goingSomewherebeenBefore **todo
    *******************/
    app.get('/pip14a/goingSomewherebeenBefore', function (req, res) {
        res.render('pip14a/goingSomewherebeenBefore', {
          page               : '32',
          frequency : req.session['pip14a-goingSomewherebeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/goingSomewherebeenBefore', function (req, res) {
      req.session['pip14a-goingSomewherebeenBefore'] = req.body;
      req.session['pip14a-goingSomewherebeenBefore']['goingSomewherebeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/understanding-q');
      }
    });

    /*******************
    understanding-q **todo
    *******************/
    app.get('/pip14a/understanding-q', function (req, res) {
        res.render('pip14a/understanding-q', {
          page               : '33',
          frequency : req.session['pip14a-understanding-q'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/understanding-q', function (req, res) {
      req.session['pip14a-understanding-q'] = req.body;
      req.session['pip14a-understanding-q']['understanding-q' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14a/check-and-change');
      } else {
        res.redirect('pip14a/money');
      }
    });

    /*******************
    money **todo
    *******************/
    app.get('/pip14a/money', function (req, res) {
        res.render('pip14a/money', {
          page               : '34',
          frequency : req.session['pip14a-money'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14a/money', function (req, res) {
      req.session['pip14a-money'] = req.body;
      req.session['pip14a-money']['money' + req.body.frequency] = req.body.frequency;

      res.redirect('pip14a/check-and-change');

    });

   /*******************
   check and change
   *******************/
   app.get('/pip14a/check-and-change', function (req, res) {
     res.render('pip14a/check-and-change', {
       page                          : '35',
       helper                        : req.session['pip14a-helper'],
       nationality                   : req.session['pip14a-nationality'],
       paymentsFromAbroad            : req.session['pip14a-paymentsFromAbroad'],
       conditionDetails              : req.session['pip14a-conditionDetails'],
       medications                   : req.session['pip14a-medications'],
       manageMedications             : req.session['pip14a-manageMedications'],
       treatments                    : req.session['pip14a-treatments'],
       manageTreatments              : req.session['pip14a-manageTreatments'],
       sideEffects                   : req.session['pip14a-sideEffects'],
       conditioneffects              : req.session['pip14a-conditioneffects'],
       hcpcondition                  : req.session['pip14a-hcp-condition'],
       hcpcondition2                 : req.session['pip14a-hcp-condition-2'],
       healthcareprofessional        : req.session['pip14a-healthcareprofessional'],
       submitEvidence                : req.session['pip14a-submitEvidence'],
       specialAids                   : req.session['pip14a-specialAids'],
       gettingAround                 : req.session['pip14a-gettingAround'],
       seeing                        : req.session['pip14a-seeing'],
       hearing                       : req.session['pip14a-hearing'],
       speaking                      : req.session['pip14a-speaking'],
       gettingUp                     : req.session['pip14a-gettingUp'],
       toilet                        : req.session['pip14a-toilet'],
       washing                       : req.session['pip14a-washing'],
       gettingDressed                : req.session['pip14a-gettingDressed'],
       preparingandcookingfood       : req.session['pip14a-preparingandcookingfood'],
       eatinganddrinking             : req.session['pip14a-eatinganddrinking'],
       goingOut                      : req.session['pip14a-goingOut'],
       gettingOn                     : req.session['pip14a-gettingOn'],
       goingSomewhereNeverbeenBefore : req.session['pip14a-goingSomewhereNeverbeenBefore'],
       goingSomewherebeenBefore      : req.session['pip14a-goingSomewherebeenBefore'],
       understandingq                : req.session['pip14a-understanding-q'],
       money                         : req.session['pip14a-money'],
       additionalInfo                : req.session['pip14a-additionalInfo']
     });
   });

   app.post('/pip14a/check-and-change', function (req, res) {

     res.redirect('pip14a/additionalInfo');
   });

   /*******************
   additionalInfo **todo
   *******************/
   app.get('/pip14a/additionalInfo', function (req, res) {
       res.render('pip14a/additionalInfo', {
         page               : '36',
         frequency : req.session['pip14a-additionalInfo'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip14a/additionalInfo', function (req, res) {
     req.session['pip14a-additionalInfo'] = req.body;
     req.session['pip14a-additionalInfo']['additionalInfo' + req.body.frequency] = req.body.frequency;

     res.redirect('pip14a/declaration');

   });

   /*******************
   declaration
   *******************/
   app.get('/pip14a/declaration', function (req, res) {
       res.render('pip14a/declaration', {
         page               : '37'
       });
   });

   app.post('/pip14a/declaration', function (req, res) {

       var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD),
           date      = new Date(),
           emailText = '<b>helper</b>'            + JSON.stringify(req.session['pip14a-helper'], null, " <br/>") +
           '<hr />' +
           '<b>nationality</b>'                   + JSON.stringify(req.session['pip14a-nationality'], null, " <br/>") +
           '<hr />' +
           '<b>paymentsFromAbroad</b>'            + JSON.stringify(req.session['pip14a-paymentsFromAbroad'], null, " <br/>") +
           '<hr />' +
           '<b>conditionDetails</b>'              + JSON.stringify(req.session['pip14a-conditionDetails'], null, " <br/>") +
           '<hr />' +
           '<b>medications</b>'                   + JSON.stringify(req.session['pip14a-medications'],null,"<br />") +
           '<hr />' +
           '<b>manageMedications</b>'             + JSON.stringify(req.session['pip14a-manageMedications'],null,"<br />") +
           '<hr />' +
           '<b>treatments</b>'                    + JSON.stringify(req.session['pip14a-treatments'],null,"<br />") +
           '<hr />' +
           '<b>manageTreatments</b>'              + JSON.stringify(req.session['pip14a-manageTreatments'],null,"<br />") +
           '<hr />' +
           '<b>sideEffects</b>'                   + JSON.stringify(req.session['pip14a-sideEffects'],null,"<br />") +
           '<hr />' +
           '<b>conditioneffects</b>'              + JSON.stringify(req.session['pip14a-conditioneffects'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition</b>'                  + JSON.stringify(req.session['pip14a-hcp-condition'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition2</b>'                 + JSON.stringify(req.session['pip14a-hcp-condition-2'], null, " <br/>") +
           '<hr />' +
           '<b>healthcareprofessional</b>'        + JSON.stringify(req.session['pip14a-healthcareprofessional'], null, " <br/>") +
           '<hr />' +
           '<b>submitEvidence</b>'                + JSON.stringify(req.session['pip14a-submitEvidence'], null, " <br/>") +
           '<hr />' +
           '<b>specialAids</b>'                   + JSON.stringify(req.session['pip14a-specialAids'], null, " <br/>") +
           '<hr />' +
           '<b>gettingAround</b>'                 + JSON.stringify(req.session['pip14a-gettingAround'], null, " <br/>") +
           '<hr />' +
           '<b>seeing</b>'                        + JSON.stringify(req.session['pip14a-seeing'], null, " <br/>") +
           '<hr />' +
           '<b>hearing</b>'                       + JSON.stringify(req.session['pip14a-hearing'], null, " <br/>") +
           '<hr />' +
           '<b>speaking</b>'                      + JSON.stringify(req.session['pip14a-speaking'], null, " <br/>") +
           '<hr />' +
           '<b>gettingUp</b>'                     + JSON.stringify(req.session['pip14a-gettingUp'], null, " <br/>") +
           '<hr />' +
           '<b>toilet</b>'                        + JSON.stringify(req.session['pip14a-toilet'], null, " <br/>") +
           '<hr />' +
           '<b>washing</b>'                       + JSON.stringify(req.session['pip14a-washing'], null, " <br/>") +
           '<hr />' +
           '<b>gettingDressed</b>'                + JSON.stringify(req.session['pip14a-gettingDressed'], null, " <br/>") +
           '<hr />' +
           '<b>preparingandcookingfood</b>'       + JSON.stringify(req.session['pip14a-preparingandcookingfood'], null, " <br/>") +
           '<hr />' +
           '<b>eatinganddrinking</b>'             + JSON.stringify(req.session['pip14a-eatinganddrinking'], null, " <br/>") +
           '<hr />' +
           '<b>goingOut</b>'                      + JSON.stringify(req.session['pip14a-goingOut'], null, " <br/>") +
           '<hr />' +
           '<b>gettingOn</b>'                     + JSON.stringify(req.session['pip14a-gettingOn'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereLocalJourney</b>' + JSON.stringify(req.session['pip14a-goingSomewhereLocalJourney'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereNeverbeenBefore</b>' + JSON.stringify(req.session['pip14a-goingSomewhereNeverbeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewherebeenBefore</b>'      + JSON.stringify(req.session['pip14a-goingSomewherebeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>understandingq</b>'                + JSON.stringify(req.session['pip14a-understanding-q'], null, " <br/>") +
           '<hr />' +
           '<b>money</b>'                         + JSON.stringify(req.session['pip14a-money'], null, " <br/>") +
           '<hr />' +
           '<b>additionalInfo</b>'                + JSON.stringify(req.session['pip14a-additionalInfo'], null, " <br/>") +
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

    res.redirect('pip14a/thankyou');
   });


};
