const { json } = require('express');
const { knex } = require('../Knex');

const privacyMiddleware = async (req, res, next) => {
  const boardId = parseInt(req.params.id);
  const boardsOnUserdata = await knex
    .from('BoardsOnUsers')
    .select('BoardsOnUsers.userId')
    .where('BoardsOnUsers.boardId', '=', boardId);
  const board = await knex
    .from('Board')
    .select('Board.adminId', 'Board.privacy')
    .where('Board.id', '=', boardId);
  if (board[0].privacy === 'PUBLIC') {
    next();
  }
  let combinedIds = [...boardsOnUserdata, { userId: board[0]?.adminId }];
  let person = Array.from(new Set(combinedIds));
  console.log(person);
  const data = person.filter((item) => item.userId === parseInt(req.user.id));
  if (data.length === 0 || data === null) {
    console.log('length', person.length);
    //res.redirect('/allboard')
    return res.status(400).json({ message: 'private' });
  }
  next();
};

module.exports = privacyMiddleware;
