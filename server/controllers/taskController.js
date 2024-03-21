const { knex } = require('../Knex');

const getAllTask = async (req, res) => {
  try {
    const result = await knex.from('Task').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const result = await knex
      .from('Task')
      .where('id', '=', parseInt(req.params.id))
      .select('*');

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getTaskByPanelId = async (req, res) => {
  try {
    const result = await knex
      .from('Task')
      .where('panelId', '=', parseInt(req.params.panelId))
      .select('*');

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllTasksWithUsersAndLabels = async (req, res) => {
  try {
    const result = await knex
      .select(
        'Task.*',
        knex.raw('JSON_AGG(DISTINCT "Label".*) as labels'),
        knex.raw('JSON_AGG(DISTINCT "User".*) as users')
      )
      .from('Task')
      .leftJoin('TasksOnLabels', 'Task.id', '=', 'TasksOnLabels.taskId')
      .leftJoin('Label', 'Label.id', '=', 'TasksOnLabels.labelId')
      .leftJoin('UsersOnTasks', 'Task.id', '=', 'UsersOnTasks.taskId')
      .leftJoin('User', 'User.id', '=', 'UsersOnTasks.authorId')
      .groupBy('Task.id');

    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  const { title, description, status, imageUrl, panelId } = req.body;
  try {
    const result = await knex('Task')
      .where('id', '=', parseInt(req.params.id))
      //   .andWhere('authorId', '=', req.user.id)
      .update({
        title: title,
        description: description,
        status: status,
        imageUrl: imageUrl,
        panelId: parseInt(panelId),
      });

    res.status(201).json({ result, message: 'successfully updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  const { title, description, status, imageUrl, panelId } = req.body;
  try {
    const result = await knex('Task').insert({
      title: title,
      description: description,
      status: status,
      imageUrl: imageUrl,
      panelId: parseInt(panelId),
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    console.error(error)
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await knex
      .from('Task')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTaskPosition = async (req, res) => {
  const { title, boardId, taskId } = req.body;
  console.log('taskId======>', taskId);
  console.log('title======>', title);
  console.log('boardId======>', boardId);

  try {
    const panel = await knex
      .from('Panel')
      .where('title', '=', title)
      .andWhere('boardId', '=', parseInt(boardId))
      // .where('title', '=', 'Completed')
      // .andWhere('boardId', '=', 1)
      .select('*');
    const newPanelId = parseInt(panel[0]?.id);
    const task = await knex('Task')
      //.where('id', '=', 2)
      .where('id', '=', parseInt(taskId))
      .update({ panelId: newPanelId });
    // .update({ panelId: 2 });

    console.log('panel=====>', task);
    res.status(200).json({ task, message: 'successfully updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTask,
  getTaskById,
  getTaskByPanelId,
  getAllTasksWithUsersAndLabels,
  updateTask,
  createTask,
  deleteTask,
  updateTaskPosition,
};
