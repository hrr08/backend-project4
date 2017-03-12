const express = require('express'),
      router = express.Router(),
      imgurapi = require('./services/imgurapi'),
      history = require('./services/history');
      
module.exports = router;

router.get('/latest', function(req, res){
    history.find({}, 'term when -_id').sort('-when').limit(10).then(function(results) {
      res.json(results);
    });
});

router.get('/search/:q', function(req, res){

    imgurapi.getImage(req.params.q, req.query.offset).then(function(response){
        new history({ term: req.params.q }).save();
        res.json(response);
    });

});
