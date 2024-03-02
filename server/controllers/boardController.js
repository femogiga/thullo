const { knex } =require('../Knex');

const getAllBoard = async (req, res) => {
  try {
    const result = await knex.from('Board').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getBoardById = async (req, res) => {
  try {
    const result = await knex
      .from('Board')
      .select('*')
      .where('id', '=', parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBoard = async (req, res) => {
  const { name, adminId } = req.body;
  try {
    const result = await knex('Board')
      .where('id', '=', parseInt(req.params.id))
      .update({
        name: name,
        adminId: parseInt(adminId),
      });

    res.status(200).json({ result, message: 'successfully updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createBoard = async (req, res) => {
  const { name, adminId } = req.body;
  try {
    const result = await knex('Board').insert({
      name: name,
      adminId: parseInt(adminId),
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBoard = async (req, res) => {
  try {
    const result = await knex
      .from('Board')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllBoard,
  getBoardById,
  updateBoard,
  createBoard,
  deleteBoard,
};
