const deleteService = require('../services/deleteAcount')

const deleteId = async (req, res) => {
  const { id } = req.params;

  const acount = await deleteService.deleteId(id);

  if (acount.message) {
      return res.status(400).json(acount);
  }
  res.status(204).json(acount);
};

module.exports = {
  deleteId
}

