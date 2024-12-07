require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

const fs = require('fs');
const path = require('path');





app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));



const port = process.env.PORT || 3000;

app.use(express.json());


// get data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express!' });
  });


//   pass data


let dataStore = []; // Array to store posted data temporarily

app.post('/api/data1', (req, res) => {
  dataStore.push(req.body); // Add new data to the array
  console.log('Data received:', req.body);
  res.status(201).json({ message: 'Data successfully received' });
});

app.get('/api/data1', (req, res) => {
  res.json(dataStore); // Return stored data
});



// --------------






// ------------

const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));
// Server code in Express.js
app.get('/api/users', (req, res) => {
    res.json(users);
  });

app.get('/r2',(req,res)=>{
    res.json(users)
})

// --------------------

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  
})

app.get('/r1',(req,res)=>{
    res.send("hello rafi")
})


app.get('/r3',(req,res)=>{
    res.send("hello rafi")
})

app.get('/r4',(req,res)=>{
    res.send("hello rafi , how are you????")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})