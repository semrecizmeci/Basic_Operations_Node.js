let http = require("http");

const server = http.createServer((req, res) => {
  let patName = req.url;
  if (patName === "/homepage") {
    res.end("This is homepage!");
  } else if (patName === "/categories") {
    res.end("hello from the categories !");
  } else {
   res.writeHead(404,{
      'Content-type':'text/html'
    })
    res.end("<h1>Page not found!</h1>");
  }
});
server.listen(8000, "127.0.0.1",()=>{
    console.log('Listening to requests on port 8000');
});
