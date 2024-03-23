const axios = require('axios');
require('dotenv').config();

const getPhotos = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchterm;
    const response = await axios.get(`https://api.pexels.com/v1/search`, {
      params: {
        query: searchTerm,
        per_page: 12,
      },
      headers: {
        Authorization: process.env.PEXEL_API_KEY,
      },
    });

    const data = response.data; // Extract the data from the response

    console.log('data ====>', data); // Log the data to see what you're getting

    res.status(200).json(data); // Send the data as JSON response
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message }); // Send error message as JSON response
  }
};

module.exports = { getPhotos };
