const {MongoClient} = require("mongodb")

const url = "mongodb+srv://admin:9509542525@priyanshu-projects.ugqlz.mongodb.net/"



const client = new MongoClient(url)

const dbname = "NodeJsPractice"
k
async function main(){
   await client.connect();

   console.log(`Connected Succesfully to the server`);

   const db = client.db(dbname);

   const collection = db.collection('users');
   const collection2 = db.collection('admin');

   const findResult = await collection.find({}).toArray();

   console.log("Found Documents=>",findResult);

   await collection2.insertOne({
    firstname : "Deepika",
    lastname : "Padukone",
    city : "Jaipur",
    sex : "female"
   })

   return 'done';
}

main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close())
