const userModel = require('../models/userModel')

const saldoPositivo = async (valor, cpf) => {
  const exist = await userModel.getByCPF(cpf); 

  if (exist.saldo - valor < 0) {
    return false};
    
    return true;
 };

 module.exports = {
  saldoPositivo
 };