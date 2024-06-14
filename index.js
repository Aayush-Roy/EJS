const express = require("express");
let app = express();
let port = 3000;
const path = require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"public/js")))
app.set('views',path.join(__dirname,"views"))
app.get('/hello',(req,res)=>{
    res.send("hello")
})
app.get("/ig/:username",(req,res)=>{
  const instaData = require("./data.json")
  let {username} = req.params;
  let data = instaData[username];
  if(data)
    {
    console.log(data)
    res.render("instagram.ejs",{data})
    }else{
        res.render("error.ejs")
    }
  
  console.log(instaData)
    
})
app.get('/rolldice',(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render('rolledice.ejs',{num:diceVal})
})
app.listen(port,()=>{
    console.log(`listening on ${port}`)
});