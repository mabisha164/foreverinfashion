const express = require('express')
const app = express()
const port = 8000
const mongoDb = require('./db');

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin",'http://localhost:5173');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type, Accept"
  );
  next();
})


async function startApp() {
    try {
      await mongoDb();
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });
     app.use(express.json())
     app.use('/api', require('./Routes/CreateUser'));
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
    } catch (error) {
      console.error('Error starting the app:', error);
    }
  }
  
  startApp();