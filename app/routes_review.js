module.exports = function(app){

    
    function sessionToForm(req)
    {
        var formData = new Array;
        
        formData['session'] = true;
        
        if(req.session['questions']['communicating'] == 'yes'){ formData['communicating'] = true; }else{ formData['communicating'] = false; }
        if(req.session['questions']['aids-appliances'] == 'yes'){ formData['aidsappliances'] = true; }else{ formData['aidsappliances'] = false; }
        if(req.session['questions']['another-person'] == 'yes'){ formData['anotherperson'] = true; }else{ formData['anotherperson'] = false; }
            
        formData['anotherpersonmore'] = req.session['questions']['another-person-details-box'];
        formData['aidsappliancesmore'] =req.session['questions']['aids-details-box'];
        formData['communicateother'] =req.session['questions']['communicate-other'];  
        
        return formData
    }
    
    app.get('/review/basic', function (req, res) {
      res.render('review/basic');
    });   
    
  
    app.post('/review/basic', function (req, res) {
        //save in session  
        req.session['details'] = req.body;
        console.log(req.session)
       res.redirect('/review/question');
    });
    
    app.get('/review/question', function (req, res) {
        
        if(req.session['questions']){ var formData = sessionToForm(req) }else{ formData = new Array; }
        
        
        res.render('review/question',{'name': req.session['details']['name'], 'form': formData});
    });    
    
    app.post('/review/question-review', function (req, res) {
        //save in session\
        req.session['questions'] = req.body;
        
        
        var formData = sessionToForm(req)
        
        res.render('review/question-display',{'name': req.session['details']['name'], 'form': formData});
    });
    
    app.get('/review/question-review', function (req, res) {
        //session review
        
        var formData = sessionToForm(req)
        
        res.render('review/question-display',{'name': req.session['details']['name'], 'form': formData});
    });

    app.post('/review/question-confirm', function (req, res) {
        //write to file and display end
        
        var dataSession = [req.session['details'],req.session['questions']];
        
        var fs = require('fs');
        var id = req.sessionID;
        fs.writeFile("info/"+id+".json", JSON.stringify(dataSession), function(err) {
        if(err) {
                    return console.log(err);
        }  
                console.log("The file was saved!");
         });


        
        res.render('review/confirm',{'name': req.session['details']['name']});
    });


    //other routes..
}