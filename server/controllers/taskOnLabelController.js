const { knex } = require('../Knex');

const getAllTasksOnLabels = async (req, res) => {
  try {
    const result = await knex.from('TasksOnLabels').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTasksOnLabelsById = async (req, res) => {
  try {
    const result = await knex
      .from('TasksOnLabels')
      .select('*')
      .where('id', '=', parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTasksOnLabels = async (req, res) => {
  const { taskId, labelId } = req.body;
  try {
    const result = await knex('TasksOnLabels')
      .where('id', '=', parseInt(req.params.id))
      //   .andWhere('authorId', '=', req.user.id)
      .update({
        taskId: parseInt(taskId),
        labelId: parseInt(labelId),
      });

    res.status(200).json({ result, message: 'successfully updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTasksOnLabels = async (req, res) => {
  const { taskId, labelId } = req.body;
  try {
    const result = await knex('TasksOnLabels').insert({
      taskId: parseInt(taskId),
      labelId: parseInt(labelId),
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTasksOnLabels = async (req, res) => {
  try {
    const result = await knex
      .from('TasksOnLabels')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTasksOnLabels,
  getTasksOnLabelsById,
  updateTasksOnLabels,
  createTasksOnLabels,
  deleteTasksOnLabels,
};
