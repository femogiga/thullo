const { knex } = require('../Knex');

const getAllLabel = async (req, res) => {
  try {
    const result = await knex.from('Label').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getLabelById = async (req, res) => {
  try {
    const result = await knex
      .from('Label')
      .select('*')
      .where('id', '=', parseInt(req.params.id));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateLabel = async (req, res) => {
  const { label, labelColor } = req.body;
  try {
    const result = await knex('Label')
      .where('id', '=', parseInt(req.params.id))
      //   .andWhere('authorId', '=', req.user.id)
      .update({
          label: label,
          labelColor: labelColor
      });

    res.status(200).json({ result, message: 'successfully updated' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createLabel = async (req, res) => {
  const { label,  labelColor } = req.body;
  try {
    const result = await knex('Label').insert({
      label: label,
      labelColor: labelColor,
    });

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteLabel = async (req, res) => {
  try {
    const result = await knex
      .from('Label')
      .where('id', '=', parseInt(req.params.id))
      .delete('*');

    res.status(200).json({ result, message: 'successfully deleted' });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllLabel,
  getLabelById,
  updateLabel,
  createLabel,
  deleteLabel,
};
