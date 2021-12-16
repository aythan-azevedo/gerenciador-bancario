const userModel = require('../models/userModel')
// aqui apenas conferimos se a conta tem fundos para fazer uma tranferência
const saldoPositivo = async (valor, cpf) => {
  const exist = await userModel.getByCPF(cpf); 

  if (exist.saldo - valor < 0) {
    return false};
    
    return true;
 };

 module.exports = {
  saldoPositivo
 };