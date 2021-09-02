const DadJokes = require('dadjokes-wrapper');
const path = require('path');
const express = require('express');
const bodyparser = require("body-parser"); 
const dj = new DadJokes();
 
// dj.randomJoke()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

//   dj.randomSlackJoke()
//   .then(res => console.log(res.text))
//   .catch(err => console.error(err));
// Returns a random joke formatted for slack
const app = express();
const port =3000;
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded(true))
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory1
app.get('/',(req,res)=>{
 dj.randomJoke() 
  .then(function(res1){
	res.status(200).render('index',{res1})
  })
  .catch(err => console.error(err));
 
})
// This method is auto-cached and returns a joke by it's id
 
// dj.jokeImgById('gNu41gNeqjb')
//   .then(res => res)
//   .catch(err => console.error(err)); 
// // Returns an image of the joke
 
// dj.searchJoke()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

app.listen(port,()=>{
	console.log(`Server Is Running At Port ${port}`);
})