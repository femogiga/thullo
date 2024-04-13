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
        return res.status(500).json({message:'file upload failed', error: 'File upload failed' });
      }

      if (!req.file) {
        return res.status(500).json({message: 'document file is required ' });
      }
      //console.log(req.file);

      try {
        // const fileType = 'pdf';
        const fileType = req.file.mimetype;
        console.log('fileType======>', fileType);
         let fileTypeString;
        switch (fileType) {
          case 'application/pdf':
            const fileTypeIndex = fileType.lastIndexOf('/');
            fileTypeString = fileType.substring(fileTypeIndex + 1)
            break;
          default:
            fileTypeString = 'txt';
            break;
         }

        //console.log('fileTypeString======>', fileTypeString);

        const base64String = req.file.buffer.toString('base64');
        const result = await cloudinary.uploader.upload(
          `data:application/${fileTypeString};base64,${base64String}`,
          { resource_type: 'auto' }
        );
        const fileUrl = result.secure_url;
        const { title, taskId } = req.body;
        //const fileUrlString = fileUrl + '.' + fileTypeString

        const newAsset = await knex('Asset').insert({
          url: fileUrl,
          title: title,
          taskId: taskId,
        });

        return res.status(200).json({ uploaded: true,message: 'file  successfully created' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({message:'file upload failed', error: 'Internal server error' });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({message:'file upload failed', error: 'Internal server error' });
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

const deleteAssetById = async (req, res, next) => {
  try {
    const id = parseInt(req.query.id);
    const result = await knex('Asset').where('id', id).delete();
    res.status(200).json({ message: 'attachment deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });

  }
}


module.exports = { uploader, getAssetByTaskId, deleteAssetById };
