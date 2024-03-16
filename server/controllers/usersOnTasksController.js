const { knex } = require('../Knex');

const getAllUsersOnTasks = async (req, res) => {
  try {
    const result = await knex.from('UsersOnTasks').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUsersOnTasksById = async (req, res) => {
  try {
    const result = await knex
      .from('UsersOnTasks')
      .select('*')
      .where('authorId', '=', parseInt(req.params.authorId))
      .andWhere('taskId', '=', parseInt(req.params.taskId));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

// const updateUsersOnTasks = async (req, res) => {
//   const { content, authorId } = req.body;
//   try {
//     const result = await knex('UsersOnTasks')
//       .where('id', '=', parseInt(req.params.id))
//       //   .andWhere('authorId', '=', req.user.id)
//       .update({
//         content: content,
//       });

//     res.status(200).json({ result, message: 'successfully updated' });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const createUsersOnTasks = async (req, res) => {
  const { authorId, taskId } = req.body;
  try {
    const result = await knex('UsersOnTasks').insert({
      authorId: authorId,
      taskId: taskId,
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUsersOnTasks = async (req, res) => {
  try {
    const result = await knex
      .from('UsersOnTasks')
      .where('authorId', '=', parseInt(req.params.authorId))
      .andWhere('boardIndex', '=', parseInt(req.params.boardIndex))
      .delete('*');
    console.log(result);
    res.status(200).json({ message: 'successfully deleted' });
  } catch (error) {
        console.log(error);

    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsersOnTasks,
  getUsersOnTasksById,
  createUsersOnTasks,
  deleteUsersOnTasks,
};
