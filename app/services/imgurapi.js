const request = require('request');

exports.getImage = function(search, page){
    
    page = page !== 'undefined' ? page : 1;
    return new Promise(function(resolve, reject){
        
        var options = {
          url: "https://api.imgur.com/3/gallery/search/" + page + "?q=" + search,
          headers: { Authorization: 'Client-ID 3e7043d188cb866' },
          json: true,
        };        
        
        request(options, function getPics(err, response, body){
          if (!err && response.statusCode == 200) {
            body = body.data.filter(function(image) {
              if (!image.is_album) {
                return image;
              }
            }).map(function(image) {
              return {
                url: image.link,
                snippet: image.title,
                context: "https://imgur.com/" + image.id
              };
            });
            resolve(body);
          }    
        });
        
    });

};

