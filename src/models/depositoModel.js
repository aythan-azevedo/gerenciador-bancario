const { ObjectId } = require('mongodb');
const { connection } = require('./connection');
const { getByCPF } = require('./userModel')

// nessa model nós alteramos o banco de dados para fim dos depositos e transferências.
const updateSaldo = async (valor, cpf, id) => {

const saldo = valor;
  const idList = await connection();
  await idList.collection('acounts')
  .updateOne({ _id: ObjectId(id) },
  { $set: { saldo } });

  return getByCPF(cpf)
};

module.exports = {
  updateSaldo,

};