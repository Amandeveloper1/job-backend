require('dotenv').config();
const express = require('express')
const connectToMongo = require('./db');
const cors = require('cors');


const app = express()
const port = process.env.WORK_PORT

app.use(cors());
connectToMongo();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({"result":"true"})
})



app.use('/auth', require('./routes/user.js'));
app.use('/job', require('./routes/jobs.js'));
app.use('/userd', require('./routes/udetails.js'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})