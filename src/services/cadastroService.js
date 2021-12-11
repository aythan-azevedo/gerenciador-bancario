const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')

const createAcount = async (nome, cpf) => {
  const validation = valid.mandatory(nome,cpf);
  
  console.log(validation)
  if (validation !== true) {
    return validation;
 }

const recipe = await userModel.createAcount({ nome,cpf });
return recipe;
};

module.exports = {
  createAcount,
}

