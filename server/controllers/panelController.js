const { knex } = require('../Knex');

const getAllPanel = async (req, res) => {
  try {
    const result = await knex.from('Panel').select('*');
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPanelById = async (req, res) => {
  try {
    const result = await knex
      .from('Panel')
      .select('*')
      .where('id', '=', parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPanelByBoardId = async (req, res) => {
  try {
    const result = await knex
      .from('Panel')
      .select('*')
      .where('boardId', '=', parseInt(req.params.boardId));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePanel = async (req, res) => {
  const { title, boardId } = req.body;
  try {
    const result = await knex('Panel')
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

const createPanel = async (req, res) => {
  const { title, boardId } = req.body;
  try {
    const result = await knex('Panel').insert({
      title: title,
      boardId: parseInt(boardId),
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePanel = async (req, res) => {
  try {
    const result = await knex
      .from('Panel')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllPanel,
  getPanelById,
  getPanelByBoardId,
  updatePanel,
  createPanel,
  deletePanel,
};
