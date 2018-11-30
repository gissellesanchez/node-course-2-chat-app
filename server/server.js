const path=require('path');
const express = require ('express');

const publicPath=path.join(__dirname, '/../public');
const port=process.env.PORT || 3000;
var app=express();

// app.set('view engine','hbs');

app.use(express.static(publicPath));

// app.get('/',(req,res)=>{
//   //res.send('Hello World');
//   res.render('home.hbs',{
//     pageTitle:'Home Page'
//   });
// });


app.listen(port,()=>{
  console.log(`Server up on port ${port}`);
});
