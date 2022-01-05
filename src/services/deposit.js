const userModel = require('../models/user');
const valid = require('../middlewares/registerValidate')
const depositoModel = require('../models/deposit')

const update = async (valor, cpf, id) => {
  const validation = valid.numberPositive(valor);
 // validações do valor do deposito
  if (validation !== true) {
    return { message: 'value must be positive and number' };
  }
  const exist = await userModel.getByCPF(cpf);
// valida a existencia da conta
  if ( exist === null) {
    return { message: 'acount not exist' };
  }
// não permite depositos maiores que 2000
  if ( valor > 2000) {
    return { message: 'the deposit must be less than or equal to 2000' };
  }
 const total = valor + exist.saldo;
 // se a conta tiver mais de 10000 ela não permite mais depositos
 if ( total > 10000) {
  return { message: 'you have reached the deposit limit of 10000' };
}

const acount = await depositoModel.updateSaldo(total ,cpf , id);
return acount;
};

module.exports = {
  update,
}

