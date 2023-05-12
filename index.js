const express = require('express');
var cors = require('cors')
require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())
const port = 5000


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.snelam0.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("techProduct").collection("tech");
//   console.log("Database connected")
  
// });

async function run(){
    try{
 const serviceCollection = client.db("displayData").collection("data");
 app.get('/data',async(req,res)=>{
    const query ={};
    const cursor=serviceCollection.find(query);
    const data =await cursor.toArray();
    const count= await serviceCollection.estimatedDocumentCount();
    res.send(data);

 })
    }
    finally{

    }

}
run().catch(err=>console.error(err,"fuck "))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})