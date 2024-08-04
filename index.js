const express = require("express");

const app = express();
const routes = require("./routes/routes");
let port = 5000;
app.use(routes);
app.use('/',express.static('build'))
 
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/business',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/entertainment',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/general',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/health',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/science',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/sports',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})
app.get('/technology',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})


app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
