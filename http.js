const http = require("http");

const server = http.createServer((req, res) => {
  switch(req?.url){
    case '/':
      res.end('Homepage')
      break;
    case '/misa':
      res.end('Misapage')
      break;
    default: 
      res.end('Nejma')
      break;
  }
  res.end();
});

server.listen(5000);
