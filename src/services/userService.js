
const userModel = require('../models/userModel');

const getAll = async () => {
  const all = await userModel.getallAcounts();

  return all;
};

module.exports = {
  getAll,
}