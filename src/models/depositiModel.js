const { connection } = require('./connection');
const { getByCPF } = require('../models/userModel')

const updateSaldo = async (id, bodys, userId) => {
  const [name, ingredients, preparation] = bodys;
  const idList = await connection();
  await idList.collection('recipes')
  .updateOne({ _id: ObjectId(id) },
  { $set: { name, ingredients, preparation } });

  return getByCPF
};

module.exports = {
  updateSaldo,

};