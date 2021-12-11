const { connection } = require('./connection');


const createAcount = async ({ name, cpf }) => {
  const resultado = await connection()
  .then((db) => db.collection('acounts').insertOne({ name, cpf, saldo }))
  .then(({ insertedId: _id }) => ({
     user: {
       _id, 
        name,
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