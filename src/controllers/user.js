const userService = require('../services/user')
// recebe a infromação do service e rerona ela para o cliente com o respectivo codigo REST
const getAll = async (req, res) => {
  const getAll = await userService.getAll();
  if (getAll) {
  return res.status(200).json(getAll);
}
};

module.exports = {
  getAll,
}