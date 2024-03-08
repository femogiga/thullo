const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./authentication/authRoute');
const boardRoute = require('./routes/boardRoute');
const chatRoute = require('./routes/chatRoute');
const labelRoute = require('./routes/labelRoute');
const panelRoute = require('./routes/panelRoute');
const taskRoute = require('./routes/taskRoute');
const userRoute = require('./routes/userRoute');
const taskOnLabelRoute = require('./routes/taskOnLabelRoute');
const usersOnTasksRoute = require('./routes/usersOnTasksRoute');
const allBoardRoute = require('./routes/allBoardPageRoute');
const mainBoardRoute = require('./routes/mainBoardRoute');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// app.use('/auth', authMiddleware, authRoute);
app.use('/boards', boardRoute);
app.use('/chats', chatRoute);
app.use('/labels', labelRoute);
app.use('/panels', panelRoute);
app.use('/tasks', taskRoute);
app.use('/users', userRoute);
app.use('/usersontasks', usersOnTasksRoute);
app.use('/tasksonlabels', taskOnLabelRoute);
app.use('/allboard', allBoardRoute);
app.use('/mainboard', mainBoardRoute);

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.status(200).json('Welcome to app');
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
