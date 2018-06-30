const http = require('http'),
  fs = require('fs'),
  path = require('path'),
  server = http.createServer();

server.on('request', (req, res) => {
  var index = req.url.lastIndexOf('.');
  var contentType = req.url.substr(index + 1);
  switch (contentType) {
    case '/' :
      contentType = 'text/html';
      break;
    case 'js':
      contentType = 'text/javascript';
      break;
    case 'css':
      contentType = 'text/css';
      break;
    case 'ico':
      contentType = 'image/x-icon';
      break;
    default:
      contentType = '';
      break;
  }
  if ( req.url === '/') {
    req.url = "login.html";
  }
  var filePath = path.join(__dirname, '/', req.url) ;
  res.writeHead(200, {
    'Content-type': contentType
  });
  var readStream = fs.createReadStream(filePath);
  console.dir(readStream);
  readStream.pipe(res);
}).listen(8080);
