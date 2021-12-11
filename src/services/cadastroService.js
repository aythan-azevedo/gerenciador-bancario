const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')

const createAcount = async (nome, cpf) => {
  const validation = valid.mandatory(nome,cpf);
  
  if (validation !== true) {
    return validation;
  }
  
  const exist = await userModel.getByCPF(cpf);
  


  if (exist ) {
    return { message: 'Email already registered' };
  }

const recipe = await userModel.createAcount({ nome,cpf });
return recipe;
};

module.exports = {
  createAcount,
}

