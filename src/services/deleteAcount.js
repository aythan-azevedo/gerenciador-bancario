const userModel = require('../models/user')
const { ObjectId } = require('mongodb');

const deleteId = async (id) => {
  // verifica se é um id valido
  if (!(ObjectId.isValid(id))) {
    return { message: 'acount not found' };
}
  
const del = await userModel.deleteacount(id);
return del;
};  

module.exports = {
  deleteId
}