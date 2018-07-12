require('dotenv').config();
const axios = require('axios');

module.exports = app => {
  app.get('/api/distance', async (req, res) => {
    const origin = '9979 Muirlands Blvd, Irvine, CA 92618';
    const destinations = 'Irvine, CA | Mission Viejo, CA | Newport Beach, CA | Santa Ana, CA | Fullerton, CA | Cerritos, CA | Los Angeles, CA';
    const request = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destinations}&key=${process.env.GOOGLE_API_KEY}`);
    const { data } = request;
    res.send(data);
  });
}
