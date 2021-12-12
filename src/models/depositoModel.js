const { connection } = require('./connection');
const { getByCPF } = require('./userModel')

const updateSaldo = async (valor, cpf) => {
   const {nome }= getByCPF(cpf);
const saldo = valor;
  const idList = await connection();
  await idList.collection('recipes')
  .updateOne({ _id: ObjectId(id) },
  { $set: { nome, cpf, saldo } });

  return getByCPF
};

module.exports = {
  updateSaldo,

};