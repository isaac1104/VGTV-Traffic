const axios = require('axios');

module.exports = app => {
  app.get('/api/distance', async (req, res) => {
    const request = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=9979+Muirlands+Blvd,%20Irvine,%20CA%2092618&destinations=Fullterton,CA|Cerritos,CA&key=AIzaSyCYsJ9eFoI6lNx_gPuOoz7_j40lgv5X3QE`);
    const { data } = request;
    res.send(data);
  });
}
