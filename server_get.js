//모듈
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    
    //쿼리스트링
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;



    fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description)
    {
      response.writeHead(200);
      let template = {
        title: title,
        description: description,
        image: "asdasd"
      };
      response.end(JSON.stringify(template));
    })


});
app.listen(3000);
