const { connection } = require('./connection');


const getByCPF = async (cpf) => {
  const con = await connection()
   .then((db) => db.collection('acounts').findOne({ cpf }))
   .then((result) => result);

  return con;
};

const createAcount = async ({ nome, cpf }) => {
  const saldo = 0;
  const resultado = await connection();
  resultado.then((db) => db.collection('acounts').insertOne({nome, cpf, saldo }));

  return getByCPF(cpf);
};


module.exports = {
  getByCPF,
  createAcount,
};