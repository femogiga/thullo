const { knex } = require('../Knex');

const getAllUser = async (req, res) => {
  try {
    const result = await knex
      .from('User')
      .select('id', 'firstname', 'lastname', 'email', 'imgUrl');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  //console.log('id====>', req.params.id);
  try {
    const result = await knex
      .from('User')
      .where('id', '=', parseInt(req.params.id))
      .select('id', 'firstname', 'lastname', 'email', 'imgUrl');
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserByBoardId = async (req, res) => {
  //console.log('id====>', req.params.id);
  try {
    const result = await knex
      .from('Panel')
      .where('boardId', '=', parseInt(req.params.boardId))
      .rightJoin('Task', 'Task.panelId', '=', 'Panel.id')
      .innerJoin('UsersOnTasks', 'UsersOnTasks.taskId', '=', 'Task.id')
      .innerJoin('User', 'UsersOnTasks.authorId', '=', 'User.id')
      .select('User.id', 'User.firstname', 'User.lastname', 'User.email', 'User.imgUrl')
      .distinct();
    //.select('id', 'firstname', 'lastname', 'email', 'imgUrl');

    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const { id, firstname, lastname, email, imgUrl, password } = req.body;
  try {
    const result = await knex('User')
      .where('id', '=', parseInt(req.params.id))
      //   .andWhere('authorId', '=', req.user.id)
      .update({
        firstName: firstName,
        lastName: lastName,
        email: email,
        imageUrl: imageUrl,
        password: password,
      });

    res.status(200).json({ result, message: 'successfully updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

// const createUser = async (req, res) => {
//   const { name, adminId, taskId } = req.body;
//   try {
//     const result = await knex('User').insert({
//       content: content,
//       authorId: authorId,
//       taskId: taskId,
//     });

//     res.status(201).json({ result, message: 'successfully created' });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

const deleteUser = async (req, res) => {
  try {
    const result = await knex
      .from('User')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};



module.exports = {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByBoardId,
};
