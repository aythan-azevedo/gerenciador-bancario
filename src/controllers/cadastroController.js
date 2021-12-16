const cadastroService = require('../services/cadastroService');
// recebe a infromação do service e rerona ela para o cliente com o respectivo codigo REST

const createAcount = async (req, res) => {
  const { nome, cpf } = req.body;
  
  const acount = await cadastroService.createAcount(nome, cpf );
  
  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(201).json({ acount });
};

module.exports = {
  createAcount,
  
};