const userModel = require('../models/userModel');
const valid = require('../middlewares/cadastroValidate')
const validSaldo = require('../middlewares/transferValidate')
const depositoModel = require('../models/depositoModel')

const update = async (valor, pagador_cpf, beneficiado_cpf) => {
  const validation = valid.numberPositive(valor);

  if (validation !== true) {
    return { message: 'value must be positive and number' };
  }
  const existPagador = await userModel.getByCPF(pagador_cpf);

  if ( existPagador === null) {
    return { message: 'acount payer not exist' };
  }

  const existrecebedor = await userModel.getByCPF(beneficiado_cpf);

  if ( existrecebedor === null) {
    return { message: 'acount receiver not exist' };
  }

const  positiveSaldo = validSaldo.saldoPositivo(valor,pagador_cpf)

const idPagador = existPagador._id
const idRecebedor = existrecebedor._id

const saldoPagador = existPagador.saldo-valor;
const saldorecebedor = existrecebedor.saldo+valor;


const payer = await depositoModel.updateSaldo(saldoPagador ,pagador_cpf , idPagador);
const receiver = await depositoModel.updateSaldo(saldorecebedor ,beneficiado_cpf , idRecebedor);

return {payer,receiver};
};

module.exports = {
  update,
}