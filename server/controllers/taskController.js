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
      .select('*')
      .where('id', '=', parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
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

    res.status(200).json({ result, message: 'successfully updated' });
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

module.exports = {
  getAllTask,
  getTaskById,
  updateTask,
  createTask,
  deleteTask,
};
