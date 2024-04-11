const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./authentication/authRoute');
const authMiddleware = require('./authentication/authMiddleware');
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
const unsplashRoute = require('./routes/unsplashRoute');
const assetRoute = require('./routes/assetRoute');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/auth', authRoute);
app.use('/boards', authMiddleware, boardRoute);
app.use('/chats', authMiddleware, chatRoute);
app.use('/labels', authMiddleware, labelRoute);
app.use('/panels', authMiddleware, panelRoute);
app.use('/tasks', authMiddleware, taskRoute);
app.use('/users', authMiddleware, userRoute);
app.use('/usersontasks', authMiddleware, usersOnTasksRoute);
app.use('/tasksonlabels', authMiddleware, taskOnLabelRoute);
app.use('/allboard', authMiddleware, allBoardRoute);
app.use('/mainboard', authMiddleware, mainBoardRoute);
app.use('/pexel', authMiddleware, unsplashRoute);
app.use('/assets',assetRoute)

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.status(200).json('Welcome to app');
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
