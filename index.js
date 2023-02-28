const express = require('express');
require('dotenv').config();

const app = express()
const port = 5000


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ia6ici6.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("techProduct").collection("tech");
  console.log("Database connected")
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})