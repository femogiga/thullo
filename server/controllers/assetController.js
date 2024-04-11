const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const upload = require('../config/multerConfig');
const { Readable } = require('stream');
const cloudinary = require('../config/cloudinaryConfig');
const axios = require('axios');
const { knex } = require('../Knex');

require('dotenv').config();

const uploader = async (req, res) => {
  try {
    upload.single('file')(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      if (!req.file) {
        return res.status(500).json({ message: 'document file is required ' });
        }
        console.log(req.file);

      try {
        const fileType = 'pdf';
        const base64String = req.file.buffer.toString('base64');
        const result = await cloudinary.uploader.upload(
          `data:application/${fileType};base64,${base64String}`,
          { resource_type: 'auto' }
        );
        const fileUrl = result.secure_url;

        const { title, taskId } = req.body;

        const newAsset = await knex('Asset').insert({
          url: fileUrl,
          title: title,
          taskId: taskId,
        });

        return res.status(200).json({ message: 'file  successfully created' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getAssetByTaskId = async (req, res, next) => {
  try {
    const result = await knex
      .from('Asset')
      .where('taskId', req.query.taskId)
      .select('*');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploader, getAssetByTaskId };
