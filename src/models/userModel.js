const { ObjectId } = require('mongodb');
const { connection } = require('./connection');


// aqui eu encontro a conta por meio do parâmetro cpf
const getByCPF = async (cpf) => {
  const con = await connection()
   .then((db) => db.collection('acounts').findOne({ cpf }))
   .then((result) => result);

  return con;
};
// crio uma ocnta a partir do nome e cpf
const createAcount = async ({ nome, cpf }) => {
  const saldo = 0;
  const resultado = await connection()
  .then((db) => db.collection('acounts').insertOne({nome, cpf, saldo }));

  return getByCPF(cpf);
  return resultado;
};
// pego todas as contas  por meio do find e deixo bonito com o toArray
const getallAcounts = async () => {
  const con = await connection()
  .then((db) => db.collection('acounts').find().toArray())
  .then((result) => result);

  return con;
};
// encontro a conta pelo id e deleto
const deleteacount = async (id) => {
  const deleteId = await connection()
  .then((db) => db.collection('acounts').deleteOne({ _id: ObjectId(id) }))
  .then((result) => ({ result }));

  return deleteId;
};


module.exports = {
  getByCPF,
  createAcount,
  getallAcounts,
  deleteacount,
};