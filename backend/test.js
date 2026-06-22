const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://senorinshafe2006_db_user:PkOIY3HznndzHHsU@cluster0.kbmrgrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected Successfully!");
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

run();