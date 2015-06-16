module.exports = function(app){

   // session to forms
    
    
    function gettingUpToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['pip8_scenario01']['getting-up'] == 'yes'){ formData['getting-up-yes'] = true; }
        if(req.session['pip8_scenario01']['getting-up'] == 'no'){ formData['getting-up-no'] = true; }
        if(req.session['pip8_scenario01']['getting-up'] == 'sometimes'){ formData['getting-up-sometimes'] = true; }
        
        if(req.session['pip8_scenario01']['getting-up'] == 'yes' || 
           req.session['pip8_scenario01']['getting-up'] == 'sometimes'){
             formData['getting-up-more-display'] = true; 
        }
        
        formData['getting-up-more'] =req.session['pip8_scenario01']['getting-up-more'];
        
        return formData
    }

    function getAroundToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['pip8_scenario02']['get-around'] == 'yes'){ formData['get-around-yes'] = true; }
        if(req.session['pip8_scenario02']['get-around'] == 'no'){ formData['get-around-no'] = true; }
        if(req.session['pip8_scenario02']['get-around'] == 'sometimes'){ formData['get-around-sometimes'] = true; }
        
        if(req.session['pip8_scenario02']['get-around'] == 'yes' || 
           req.session['pip8_scenario02']['get-around'] == 'sometimes'){
             formData['get-around-more-display'] = true; 
        }
        
        formData['get-around-more'] =req.session['pip8_scenario02']['get-around-more'];
        
        return formData
    }
    
    
    function washingToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['pip8_scenario03']['wash'] == 'yes'){ formData['wash-yes'] = true; }
        if(req.session['pip8_scenario03']['wash'] == 'no'){ formData['wash-no'] = true; }
        if(req.session['pip8_scenario03']['wash'] == 'sometimes'){ formData['wash-sometimes'] = true; }
        
        if(req.session['pip8_scenario03']['wash'] == 'yes' || 
           req.session['pip8_scenario03']['wash'] == 'sometimes'){
             formData['wash-more-display'] = true; 
        }
        
        if(req.session['pip8_scenario03']['wash-help'] == 'yes'){ formData['wash-help-yes'] = true; }
        if(req.session['pip8_scenario03']['wash-help'] == 'no'){ formData['wash-help-no'] = true; }
        if(req.session['pip8_scenario03']['wash-help'] == 'sometimes'){ formData['wash-help-sometimes'] = true; }
        
        if(req.session['pip8_scenario03']['wash-help'] == 'yes' || 
           req.session['pip8_scenario03']['wash-help'] == 'sometimes'){
             formData['wash-help-display-yes'] = true; 
        }
        
        if(req.session['pip8_scenario03']['wash-help'] == 'no'){
             formData['wash-help-display-no'] = true; 
        }
        
                formData['wash-help-info-none'] =req.session['pip8_scenario03']['wash-help-info-none'];
                formData['wash-help-info-yes'] =req.session['pip8_scenario03']['wash-help-info-yes'];
        
        return formData
    }
    
    function dressingToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['pip8_scenario04']['dress'] == 'yes'){ formData['dress-yes'] = true; }
        if(req.session['pip8_scenario04']['dress'] == 'no'){ formData['dress-no'] = true; }
        if(req.session['pip8_scenario04']['dress'] == 'sometimes'){ formData['dress-sometimes'] = true; }
        
        if(req.session['pip8_scenario04']['dress'] == 'yes' || 
           req.session['pip8_scenario04']['dress'] == 'sometimes'){
             formData['dress-more-display'] = true; 
        }
        
        if(req.session['pip8_scenario04']['dress-help'] == 'yes'){ formData['dress-help-yes'] = true; }
        if(req.session['pip8_scenario04']['dress-help'] == 'no'){ formData['dress-help-no'] = true; }
        if(req.session['pip8_scenario04']['dress-help'] == 'sometimes'){ formData['dress-help-sometimes'] = true; }
        
        if(req.session['pip8_scenario04']['dress-help'] == 'yes' || 
           req.session['pip8_scenario04']['dress-help'] == 'sometimes'){
             formData['dress-help-display-yes'] = true; 
        }
        
        if(req.session['pip8_scenario04']['dress-help'] == 'no'){
             formData['dress-help-display-no'] = true; 
        }
        
                formData['dress-help-info-none'] =req.session['pip8_scenario04']['dress-help-info-none'];
                formData['dress-help-info-yes'] =req.session['pip8_scenario04']['dress-help-info-yes'];
        
        return formData
    }
    
    //review pages personal
    app.get('/pip8/pip01', function (req, res) {    
      res.render('pip8/pip01',{'form': req.session['pip8_details'],'edit': req.param('edit')});
    });   
    
    app.post('/pip8/pip01', function (req, res) {
        req.session['pip8_details'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip8/review');
        }else{
            res.redirect('/pip8/pip02'); }

    });
    
    //review pages Getting up
    app.get('/pip8/scenario01', function (req, res) {    
        if(req.session['pip8_scenario01']){ var formData = gettingUpToForm(req) }else{ formData = new Array; }
      res.render('pip8/scenario01',{'form':formData,'edit': req.param('edit')});
    });   
    
    app.post('/pip8/scenario01', function (req, res) {
        req.session['pip8_scenario01'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip8/review');
        }else{
            res.redirect('/pip8/scenario02'); }
    });
    
    //review pages Getting around
    app.get('/pip8/scenario02', function (req, res) {   
        if(req.session['pip8_scenario02']){ var formData = getAroundToForm(req) }else{ formData = new Array; }
        
      res.render('pip8/scenario02',{'form':formData,'edit': req.param('edit')});
    });   
    
    app.post('/pip8/scenario02', function (req, res) {
        req.session['pip8_scenario02'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip8/review');
        }else{
            res.redirect('/pip8/scenario03'); }
    });
    
    //review pages Washing
    app.get('/pip8/scenario03', function (req, res) {   
        if(req.session['pip8_scenario03']){ var formData = washingToForm(req) }else{ formData = new Array; }
      res.render('pip8/scenario03',{'form':formData,'edit': req.param('edit')});
    });   
    
    app.post('/pip8/scenario03', function (req, res) {
        req.session['pip8_scenario03'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip8/review');
        }else{
            res.redirect('/pip8/scenario04'); }
    });
    
    //review dressing
    app.get('/pip8/scenario04', function (req, res) {   
        if(req.session['pip8_scenario04']){ var formData = dressingToForm(req) }else{ formData = new Array; }
      res.render('pip8/scenario04',{'form':formData,'edit': req.param('edit')});
    });   
    
    app.post('/pip8/scenario04', function (req, res) {
        req.session['pip8_scenario04'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip8/review');
        }else{
            res.redirect('/pip8/scenario05'); }
    });
    
    //review page
    app.get('/pip8/review', function (req, res) {  
        
      var reviewSection = new Array;
        
        
        //personal details
        if(req.session['pip8_details'])
        {
         
        if(req.session['pip8_details']['full-name'] != "" && 
            req.session['pip8_details']['dob-day'] != "" &&
            req.session['pip8_details']['dob-month']  != "" &&
            req.session['pip8_details']['dob-year'] !="" &&
            req.session['pip8_details']['ni-number'] !=""){
                reviewSection['sectionDetailsCo§mplete'] = true;
            }else{ reviewSection['sectionDetailsComplete'] = false; }
            reviewSection['sectionDetails'] = req.session['pip8_details'];  
        }
        
        //scenario01
        if(req.session['pip8_scenario01'])
        {
           reviewSection['sectionGettingUp'] = gettingUpToForm(req); 
            
        if(req.session['pip8_scenario01']['getting-up'] != undefined && req.session['pip8_scenario01']['getting-up'] != ""){
                reviewSection['sectionGettingUpComplete'] = true;
            }else{ reviewSection['sectionGettingUpComplete'] = false; }
            
        }else{ reviewSection['sectionGettingUp'] = new Array; }
        
        //scenario02
        if(req.session['pip8_scenario02'])
        {
           reviewSection['sectionGetAround'] = getAroundToForm(req);    
            
        if(req.session['pip8_scenario02']['get-around'] != undefined && req.session['pip8_scenario02']['get-around'] != ""){
                reviewSection['sectionGetAroundComplete'] = true;
            }else{ reviewSection['sectionGetAroundComplete'] = false; }
             
        }else{ reviewSection['sectionGetAround'] = new Array; }
 
        
        //scenario03
        if(req.session['pip8_scenario03'])
        {
           reviewSection['sectionWashing'] = washingToForm(req);    
            
        if(req.session['pip8_scenario03']['wash'] != undefined && req.session['pip8_scenario03']['wash'] != ""){
                reviewSection['sectionWashingComplete'] = true;
            }else{ reviewSection['sectionWashingComplete'] = false; }
             
        }else{ reviewSection['sectionWashing'] = new Array; }
        
        //scenario03
        if(req.session['pip8_scenario04'])
        {
           reviewSection['sectionDressing'] = dressingToForm(req);    
            
        if(req.session['pip8_scenario04']['dress'] != undefined && req.session['pip8_scenario04']['dress'] != ""){
                reviewSection['sectionDressingComplete'] = true;
            }else{ reviewSection['sectionDressingComplete'] = false; }
             
        }else{ reviewSection['sectionDressing'] = new Array; }
        
        
    if(reviewSection['sectionDetails'] &&  reviewSection['sectionGetAround'] &&  reviewSection['sectionGettingUp'] &&  reviewSection['sectionWashing'] && reviewSection['sectionDressing'])
    {
        reviewSection['link'] = true;
    }
        
      res.render('pip8/review',reviewSection);        
    });   
    
        app.get('/pip8/logout', function (req, res) {
            req.session.destroy();
            res.redirect('/pip8/overview');
    }); 
    
};