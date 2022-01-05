
const userModel = require('../models/user');
// apenas um rota para o getall para contemplar o modelo msc
const getAll = async () => {
  const all = await userModel.getallAcounts();

  return all;
};

module.exports = {
  getAll,
}