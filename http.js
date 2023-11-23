const http = require("http");

const server = http.createServer((req, res) => {
  switch(req?.url){
    case '/':
      res.end('<h1>This My House, Entry Please</h1>')
      break;
    case '/misa':
      res.end('<h1>Misyyyy1111!!!</h1>')
      break;
    default: 
      res.end('Nejma')
      break;
  }
  res.end();
});

server.listen(5000);
