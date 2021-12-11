const cadastroService = require('../services/cadastroService');

const createAcount = async (req, res) => {
  const { nome, cpf } = req.body;
  
  const acount = await cadastroService.createAcount(nome, cpf );
  // console.log(acount)
  
  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(201).json({ acount });
};

module.exports = {
  createAcount,
  
};