const { knex } = require('../Knex');

const getAllChat = async (req, res) => {
  try {
    const result = await knex.from('Chat').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getChatById = async (req, res) => {
  try {
    const result = await knex
      .from('Chat')
      .select('*')
      .where('id', '=', parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateChat = async (req, res) => {
  const { content, authorId } = req.body;
  try {
    const result = await knex('Chat')
      .where('id', '=', parseInt(req.params.id))
      //   .andWhere('authorId', '=', req.user.id)
      .update({
        content: content,
      });

    res.status(200).json({ result, message: 'successfully updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createChat = async (req, res) => {
  const { name, adminId, taskId } = req.body;
  try {
    const result = await knex('Chat').insert({
      content: content,
      authorId: authorId,
      taskId: taskId,
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteChat = async (req, res) => {
  try {
    const result = await knex
      .from('Chat')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllChat,
  getChatById,
  updateChat,
  createChat,
  deleteChat,
};
