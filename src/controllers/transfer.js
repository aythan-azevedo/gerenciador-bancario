const transferService = require('../services/tranfer');
// recebe a infromação do service e rerona ela para o cliente com o respectivo codigo REST

const updateTrans = async (req, res) => {
  const {valor, pagador_cpf, beneficiado_cpf} = req.body;
  
  const acount = await transferService.update(valor, pagador_cpf, beneficiado_cpf);

  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(200).json({ acount });
};

module.exports = {
  updateTrans,
  
};