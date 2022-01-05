const userModel = require('../models/user')
// aqui apenas conferimos se a conta tem fundos para fazer uma tranferência
const haveFound = async (valor, cpf) => {
  const exist = await userModel.getByCPF(cpf); 
  const found = exist.saldo - valor <  0;

  if (found !== true) {
    return false};
    
    return true;
 };

 module.exports = {
  haveFound
 };