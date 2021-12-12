const userService = require('../services/userService')

const getAll = async (req, res) => {
  const getAll = await userService.getAll();
  if (getAll) {
  return res.status(200).json(getAll);
}
};

module.exports = {
  getAll,
}