var http = require('http')
const port = 3000
http.createServer( (req,res) =>{
   
    res.setHeader("Content-type", "text/html");
    res.end('<h1>Hello Node!!!!</h1>\n')
}).listen(port, () =>{
    console.log(`server is running on  http://localhost:${port}`)
});