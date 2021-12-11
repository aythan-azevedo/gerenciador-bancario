const { connection } = require('./connection');


const createAcount = async ({ nome, cpf }) => {
  const saldo = 0;
  const resultado = await connection()
  .then((db) => db.collection('acounts').insertOne({ nome, cpf, saldo }))
  .then(({ insertedId: _id }) => ({
     user: {
       _id, 
        nome,
        cpf,
        saldo
        } }));

return resultado;
};

const getByCPF = async (cpf) => {
  const con = await connection()
   .then((db) => db.collection('acounts').findOne({ cpf }))
   .then((result) => result);

  return con;
};

module.exports = {
  getByCPF,
  createAcount,
};