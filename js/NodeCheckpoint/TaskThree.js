var fs = require('fs')
// fs.writeFile('hello.txt',"Hello Node",(err) =>{
//     if (err) throw err
//     console.log("File created !")
// }) 
fs.readFile("hello.txt","utf-8" ,(err,data)=>{
    if(err) throw err
    console.log(data)
})