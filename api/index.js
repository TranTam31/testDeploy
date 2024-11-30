const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const jwt = require('jsonwebtoken')
const jwtSecret = 'fhdjskahdfjkdsafhjdshakjhf'

const user = {}

app.get('/api', function (req, res) {
  res.send('Hello World!');
});

app.post('/api/register', (req, res) => {
    const {username, password} = req.body
    
    jwt.sign({username:username, password: password}, jwtSecret, {}, (err, token) => {
        if(err) throw err
        user[username] = password
        res.json({token})
    })
})

app.post('/api/login', (req, res) => {
    const {token} = req.body

    jwt.verify({token}, jwtSecret, (err, decoded) => {
        if(user.username === decoded) res.json("JWT khớp")
        res.json("JWT không khớp")
    })
})

app.listen(5000, function () {
  console.log('Example app listening at http://localhost:5000');
});