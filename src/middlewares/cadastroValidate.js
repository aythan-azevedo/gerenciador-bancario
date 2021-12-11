const userModel = require('../models/userModel')

const mandatory  = (nome,cpf) => {

  if (typeof nome !== 'string' || typeof cpf !== 'number') {
    return { message: 'Invalid entries. Try again.' };
  }
  return true
};

const valideEmailExist = async (cpf) => {
  const exist = await userModel.getByCPF(cpf); 
 
  if (exist) {
    return { err: { message: 'Email already registered' } };
    }
    return false;
 };

module.exports = { 
  mandatory,

 };