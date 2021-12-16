const transferService = require('../services//tranferService');

const updateTrans = async (req, res) => {
  const {valor, pagador_cpf, beneficiado_cpf} = req.body;
  

  const acount = await transferService.update(valor, pagador_cpf, beneficiado_cpf);
  console.log(acount)
  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(200).json({ acount });
};

module.exports = {
  updateTrans,
  
};