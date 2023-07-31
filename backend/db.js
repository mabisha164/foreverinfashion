const mongoose = require ('mongoose');
const mongoURI = 'mongodb+srv://foreverinfashion:fashion1234@cluster1.fb8zcax.mongodb.net/foreverinfashion?retryWrites=true&w=majority';

async function mongoDb() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    
    const fetched_data = await mongoose.connection.db.collection("womenclothes");
    const data = await fetched_data.find({}).toArray();
    console.log();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = mongoDb;
