const depositoService = require('../services/depositoService');

const update = async (req, res) => {
  const { valor, cpf } = req.body;
  

  const acount = await depositoService.update(valor, cpf );
  
  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(200).json({ acount });
};

module.exports = {
  update,
  
};