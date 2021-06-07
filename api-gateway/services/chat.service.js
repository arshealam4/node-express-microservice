const env = process.env;
const axios = require('axios');

// call chat service using axios

module.exports.getAll = async (req, res, next) => {
    try {
      const response = await axios.get(`${env.CHAT_SERVICE}/chat`);
      return res.send(response.data);
    } catch (error) {
      return res.send(error);
    }
}

module.exports.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${env.CHAT_SERVICE}/chat/${id}`);
    return res.send(response.data);
  } catch (error) {
    return res.send(error);
  }
}

module.exports.insertChat = async (req, res, next) => {
  try {
    const body = req.body;
    const response = await axios.post(`${env.CHAT_SERVICE}/chat`, body);
    return res.send(response.data);
  } catch (error) {
    return res.send(error);
  }
}