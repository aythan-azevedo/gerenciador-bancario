const userModel = require('../models/user');
const valid = require('../middlewares/registerValidate')
const validSaldo = require('../middlewares/transferValidate')
const depositModel = require('../models/deposit')

const update = async (valor, pagador_cpf, beneficiado_cpf) => {
  const validation = valid.numberPositive(valor);
//faço as validações do middlewares com um if simples
  if (validation !== true) {
    return { message: 'value must be positive and number' };
  }
  const existPayer= await userModel.getByCPF(pagador_cpf);
// valido se a conta existe 
  if ( existPayer === null) {
    return { message: 'acount payer not exist' };
  }

  const existreceiver = await userModel.getByCPF(beneficiado_cpf);
// valido se a conta existe 

  if ( existreceiver === null) {
    return { message: 'acount receiver not exist' };
  }

const  positive = await validSaldo.haveFound(valor,pagador_cpf)
// aqui verifico se tem saldo dispponivel para a transferencia
console.log(positive)
if (positive === true) {
  return { message: 'no funds' };
}

const idPayer = existPayer._id
const idreceiver = existreceiver._id
// altero os valores para mandar pra model
const payer = existPayer.saldo-valor;
const receiver = existreceiver.saldo+valor;


const payment = await depositModel.updateSaldo(payer ,pagador_cpf , idPayer);
const receipt = await depositModel.updateSaldo(receiver ,beneficiado_cpf , idreceiver);
// retorno o pagador e receiver
return {payment,receipt};
};

module.exports = {
  update,
}