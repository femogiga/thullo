const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const upload = require('../config/multerConfig');
const { Readable } = require('stream');
const cloudinary = require('../config/cloudinaryConfig');

require('dotenv').config();

// const register = async (req, res) => {
//   const errors = validationResult(req);
//   try {
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { firstname, lastname, email, password, imgUrl } = req.body;
//     const userExist = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });

//     if (userExist) {
//       return res.status(400).json({ errors: 'user already exist.' });
//     }
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);
//     const person = await prisma.user.create({
//       data: {
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         password: hashedPassword,
//         imgUrl: imgUrl,
//       },
//     });
//     return res
//       .status(200)
//       .json({ person: person, message: 'person successfully created' });
//   } catch (err) {
//     console.error(err);
//     return res
//       .status(500)
//       .json({ errors: err.message, error: 'internal server error' });
//   }
// };

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).json({ errors: 'Invalid credentials' });
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ errors: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    console.log(token);
    const { id, firstname, lastname, imgUrl } = user;
    const dataToSend = { id, firstname, lastname, email, imgUrl };
    return res.json({ token, user: dataToSend });
  } catch (err) {
    return res.status(500).json({ errors: 'Internal server error' });
  }
};

const register = async (req, res) => {
  try {
    upload.single('photo')(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'File upload failed' });
      }

      if (!req.file) {
        return res
          .status(500)
          .json({ message: 'Profile photo is needed for registration' });
      }

      try {
        const base64String = req.file.buffer.toString('base64');
        const result = await cloudinary.uploader.upload(
          `data:image/png;base64,${base64String}`,
          { resource_type: 'auto' }
        );
        const photo = result.secure_url;

        // Logging here after accessing the request body
        console.log('firstname', req.body.firstname);
        console.log('lastname', req.body.lastname);
        console.log('email', req.body.email);
        console.log('password', req.body.password);

        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //   console.error(errors.array());
        //   return res.status(400).json({ errors: errors.array() });
        // }

        const { firstname, lastname, email, password, imgUrl } = req.body;

        const userExist = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        if (userExist) {
          return res.status(400).json({ errors: 'User already exists.' });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const person = await prisma.user.create({
          data: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashedPassword,
            imgUrl: photo,
          },
        });

        return res
          .status(200)
          .json({ person: person, message: 'Person successfully created' });
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

module.exports = { login, register };
