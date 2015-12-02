module.exports = function(app){

   // session to forms

   app.get('/pip14/', function (req, res) {
     res.render('pip14/apply');
   });

   /*******************
   Helper
   *******************/
   app.get('/pip14/helper', function (req, res) {
       res.render('pip14/helper', {
         page   : '1',
         helper : req.session['pip14-helper'],
         'edit' : req.param('edit')
       });
   });

   app.post('/pip14/helper', function (req, res) {
     req.session['pip14-helper'] = req.body;
     req.session['pip14-helper']['helper' + req.body.helper] = req.body.helper;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/nationality');
     }
   });

   /*******************
   Nationality
   *******************/
   app.get('/pip14/nationality', function (req, res) {
       res.render('pip14/nationality', {
         page        : '2',
         nationality : req.session['pip14-nationality'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip14/nationality', function (req, res) {
     req.session['pip14-nationality'] = req.body;
     req.session['pip14-nationality']['britishCitizen' + req.body.britishCitizen] = req.body.britishCitizen;
     req.session['pip14-nationality']['livingUK' + req.body.livingUK]             = req.body.livingUK;
     req.session['pip14-nationality']['beenAbroad' + req.body.beenAbroad]         = req.body.beenAbroad;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/paymentsFromAbroad');
     }
   });

   /*******************
   Payments from abroad
   *******************/
   app.get('/pip14/paymentsFromAbroad', function (req, res) {
       res.render('pip14/paymentsFromAbroad', {
         page               : '3',
         paymentsFromAbroad : req.session['pip14-paymentsFromAbroad'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14/paymentsFromAbroad', function (req, res) {
     req.session['pip14-paymentsFromAbroad'] = req.body;
     req.session['pip14-paymentsFromAbroad']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     req.session['pip14-paymentsFromAbroad']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/youAndYourCondition');
     }
   });

   /*******************
   conditionDetails **todo
   *******************/
   app.get('/pip14/conditionDetails', function (req, res) {
       res.render('pip14/conditionDetails', {
         page             : '4',
         conditionDetails : req.session['pip14-conditionDetails'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip14/conditionDetails', function (req, res) {
     req.session['pip14-conditionDetails'] = req.body;
     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/medications');
     }
   });

   /*******************
   medications **todo
   *******************/
   app.get('/pip14/medications', function (req, res) {
       res.render('pip14/medications', {
         page        : '5',
         medications : req.session['pip14-medications'],
         'edit'      : req.param('edit')
       });
   });
   app.post('/pip14/medications', function (req, res) {
     req.session['pip14-medications'] = req.body;

     if(req.body.currentMedications === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip14/manageMedications?edit=true');
       } else {
         res.redirect('pip14/manageMedications');
       }
     } else if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/treatments');
     }
   });

   /*******************
   manageMedications **todo
   *******************/
   app.get('/pip14/manageMedications', function (req, res) {
       res.render('pip14/manageMedications', {
         page               : '6',
         medications   : req.session['pip14-manageMedications'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14/manageMedications', function (req, res) {
     req.session['pip14-manageMedications'] = req.body;
     //req.session['pip14-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip14-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip14-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/treatments');
     }
   });

   /*******************
   treatments **todo
   *******************/
   app.get('/pip14/treatments', function (req, res) {
       res.render('pip14/treatments', {
         page               : '7',
         medications   : req.session['pip14-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14/treatments', function (req, res) {
     req.session['pip14-treatments'] = req.body;

     if(req.body.atHome === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip14/manageTreatments?edit=true');
       } else {
         res.redirect('pip14/manageTreatments');
       }
     } else if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/sideEffects');
     }
   });

   /*******************
   manageTreatments **todo
   *******************/
   app.get('/pip14/manageTreatments', function (req, res) {
       res.render('pip14/manageTreatments', {
         page               : '8',
         medications   : req.session['pip14-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14/manageTreatments', function (req, res) {
     req.session['pip14-manageTreatments'] = req.body;
     //req.session['pip14-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip14-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip14-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/sideEffects');
     }
   });

   /*******************
   sideEffects **todo
   *******************/
   app.get('/pip14/sideEffects', function (req, res) {
       res.render('pip14/sideEffects', {
         page               : '9',
         medications   : req.session['pip14-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip14/sideEffects', function (req, res) {
     req.session['pip14-sideEffects'] = req.body;
     //req.session['pip14-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip14-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip14-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/conditionAffects');
     }
   });


   /*******************
   conditionAffects
   *******************/
   app.get('/pip14/conditionAffects', function (req, res) {
       res.render('pip14/conditionAffects', {
         page               : '10',
         conditioneffects : req.session['pip14-conditioneffects'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip14/conditionAffects', function (req, res) {
     req.session['pip14-conditioneffects'] = req.body;
     req.session['pip14-conditioneffects']['conditioneffects' + req.body.conditioneffects] = req.body.conditioneffects;


     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/hcp-condition');
     }
   });

   /*******************
   hcp-condition
   *******************/
   app.get('/pip14/hcp-condition', function (req, res) {
       res.render('pip14/hcp-condition', {
         page               : '11',
         hcpcondition : req.session['pip14-hcp-condition'],
         'edit'       : req.param('edit')
       });
   });
   app.post('/pip14/hcp-condition', function (req, res) {
     req.session['pip14-hcp-condition'] = req.body;
     req.session['pip14-hcp-condition']['monitored' + req.body.monitored] = req.body.monitored;

     if(req.body.monitored === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip14/hcp-condition-2?edit=true');
       } else {
         res.redirect('pip14/hcp-condition-2');
       }
     } else if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/healthcareprofessional');
     }
   });

   /*******************
   hcp-condition2
   *******************/
   app.get('/pip14/hcp-condition-2', function (req, res) {
       res.render('pip14/hcp-condition-2', {
         page               : '12',
         hcpcondition2 : req.session['pip14-hcp-condition-2'],
         'edit'        : req.param('edit')
       });
   });

   app.post('/pip14/hcp-condition-2', function (req, res) {
     req.session['pip14-hcp-condition-2'] = req.body;
     req.session['pip14-hcp-condition-2']['conditionEffects' + req.body.conditionEffects] = req.body.conditionEffects;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/healthcareprofessional');
     }
   });

   /*******************
   healthcareprofessional **todo
   *******************/
   app.get('/pip14/healthcareprofessional', function (req, res) {
       res.render('pip14/healthcareprofessional', {
         page               : '13',
         healthcareprofessional : req.session['pip14-healthcareprofessional'],
         'edit'                 : req.param('edit')
       });
   });

   app.post('/pip14/healthcareprofessional', function (req, res) {
     req.session['pip14-healthcareprofessional'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/submitEvidence');
     }
   });

   /*******************
   submitEvidence **todo
   *******************/
   app.get('/pip14/submitEvidence', function (req, res) {
       res.render('pip14/submitEvidence', {
         page               : '14',
         submitEvidence : req.session['pip14-submitEvidence'],
         'edit'         : req.param('edit')
       });
   });

   app.post('/pip14/submitEvidence', function (req, res) {
     req.session['pip14-submitEvidence'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/specialAids');
     }
   });

   /*******************
   specialAids **todo
   *******************/
   app.get('/pip14/specialAids', function (req, res) {
       res.render('pip14/specialAids', {
         page               : '15',
         specialAids : req.session['pip14-specialAids'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip14/specialAids', function (req, res) {
     req.session['pip14-specialAids'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/seeing');
     }
   });

   /*******************
   seeing
   *******************/
   app.get('/pip14/seeing', function (req, res) {
       res.render('pip14/seeing', {
         page               : '16',
         frequency : req.session['pip14-seeing'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip14/seeing', function (req, res) {
     req.session['pip14-seeing'] = req.body;
     req.session['pip14-seeing']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/speaking');
     }
   });

   /*******************
   speaking
   *******************/
   app.get('/pip14/speaking', function (req, res) {
       res.render('pip14/speaking', {
         page               : '17',
         frequency : req.session['pip14-speaking'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip14/speaking', function (req, res) {
     req.session['pip14-speaking'] = req.body;
     req.session['pip14-speaking']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip14/check-and-change');
     } else {
       res.redirect('pip14/hearing');
     }
    });

    /*******************
    hearing
    *******************/
    app.get('/pip14/hearing', function (req, res) {
        res.render('pip14/hearing', {
          page               : '18',
          frequency : req.session['pip14-hearing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/hearing', function (req, res) {
      req.session['pip14-hearing'] = req.body;
      req.session['pip14-hearing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/youAndYourHome');
      }
    });


    /*******************
    gettingUp
    *******************/
    app.get('/pip14/gettingUp', function (req, res) {
        res.render('pip14/gettingUp', {
          page               : '19',
          frequency : req.session['pip14-gettingUp'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/gettingUp', function (req, res) {
      req.session['pip14-gettingUp'] = req.body;
      req.session['pip14-gettingUp']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/toilet');
      }
    });

    /*******************
    toilet
    *******************/
    app.get('/pip14/toilet', function (req, res) {
        res.render('pip14/toilet', {
          page               : '20',
          frequency : req.session['pip14-toilet'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/toilet', function (req, res) {
      req.session['pip14-toilet'] = req.body;
      req.session['pip14-toilet']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/washing');
      }
    });

    /*******************
    washing
    *******************/
    app.get('/pip14/washing', function (req, res) {
        res.render('pip14/washing', {
          page               : '21',
          frequency : req.session['pip14-washing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/washing', function (req, res) {
      req.session['pip14-washing'] = req.body;
      req.session['pip14-washing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/gettingDressed');
      }
    });

    /*******************
    gettingDressed
    *******************/
    app.get('/pip14/gettingDressed', function (req, res) {
        res.render('pip14/gettingDressed', {
          page               : '22',
          frequency : req.session['pip14-gettingDressed'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/gettingDressed', function (req, res) {
      req.session['pip14-gettingDressed'] = req.body;
      req.session['pip14-gettingDressed']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/preparingandcookingfood');
      }
    });

    /*******************
    preparingandcookingfood
    *******************/
    app.get('/pip14/preparingandcookingfood', function (req, res) {
        res.render('pip14/preparingandcookingfood', {
          page               : '23',
          frequency : req.session['pip14-preparingandcookingfood'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/preparingandcookingfood', function (req, res) {
      req.session['pip14-preparingandcookingfood'] = req.body;
      req.session['pip14-preparingandcookingfood']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/eatinganddrinking');
      }
    });

    /*******************
    eatinganddrinking
    *******************/
    app.get('/pip14/eatinganddrinking', function (req, res) {
        res.render('pip14/eatinganddrinking', {
          page               : '24',
          frequency : req.session['pip14-eatinganddrinking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/eatinganddrinking', function (req, res) {
      req.session['pip14-eatinganddrinking'] = req.body;
      req.session['pip14-eatinganddrinking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/leavingYourHome');
      }
    });

    /*******************
    goingOut
    *******************/
    app.get('/pip14/goingOut', function (req, res) {
        res.render('pip14/goingOut', {
          page               : '25',
          frequency : req.session['pip14-goingOut'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/goingOut', function (req, res) {
      req.session['pip14-goingOut'] = req.body;
      req.session['pip14-goingOut']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/gettingOn');
      }
    });

    /*******************
    gettingOn **todo
    *******************/
    app.get('/pip14/gettingOn', function (req, res) {
        res.render('pip14/gettingOn', {
          page               : '26',
          frequency : req.session['pip14-gettingOn'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/gettingOn', function (req, res) {
      req.session['pip14-gettingOn'] = req.body;
      req.session['pip14-gettingOn']['gettingOn' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/understanding');
      }
    });

    /*******************
    goingSomewhereLocalJourney **todo
    *******************/
    app.get('/pip14/goingSomewhereLocalJourney', function (req, res) {
        res.render('pip14/goingSomewhereLocalJourney', {
          page               : '27',
          frequency : req.session['pip14-goingSomewhereLocalJourney'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/goingSomewhereLocalJourney', function (req, res) {
      req.session['pip14-goingSomewhereLocalJourney'] = req.body;
      req.session['pip14-goingSomewhereLocalJourney']['goingSomewhereLocalJourney' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/goingSomewhereNeverbeenBefore');
      }
    });

    /*******************
    goingSomewhereNeverbeenBefore **todo
    *******************/
    app.get('/pip14/goingSomewhereNeverbeenBefore', function (req, res) {
        res.render('pip14/goingSomewhereNeverbeenBefore', {
          page               : '28',
          frequency : req.session['pip14-goingSomewhereNeverbeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/goingSomewhereNeverbeenBefore', function (req, res) {
      req.session['pip14-goingSomewhereNeverbeenBefore'] = req.body;
      req.session['pip14-goingSomewhereNeverbeenBefore']['goingSomewhereNeverbeenBefore' + req.body.frequency] = req.body.frequency;

      if(req.body.frequency === 'None of the time') {
        if (req.param('edit')) {
          res.redirect('pip14/understanding-q?edit=true');
        } else {
          res.redirect('pip14/understanding-q');
        }
      } else if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/goingSomewherebeenBefore');
      }
    });

    /*******************
    goingSomewherebeenBefore **todo
    *******************/
    app.get('/pip14/goingSomewherebeenBefore', function (req, res) {
        res.render('pip14/goingSomewherebeenBefore', {
          page               : '29',
          frequency : req.session['pip14-goingSomewherebeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/goingSomewherebeenBefore', function (req, res) {
      req.session['pip14-goingSomewherebeenBefore'] = req.body;
      req.session['pip14-goingSomewherebeenBefore']['goingSomewherebeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/understanding-q');
      }
    });

    /*******************
    understanding-q **todo
    *******************/
    app.get('/pip14/understanding-q', function (req, res) {
        res.render('pip14/understanding-q', {
          page               : '30',
          frequency : req.session['pip14-understanding-q'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/understanding-q', function (req, res) {
      req.session['pip14-understanding-q'] = req.body;
      req.session['pip14-understanding-q']['understanding-q' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip14/check-and-change');
      } else {
        res.redirect('pip14/money');
      }
    });

    /*******************
    money **todo
    *******************/
    app.get('/pip14/money', function (req, res) {
        res.render('pip14/money', {
          page               : '31',
          frequency : req.session['pip14-money'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip14/money', function (req, res) {
      req.session['pip14-money'] = req.body;
      req.session['pip14-money']['money' + req.body.frequency] = req.body.frequency;

      res.redirect('pip14/check-and-change');

    });

   /*******************
   check and change
   *******************/
   app.get('/pip14/check-and-change', function (req, res) {
     res.render('pip14/check-and-change', {
       page                          : '32',
       helper                        : req.session['pip14-helper'],
       nationality                   : req.session['pip14-nationality'],
       paymentsFromAbroad            : req.session['pip14-paymentsFromAbroad'],
       conditionDetails              : req.session['pip14-conditionDetails'],
       medications                   : req.session['pip14-medications'],
       manageMedications             : req.session['pip14-manageMedications'],
       treatments                    : req.session['pip14-treatments'],
       manageTreatments              : req.session['pip14-manageTreatments'],
       sideEffects                   : req.session['pip14-sideEffects'],
       conditioneffects              : req.session['pip14-conditioneffects'],
       hcpcondition                  : req.session['pip14-hcp-condition'],
       hcpcondition2                 : req.session['pip14-hcp-condition-2'],
       healthcareprofessional        : req.session['pip14-healthcareprofessional'],
       submitEvidence                : req.session['pip14-submitEvidence'],
       specialAids                   : req.session['pip14-specialAids'],
       gettingAround                 : req.session['pip14-gettingAround'],
       seeing                        : req.session['pip14-seeing'],
       hearing                       : req.session['pip14-hearing'],
       speaking                      : req.session['pip14-speaking'],
       gettingUp                     : req.session['pip14-gettingUp'],
       toilet                        : req.session['pip14-toilet'],
       washing                       : req.session['pip14-washing'],
       gettingDressed                : req.session['pip14-gettingDressed'],
       preparingandcookingfood       : req.session['pip14-preparingandcookingfood'],
       eatinganddrinking             : req.session['pip14-eatinganddrinking'],
       goingOut                      : req.session['pip14-goingOut'],
       gettingOn                     : req.session['pip14-gettingOn'],
       goingSomewhereNeverbeenBefore : req.session['pip14-goingSomewhereNeverbeenBefore'],
       goingSomewherebeenBefore      : req.session['pip14-goingSomewherebeenBefore'],
       understandingq                : req.session['pip14-understanding-q'],
       money                         : req.session['pip14-money'],
       additionalInfo                : req.session['pip14-additionalInfo']
     });
   });

   app.post('/pip14/check-and-change', function (req, res) {

     res.redirect('pip14/additionalInfo');
   });

   /*******************
   additionalInfo **todo
   *******************/
   app.get('/pip14/additionalInfo', function (req, res) {
       res.render('pip14/additionalInfo', {
         page               : '33',
         frequency : req.session['pip14-additionalInfo'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip14/additionalInfo', function (req, res) {
     req.session['pip14-additionalInfo'] = req.body;
     req.session['pip14-additionalInfo']['additionalInfo' + req.body.frequency] = req.body.frequency;

     res.redirect('pip14/declaration');

   });

   /*******************
   declaration
   *******************/
   app.get('/pip14/declaration', function (req, res) {
       res.render('pip14/declaration', {
         page               : '34'
       });
   });

   app.post('/pip14/declaration', function (req, res) {

       var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD),
           date      = new Date(),
           emailText = '<b>helper</b>'            + JSON.stringify(req.session['pip14-helper'], null, " <br/>") +
           '<hr />' +
           '<b>nationality</b>'                   + JSON.stringify(req.session['pip14-nationality'], null, " <br/>") +
           '<hr />' +
           '<b>paymentsFromAbroad</b>'            + JSON.stringify(req.session['pip14-paymentsFromAbroad'], null, " <br/>") +
           '<hr />' +
           '<b>conditionDetails</b>'              + JSON.stringify(req.session['pip14-conditionDetails'], null, " <br/>") +
           '<hr />' +
           '<b>medications</b>'                   + JSON.stringify(req.session['pip14-medications'],null,"<br />") +
           '<hr />' +
           '<b>manageMedications</b>'             + JSON.stringify(req.session['pip14-manageMedications'],null,"<br />") +
           '<hr />' +
           '<b>treatments</b>'                    + JSON.stringify(req.session['pip14-treatments'],null,"<br />") +
           '<hr />' +
           '<b>manageTreatments</b>'              + JSON.stringify(req.session['pip14-manageTreatments'],null,"<br />") +
           '<hr />' +
           '<b>sideEffects</b>'                   + JSON.stringify(req.session['pip14-sideEffects'],null,"<br />") +
           '<hr />' +
           '<b>conditioneffects</b>'              + JSON.stringify(req.session['pip14-conditioneffects'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition</b>'                  + JSON.stringify(req.session['pip14-hcp-condition'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition2</b>'                 + JSON.stringify(req.session['pip14-hcp-condition-2'], null, " <br/>") +
           '<hr />' +
           '<b>healthcareprofessional</b>'        + JSON.stringify(req.session['pip14-healthcareprofessional'], null, " <br/>") +
           '<hr />' +
           '<b>submitEvidence</b>'                + JSON.stringify(req.session['pip14-submitEvidence'], null, " <br/>") +
           '<hr />' +
           '<b>specialAids</b>'                   + JSON.stringify(req.session['pip14-specialAids'], null, " <br/>") +
           '<hr />' +
           '<b>gettingAround</b>'                 + JSON.stringify(req.session['pip14-gettingAround'], null, " <br/>") +
           '<hr />' +
           '<b>seeing</b>'                        + JSON.stringify(req.session['pip14-seeing'], null, " <br/>") +
           '<hr />' +
           '<b>hearing</b>'                       + JSON.stringify(req.session['pip14-hearing'], null, " <br/>") +
           '<hr />' +
           '<b>speaking</b>'                      + JSON.stringify(req.session['pip14-speaking'], null, " <br/>") +
           '<hr />' +
           '<b>gettingUp</b>'                     + JSON.stringify(req.session['pip14-gettingUp'], null, " <br/>") +
           '<hr />' +
           '<b>toilet</b>'                        + JSON.stringify(req.session['pip14-toilet'], null, " <br/>") +
           '<hr />' +
           '<b>washing</b>'                       + JSON.stringify(req.session['pip14-washing'], null, " <br/>") +
           '<hr />' +
           '<b>gettingDressed</b>'                + JSON.stringify(req.session['pip14-gettingDressed'], null, " <br/>") +
           '<hr />' +
           '<b>preparingandcookingfood</b>'       + JSON.stringify(req.session['pip14-preparingandcookingfood'], null, " <br/>") +
           '<hr />' +
           '<b>eatinganddrinking</b>'             + JSON.stringify(req.session['pip14-eatinganddrinking'], null, " <br/>") +
           '<hr />' +
           '<b>goingOut</b>'                      + JSON.stringify(req.session['pip14-goingOut'], null, " <br/>") +
           '<hr />' +
           '<b>gettingOn</b>'                     + JSON.stringify(req.session['pip14-gettingOn'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereLocalJourney</b>' + JSON.stringify(req.session['pip14-goingSomewhereLocalJourney'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereNeverbeenBefore</b>' + JSON.stringify(req.session['pip14-goingSomewhereNeverbeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewherebeenBefore</b>'      + JSON.stringify(req.session['pip14-goingSomewherebeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>understandingq</b>'                + JSON.stringify(req.session['pip14-understanding-q'], null, " <br/>") +
           '<hr />' +
           '<b>money</b>'                         + JSON.stringify(req.session['pip14-money'], null, " <br/>") +
           '<hr />' +
           '<b>additionalInfo</b>'                + JSON.stringify(req.session['pip14-additionalInfo'], null, " <br/>") +
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

    res.redirect('pip14/thankyou');
   });


};
