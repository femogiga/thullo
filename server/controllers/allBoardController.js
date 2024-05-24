const { knex } = require('../Knex');

/*
** This getUserPhoto shuld be get boardDatabyUserIdwith photos
*
*/
const getUserPhoto = async (req, res) => {
  try {
    const result = await knex
      .select(
        'Board.id',
        'Board.name',
        'Board.thumbnail',
        'Board.privacy',
        knex.raw('ARRAY_AGG("User"."imgUrl") as userPhotos')
      )
      .from('Board')
      .where('Board.id', '=', parseInt(req.params.id))
      .innerJoin('Panel', 'Board.id', '=', 'Panel.boardId')
      .leftJoin('Task', 'Panel.id', '=', 'Task.panelId')
      .leftJoin('UsersOnTasks', 'Task.id', '=', 'UsersOnTasks.taskId')
      .leftJoin('User', 'User.id', '=', 'UsersOnTasks.authorId')
      .groupBy('Board.id', 'Board.name', 'Board.thumbnail');
    //.select('Board.id', 'Board.name', 'Board.thumbnail', 'User.imgUrl')

    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  //console.log(Array.from (new Set(result)));
};

const AllBoardPage = async (req, res) => {
  try {
    const result = await knex
      .select(
        'Board.id',
        'Board.name',
        'Board.thumbnail',
        'Board.adminId',
        'Board.privacy',
        knex.raw('ARRAY_AGG("User"."imgUrl") as userPhotos')
      )
      .from('Board')
      .leftJoin('Panel', 'Board.id', '=', 'Panel.boardId')
      .leftJoin('Task', 'Panel.id', '=', 'Task.panelId')
      .leftJoin('UsersOnTasks', 'Task.id', '=', 'UsersOnTasks.taskId')
      .leftJoin('User', 'User.id', '=', 'UsersOnTasks.authorId')
      .groupBy('Board.id', 'Board.name', 'Board.thumbnail');
    //.select('Board.id', 'Board.name', 'Board.thumbnail', 'User.imgUrl')

    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  //console.log(Array.from (new Set(result)));
};

module.exports = { getUserPhoto, AllBoardPage };
