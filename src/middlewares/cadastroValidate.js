const userModel = require('../models/userModel')

const mandatory  = (nome,cpf) => {

  if (typeof nome !== 'string' || typeof cpf !== 'number') {
    return { message: 'Invalid entries. Try again.' };
  }
  return true
};

 const saldoPositivo = async (valor, cpf) => {
  const exist = await userModel.getByCPF(cpf); 

  if (exist.saldo - valor < 0) {
    return { err: { message: 'no funds' } };
    }
    return false;
 };
 const numberPositive = async (valor) => {

  if (valor < 0) {
    return { err: { message: 'value must be positive' } };
    }
    return false;
 };

module.exports = { 
  mandatory,
  saldoPositivo,
  numberPositive
 };