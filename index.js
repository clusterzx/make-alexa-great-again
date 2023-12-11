const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/speech.mp3', (req, res) => {
  res.sendFile(__dirname + '/speech.mp3');
});

app.get('/ping.mp3', (req, res) => {
    res.sendFile(__dirname + '/ping.mp3');
  });

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('wake_word_detected', (data) => {
    console.log('Wake word detected:', data.message);

    // Broadcast the wake word detection message to all clients
    io.emit('wake_word_detected', { message: data.message });
  });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('response_text', (data) => {
        io.emit('response_text', { message: data.message });
        console.log('Response:', data.message);
    });

    socket.on('listening', (data) => {
        io.emit('listening', { message: data.message });
        console.log('Listening:', data.message);
    });

    socket.on('text_output', (data) => {
        io.emit('text_output', { message: data.message });
        console.log('text_output:', data.message);
    });

    socket.on('finished', (data) => {
        io.emit('finished', { message: data.message });
        console.log('Finished:', data.message);
    });

    socket.on('speech', (data) => {
        io.emit('speech', { message: data.message });
        console.log('Speech:', data.message);
    });

    socket.on('rec_stop', (data) => {
        io.emit('rec_stop', { message: data.message });
        console.log('rec_stop:', data.message);
    });
});

const PORT = 3010; // Replace with your desired port
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});