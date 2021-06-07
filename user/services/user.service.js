const env = process.env;
const axios = require('axios');

module.exports.getAll = async (req, res, next) => {
    try {
      return res.send({success: true, code: 200, msg: 'success', result: [{message: 'user1'}, {message: 'user2'}]});
    } catch (error) {
      return res.send({success: false, code: 500, msg: error.message, result: []});
    }
}

module.exports.getById = async (req, res, next) => {
  try {
    return res.send({success: true, code: 200, msg: 'success', result: req.params.id});
  } catch (error) {
    return res.send({success: false, code: 500, msg: error.message, result: []});
  }
}

module.exports.insertUser = async (req, res, next) => {
  try {
    // call log service and add user info.
    axios.post(`${env.LOG_SERVICE}/log`, req.body);
    return res.send({success: true, code: 201, msg: 'success', result: req.body});
  } catch (error) {
    return res.send({success: false, code: 500, msg: error.message, result: []});
  }
}