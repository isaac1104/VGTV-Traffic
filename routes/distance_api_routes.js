require('dotenv').config();
const axios = require('axios');

module.exports = app => {
  app.get('/api/distance', async (req, res) => {
    const origin = '9979 Muirlands Blvd, Irvine, CA 92618';
    const destinations = 'Fullerton, CA | Cerritos, CA | Newport Beach, CA | Los Angeles, CA | Santa Ana, CA | Rancho Palos Verdes, CA';
    const request = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destinations}&key=${process.env.GOOGLE_API_KEY}`);
    const { data } = request;
    res.send(data);
  });
}
