module.exports = function(app){

    
    function foodToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['food']['aids-appliances'] == 'Yes'){ formData['aids-appliances'] = true; }else{ formData['aids-appliances'] = false; }
        if(req.session['food']['another-person'] == 'Yes'){ formData['another-person'] = true; }else{ formData['another-person'] = false; }
          
        if(req.session['food']['aids-appliances']  !="" && req.session['food']['another-person'] !="")
        {
            formData['session'] = false;
        }
        
        formData['aids-appliances-details'] =req.session['food']['aids-appliances-details'];
        formData['help-and-how-often'] = req.session['food']['help-and-how-often'];
        formData['communicate-other'] =req.session['food']['communicate-other'];  
        formData['cook-other'] = req.session['food']['cook-other'];
        return formData
    }
    
    function movingToForm(req)
    {
        var formData = new Array;
    
        
        if(req.session['moving']['distance'] == '20'){ formData['distance-20'] = true; }
        if(req.session['moving']['distance'] == '20-50'){ formData['distance-50'] = true; }
        if(req.session['moving']['distance'] == '50-200'){ formData['distance-50-200'] = true; }
        if(req.session['moving']['distance'] == '200'){ formData['distance-200'] = true; }
        if(req.session['moving']['distance'] == 'it-varies'){ formData['it-varies'] = true; }
   
        if(req.session['moving']['aids-appliances'] == 'Yes'){ formData['aids-appliances'] = true; }else{ formData['aids-appliances'] = false; }
        if(req.session['moving']['wheelchair'] == 'Yes'){ formData['wheelchair'] = true; }else{ formData['wheelchair'] = false; }
      
        
        if(req.session['moving']['wheelchair'] != '' && req.session['moving']['aids-appliances'] != ''){ formData['session'] = false; }
        
        formData['good-distance'] = req.session['moving']['good-distance']
        formData['bad-distance'] = req.session['moving']['bad-distance'];
        
        formData['moving-around'] = req.session['moving']['moving-around'];
        formData['wheel-chair'] = req.session['moving']['wheel-chair']
        formData['aids-appliances-details'] = req.session['moving']['aids-appliances-details']
        
        return formData
    }
    
    app.get('/review-flow/personal', function (req, res) {        
      res.render('review-flow/personal', {'name': req.session['name'],'edit': req.param('edit')} );
    });   
    
    app.post('/review-flow/personal', function (req, res) {        
        req.session['name'] = req.body.name;
        if(req.body.name != ""){ req.session['nameSet'] = true; }else{ req.session['nameSet'] = false; } 
        if(req.param('edit')){ 
            res.redirect('/review-flow/review');
        }else{
            res.redirect('/review-flow/contact'); }
    });   
     
    app.get('/review-flow/contact', function (req, res) {
      res.render('review-flow/contact',{'phone': req.session['phone'],'edit': req.param('edit')});
    });   
    
    app.post('/review-flow/contact', function (req, res){      
        req.session['phone'] = req.body.phone;
        if(req.body.phone != ""){ req.session['phoneSet'] = true; }else{ req.session['phoneSet'] = false; }      
        if(req.param('edit')){ 
            res.redirect('/review-flow/review');
        }else{
            res.redirect('/review-flow/food'); }
    }); 
    
    app.get('/review-flow/food', function (req, res) {
        if(req.session['food']){ var formData = foodToForm(req) }else{ formData = new Array; }
      res.render('review-flow/food',{'form': formData,'edit': req.param('edit')});
    });   
    
    app.post('/review-flow/food', function (req, res) {
        req.session['food'] = req.body;
        if(req.param('edit')){ 
            res.redirect('/review-flow/review');
        }else{
            res.redirect('/review-flow/moving'); }
    }); 
    
    app.get('/review-flow/moving', function (req, res) {
     if(req.session['moving']){ var formData = movingToForm(req) }else{ formData = new Array; }
      res.render('review-flow/moving',{'form': formData,'edit': req.param('edit')});
    });   
    
    app.post('/review-flow/moving', function (req, res) { 
        req.session['moving'] = req.body;
        res.redirect('/review-flow/review');
    });     
    
    app.get('/review-flow/review', function (req, res) {
        
        
        var reviewSection = new Array;
        
      reviewSection['sectionContact'] = req.session['phoneSet']  
      reviewSection['sectionName'] = req.session['nameSet'] 
      
      if(req.session['food']){ 
          reviewSection['sectionFood'] = foodToForm(req) 
          if( req.session['food']['aids-appliances'] != "" 
        && req.session['food']['another-person'] !=""
        && req.session['food']['cook-other'] !=""){
        reviewSection['sectionFoodComplete'] = true;
    }else{ reviewSection['sectionFoodComplete'] = false; }
      
      }
        
      if(req.session['moving'])
      {
          reviewSection['sectionMoving'] = movingToForm(req); 
                  if(req.session['moving']['distance'] != "" && 
            req.session['moving']['aids-appliances'] != "" &&
            req.session['moving']['wheelchair']  != "" &&
            req.session['moving']['aids-appliances-details'] !=""){
                reviewSection['sectionMovingComplete'] = true;
            }else{ reviewSection['sectionMovingComplete'] = false; }
      }
     
      
        //set section values //
      if(req.session['name']){  reviewSection['name'] = req.session['name']; }else { reviewSection['name'] = "N/a" }
      if(req.session['phone']){ reviewSection['phone'] = req.session['phone']; }else { reviewSection['phone'] = "N/a" }
    
        
      res.render('review-flow/review',reviewSection);
    });    
    
    
    app.get('/review-flow/logout', function (req, res) {
            req.session.destroy();
            res.redirect('/review-flow/personal');
    });   
    
    
}