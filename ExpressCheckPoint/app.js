const express = require("express")
const app = express()

const port = 3000

app.set("view engine", "ejs")
app.set("views","views")

let checkHours = (req, res, next) =>{
    const now = new Date()
    let day = now.getDay()
    let hour = now.getHours()
    if(day>= 1 && day <= 5 && hour >=9 && hour<= 17){
        next()
    }
    else{
        res.end("Service not available! ")
    }
}
app.use(checkHours)
app.use(express.static("public"))



app.get("/", (req, res)=>{
    //res.end("Home page")
    res.render('index', { title: 'Home' })
})

app.get("/services", (req, res)=>{
    res.render('services', { title: 'Services' })
})
app.get("/contact", (req, res)=>{
    res.render('contact', { title: 'Contact Us' })
})


app.listen(port, ()=>{
    console.log(`Server is running on http://localhost: ${port}`)
})