module.exports = function(app){

   // session to forms
    
    
    function gettingUpToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['pip7_scenario01']['getting-up'] == 'yes'){ formData['getting-up-yes'] = true; }
        if(req.session['pip7_scenario01']['getting-up'] == 'no'){ formData['getting-up-no'] = true; }
        if(req.session['pip7_scenario01']['getting-up'] == 'sometimes'){ formData['getting-up-sometimes'] = true; }
        
        if(req.session['pip7_scenario01']['getting-up'] == 'yes' || 
           req.session['pip7_scenario01']['getting-up'] == 'sometimes'){
             formData['getting-up-more-display'] = true; 
        }
        
        formData['getting-up-more'] =req.session['pip7_scenario01']['getting-up-more'];
        
        return formData
    }

    function getAroundToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['pip7_scenario02']['get-around'] == 'yes'){ formData['get-around-yes'] = true; }
        if(req.session['pip7_scenario02']['get-around'] == 'no'){ formData['get-around-no'] = true; }
        if(req.session['pip7_scenario02']['get-around'] == 'sometimes'){ formData['get-around-sometimes'] = true; }
        
        if(req.session['pip7_scenario02']['get-around'] == 'yes' || 
           req.session['pip7_scenario02']['get-around'] == 'sometimes'){
             formData['get-around-more-display'] = true; 
        }
        
        formData['get-around-more'] =req.session['pip7_scenario02']['get-around-more'];
        
        return formData
    }
    
    //review pages personal
    app.get('/pip7/pip01', function (req, res) {    
      res.render('pip7/pip01',{'form': req.session['pip7_details'],'edit': req.param('edit')});
    });   
    
    app.post('/pip7/pip01', function (req, res) {
        req.session['pip7_details'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip7/review');
        }else{
            res.redirect('/pip7/pip02'); }

    });
    
    //review pages Getting up
    app.get('/pip7/scenario01', function (req, res) {    
        if(req.session['pip7_scenario01']){ var formData = gettingUpToForm(req) }else{ formData = new Array; }
      res.render('pip7/scenario01',{'form':formData,'edit': req.param('edit')});
    });   
    
    app.post('/pip7/scenario01', function (req, res) {
        req.session['pip7_scenario01'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip7/review');
        }else{
            res.redirect('/pip7/scenario02'); }
    });
    
    //review pages Getting around
    app.get('/pip7/scenario02', function (req, res) {   
        if(req.session['pip7_scenario02']){ var formData = getAroundToForm(req) }else{ formData = new Array; }
      res.render('pip7/scenario02',{'form':formData,'edit': req.param('edit')});
    });   
    
    app.post('/pip7/scenario02', function (req, res) {
        req.session['pip7_scenario02'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/pip7/review');
        }else{
            res.redirect('/pip7/scenario03'); }
    });
    
    
    
    //review page
    app.get('/pip7/review', function (req, res) {  
        
      var reviewSection = new Array;
        
        
        //personal details
        if(req.session['pip7_details'])
        {
         
        if(req.session['pip7_details']['full-name'] != "" && 
            req.session['pip7_details']['dob-day'] != "" &&
            req.session['pip7_details']['dob-month']  != "" &&
            req.session['pip7_details']['dob-year'] !="" &&
            req.session['pip7_details']['ni-number'] !=""){
                reviewSection['sectionDetailsComplete'] = true;
            }else{ reviewSection['sectionDetailsComplete'] = false; }
            reviewSection['sectionDetails'] = req.session['pip7_details'];  
        }
        
        //scenario01
        if(req.session['pip7_scenario01'])
        {
           reviewSection['sectionGettingUp'] = gettingUpToForm(req); 
            
        if(req.session['pip7_scenario01']['getting-up'] != ""){
                reviewSection['sectionGettingUpComplete'] = true;
            }else{ reviewSection['sectionGettingUpComplete'] = false; }
            
        }else{ reviewSection['sectionGettingUp'] = new Array; }
        
        //scenario02
        
        if(req.session['pip7_scenario02'])
        {
           reviewSection['sectionGetAround'] = getAroundToForm(req);    
            
        if(req.session['pip7_scenario02']['getting-around'] != ""){
                reviewSection['sectionGetAroundComplete'] = true;
            }else{ reviewSection['sectionGetAroundComplete'] = false; }
             
        }else{ reviewSection['sectionGetAround'] = new Array; }
 
      res.render('pip7/review',reviewSection);        
    });   
    
    
};