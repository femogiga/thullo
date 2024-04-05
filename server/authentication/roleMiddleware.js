const { knex } = require('../Knex');

// const checkAdmin = async (req, res, next) => {
//   const boardId = req.body.boardId;

//   const panelToDelete = await knex
//     .from('Panel')
//     .select('boardId')
//     .where('id', req.params.panelId);
//   console.log('panelToDelete', panelToDelete);
//    const board = await knex
//    .from('Board')
//     .select('*')
//     .where('id', '=', parseInt(panelToDelete[0].boardId));
//   const boardAdminId = board.adminId;
//     if (!(boardAdminId === parseInt(req.user.id))) {
//        res.status(401).json({ message: ' Unauthorized '})
//     return
//    }

//   next();
// };

const checkAdminPanelDelete = async (req, res, next) => {
  const boardId = req.body.boardId;

  const panelToDelete = await knex
    .from('Panel')
    .select('boardId')
    .where('id', req.params.panelId);
  console.log('panelToDelete', panelToDelete);
  const board = await knex
    .from('Board')
    .select('*')
    .where('id', '=', parseInt(panelToDelete[0].boardId));
  const boardAdminId = board[0].adminId;
  if (!(boardAdminId === parseInt(req.user.id))) {
    res.status(401).json({ message: ' Unauthorized ' });
    return;
  }

  next();
};

const checkAdminPanelRename = async (req, res, next) => {
    const boardId = req.body.boardId;
    console.log('boardRename', boardId)
  const board = await knex
    .from('Board')
    .select('*')
    .where('id', '=', parseInt(boardId));

    //console.log('boardRename', board)
    if (!(board[0].adminId === parseInt(req.user.id))) {
      res.status(401).json({ message: ' Unauthorized ' });
      return;
    }

    next();

};


module.exports = { checkAdminPanelDelete, checkAdminPanelRename };
