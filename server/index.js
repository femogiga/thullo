const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./authentication/authRoute');
const boardRoute = require('./routes/boardRoute');
const chatRoute = require('./routes/chatRoute');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// app.use('/auth', authMiddleware, authRoute);
app.use('/boards', boardRoute);
app.use('/chats', chatRoute);

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.status(200).json('Welcome to app');
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
