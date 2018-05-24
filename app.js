const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    /*res.write(`
      <hr> <H1> Prateek </H1> <hr>`

  );*/
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port '+ port);
    console.log('Server Running at http://'+hostname+':'+port);
  });



});
