const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
// const uri = 'your_mongodb_connection_string';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', (req, res) => res.sendFile(__dirname +'/index.html'))
app.use(express.static(__dirname + '/public'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))