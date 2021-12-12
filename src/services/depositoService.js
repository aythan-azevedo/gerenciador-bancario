const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')

const update = async (valor, cpf) => {
  const validation = valid.numberPositive(valor);
  
  if (validation !== true) {
    return validation;
  }
  
 

const acount = await userModel.createAcount({ nome,cpf });
return acount;
};

module.exports = {
  update,
}

