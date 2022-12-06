var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    
    //쿼리스트링
    var queryData = url.parse(_url, true).query;
    console.log(queryData);
    console.log("id : " + queryData.id);
    console.log("name : " + queryData.name);

    var title = queryData.id;

    if(_url == '/'){
        title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(200);
    }

    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description)
    {
      var template = `
      <!doctype html>
      <html>
      <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
      </head>
      <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
      <li><a href="?id=HTML">HTML</a></li>
      <li><a href="?id=CSS">CSS</a></li>
      <li><a href="?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>
      ${description}
      </p>
      </body>
      </html>
      `;



      response.end(template);
    })
    
});
app.listen(3000);