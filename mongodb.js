const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'tester';
let db;

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);

    return 'done.';
}

function connect() {
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
}

async function insertItems(items) {
    const collection = db.collection('items');
    const insertResult = await collection.insertMany(items);
    console.log('Inserted documents =>', insertResult);
}

async function findResult()  {
    const collection = db.collection('items');
    const data = await collection.find({}).toArray();
    console.log('Found documents =>', data);
}


module.exports = {
     connect,
 }
