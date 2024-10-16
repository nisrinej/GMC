const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//const ObjectId = require('mongodb').ObjectId
const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbname = 'contact'
const collectionName = 'contactlist'
const contactcollection = client.db(dbname).collection(collectionName)
//const documentToFind = { _id: ObjectId("670edd7ec3522bca84116e50") }
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    let result = await contactcollection.findOne({ _id: new ObjectId("670edd7ec3522bca84116e50") })
    console.log(result)

//#region InsertOne
  //  let result = await contactcollection.insertOne({
  //     lastName : 'Jaaot',
  //     firstName: 'Nisrine',
  //     email : 'email@email.com',
  //     age: 31
  //   })
  //   console.log(result.insertedId)
//#endregion InsertOne
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
   // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);







// const express = require('express')
// const app = express()

// const {MongoClient} = require('mongodb')


// const port = 9000
// const host = 'http://127.0.0.1:'+ port


// app.listen(port, () => console.log(host))

// const url = "mongodb://127.0.0.1:27017/"
// const client = MongoClient(url)

// // async function connect(){
// //     try{
// //         const connect = await client.connect()
// //         const db = connect.db('contact')
// //         const coll = db.collection('contactlist')
// //         const result = await coll.find().toArray();
// //         return result
    
// //     }
// //     catch(err) {console.log(err)}
// //     return
// // }


// //API
// app.get('/', (req, res)=>{
//     res.end('hi')
// })

// app.get('/contact', async (req, res)=>{
//     const result = await connect()
//     res.send('result')
// })









