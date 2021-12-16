const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')

const createAcount = async (nome, cpf) => {
  const validation = valid.mandatory(nome,cpf);
  // valida as informaçôes
  if (validation !== true) {
    return validation;
  }
  
  const exist = await userModel.getByCPF(cpf);
// verifica  a existência
  if ( exist !== null) {
    return { message: 'acount already registered' };
  }

const acount = await userModel.createAcount({ nome,cpf });
return acount;
};

module.exports = {
  createAcount,
}

