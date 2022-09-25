const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");



let https = require('https').createServer(app);
const io = require('socket.io')(https, {
    cors: {
        origin: "*",
    },
});




const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req, res) => res.send('Hello World'));
app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

https.listen(PORT, function () {
    console.log('App listening on', PORT)
});
io = new Server(httpServer, {
    maxHttpBufferSize: 1024,
    pingInterval: 60 * 1000,
    pingTimeout: 60 * 4000,
    cors: {
        origin: "*",
    },
});

io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

// require('./socket')(io);