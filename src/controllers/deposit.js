const depositService = require('../services/deposit');
// recebe a infromação do service e rerona ela para o cliente com o respectivo codigo REST

const update = async (req, res) => {
  const { valor, cpf, id } = req.body;

  const acount = await depositService.update(valor, cpf, id );

  if (acount.message) {
      return res.status(400).json(acount);
  }

  res.status(200).json({ acount });
};

module.exports = {
  update,
  
};