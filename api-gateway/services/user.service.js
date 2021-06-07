const env = process.env;
const axios = require('axios');

// call user service using axios

module.exports.getAll = async (req, res, next) => {
    try {
      const response = await axios.get(`${env.USER_SERVICE}/user`);
      return res.send(response.data);
    } catch (error) {
      return res.send(error);
    }
}

module.exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${env.USER_SERVICE}/user/${id}`);
    return res.send(response.data);
  } catch (error) {
    return res.send(error);
  }
}

module.exports.insertUser = async (req, res, next) => {
  try {
    const body = req.body;
    const response = await axios.post(`${env.USER_SERVICE}/user`, body);
    return res.send(response.data);
  } catch (error) {
    return res.send(error);
  }
}