const depositoService = require('../services/depositoService');
// recebe a infromação do service e rerona ela para o cliente com o respectivo codigo REST

const update = async (req, res) => {
  const { valor, cpf, id } = req.body;

  const acount = await depositoService.update(valor, cpf, id );
  console.log(acount)
  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(200).json({ acount });
};

module.exports = {
  update,
  
};