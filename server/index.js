const express = require('express');
const bc = require('./controllers/book_controller')

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static(__dirname + '/../build'));

app.get('/api/books', bc.read);




app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))