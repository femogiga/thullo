const { knex } = require('../Knex.js');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getMainBoardPanels = async (req, res, next) => {
  try {
    const result = await knex
      .from('Panel')
      .where('Panel.boardId', parseInt(req.params.boardId))
      .select(
        'Panel.*',
        'Task.*',
        knex.raw('JSONB_AGG("User") as users'),
        knex.raw('JSONB_AGG("label") as labels')
      )
      .leftJoin('Task', 'Panel.id', '=', 'Task.panelId')
      .leftJoin('UsersOnTasks', 'Task.id', '=', 'UsersOnTasks.taskId')
      .leftJoin('User', 'User.id', '=', 'UsersOnTasks.authorId')
      .leftJoin('TasksOnLabels', 'Task.id', '=', 'TasksOnLabels.taskId')
      .leftJoin('Label', 'Label.id', '=', 'TasksOnLabels.labelId')

      .groupBy('Panel.boardId', 'Task.id', 'Panel.id', 'Label.id');
    //console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

const getTasksByPanelId = async (req, res, next) => {
  try {
    const result = await knex('Task')
      .where('Task.panelId', parseInt(req.params.panelId))
      .select('Task.*');

    //console.log('************** Task*************==>', result);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

const getCardPrisma = async (req, res, next) => {
  try {
    const result = await prisma.board.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
      include: {
        panels: {
          include: {
            tasks: {
              include: {
                users: true,
                labels: true, // Include the labels associated with each task
              },
            },
          },
        },
      },
    });
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getMainBoardPanels, getTasksByPanelId, getCardPrisma };
