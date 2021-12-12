const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')
const depositoModel = require('../models/depositoModel')

const update = async (valor, cpf) => {
  const validation = valid.numberPositive(valor);
  
  if (validation !== true) {
    return validation.err;
  }
  const exist = await userModel.getByCPF(cpf);

  if ( exist === null) {
    return { message: 'acount not exist' };
  }
 

const acount = await depositoModel.updateSaldo(valor,cpf);
return acount;
};

module.exports = {
  update,
}

