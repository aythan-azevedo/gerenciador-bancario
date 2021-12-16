const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')
const depositoModel = require('../models/depositoModel')

const update = async (valor, cpf, id) => {
  const validation = valid.numberPositive(valor);
 
  if (validation !== true) {
    return { message: 'value must be positive and number' };
  }
  const exist = await userModel.getByCPF(cpf);

  if ( exist === null) {
    return { message: 'acount not exist' };
  }

  if ( valor > 2000) {
    return { message: 'the deposit must be less than or equal to 2000' };
  }
 const total = valor + exist.saldo;
 if ( total > 10000) {
  return { message: 'you have reached the deposit limit of 10000' };
}

const acount = await depositoModel.updateSaldo(total ,cpf , id);
return acount;
};

module.exports = {
  update,
}

