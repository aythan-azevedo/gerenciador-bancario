const { connection } = require('./connection');


const getByCPF = async (cpf) => {
  const con = await connection()
   .then((db) => db.collection('acounts').findOne({ cpf }))
   .then((result) => result);

  return con;
};

const createAcount = async ({ nome, cpf }) => {
  const saldo = 0;
  const resultado = await connection()
  .then((db) => db.collection('acounts').insertOne({nome, cpf, saldo }));

  return getByCPF(cpf);
  return resultado;
};

const getallAcounts = async () => {
  const con = await connection()
  .then((db) => db.collection('acounts').find().toArray())
  .then((result) => result);

  return con;
};

const deleteacount = async (id) => {
  const deleteId = await connection()
  .then((db) => db.collection('acount').deleteOne({ _id: ObjectId(id) }))
  .then((result) => ({ result }));

  return deleteId;
};


module.exports = {
  getByCPF,
  createAcount,
  getallAcounts,
  deleteacount,
};