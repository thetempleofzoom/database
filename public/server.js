const express = require('express');
const bodyParser= require('body-parser');
const yapp = express();
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://thetempleofzoom:techladies123@ds217002.mlab.com:17002/tododata', (err, client) => {
  if (err) return console.log(err)
  db = client.db('tododata') // whatever your database name is
  yapp.listen(3000, () => {
    console.log('listening on 3000')
  })
})
yapp.set('view engine', 'ejs')
yapp.use(bodyParser.urlencoded({extended: true}))



// yapp.get('/', (req, res) => {
  // res.send('SY greets the world')
// })
yapp.get('/', (req, res) => {
  var cursor = db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)
  // send HTML file populated with quotes here
})
})

yapp.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})
