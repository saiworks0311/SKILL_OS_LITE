const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://divyashree:Divyashree138@cluster0.f73bh.mongodb.net/?appName=Cluster0";

async function testConnection() {
  const client = new MongoClient(uri);

  try {
    console.log("Connecting...");
    await client.connect();
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ Connection Error:");
    console.error(err);
  } finally {
    await client.close();
  }
}

testConnection();