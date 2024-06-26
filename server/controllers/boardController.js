const { knex } = require('../Knex');

const getAllBoard = async (req, res) => {
  try {
    const result = await knex.from('Board').select('*');
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllboardDataWithUser = async (req, res) => {
  try {
    const result = await knex
      .select(
        'Board.*',
        knex.raw(
          `(
            SELECT JSONB_AGG(JSON_BUILD_OBJECT(
              'id', "User".id,
              'imgUrl', "User"."imgUrl"
            ))
            FROM "User"
            JOIN "BoardsOnUsers" ON "BoardsOnUsers"."userId" = "User".id
            WHERE "BoardsOnUsers"."boardId" = "Board".id
          ) as userphotos`
        )
      )
      .from('Board');

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
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
  const { name, adminId, description, privacy } = req.body;
  try {
    const result = await knex('Board')
      .where('id', '=', parseInt(req.params.id))
      .update({
        name: name,
        adminId: parseInt(adminId),
        description: description,
        privacy: privacy,
      });

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const createBoard = async (req, res) => {
  const { name, adminId, thumbnail, privacy } = req.body;
  try {
    const result = await knex('Board')
      .insert({
        name: name,
        adminId: parseInt(adminId),
        thumbnail: thumbnail,
        privacy: privacy,
      })
      .returning(['id']);

    res.status(201).json({ result, message: 'successfully created' });
  } catch (error) {
    console.log(error);
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
  getAllboardDataWithUser,
};
