const { knex } = require('../Knex');

const getUserOnBoard = async (req, res, next) => {
  try {
    const result = await knex
      .from('Board')
      .innerJoin('BoardsOnUsers', 'BoardsOnUsers.boardId', '=', 'Board.id')
      .innerJoin('User', 'User.id', '=', 'BoardsOnUsers.userId')
      .where('Board.id', parseInt(req.query.boardId))
      .select(
        'User.id',
        'User.firstname',
        'User.lastname',
        'BoardsOnUsers.role',
        'User.imgUrl'
      );
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const addUserToBoard = async (req, res, next) => {
  try {
    const { boardId, userId } = req.body;
    const result = await knex('BoardsOnUsers').insert({
      boardId: boardId,
      userId: userId,
    });
    res.status(200).json({ message: 'user added to board' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const deleteUserfromBoard = async (req, res, next) => {
  try {
    const { boardId, userId } = req.query;
    await knex('BoardsOnUsers')
      .delete()
      .where('boardId', parseInt(boardId))
      .andWhere('userId', parseInt(userId));
      res.status(200).json({ message: 'user deleted from board' });
  } catch (error) {
     console.error(error);
     res.status(500).json(error);
  }
};
module.exports = { getUserOnBoard, addUserToBoard, deleteUserfromBoard };
