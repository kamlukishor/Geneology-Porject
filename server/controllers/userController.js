const userService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    const result = await userService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const result = await userService.verifyEmail(req.params.token);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
