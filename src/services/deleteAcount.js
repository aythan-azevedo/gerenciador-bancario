const userModel = require('../models/userModel')

const deleteId = async (id) => {
  if (!(ObjectId.isValid(id))) {
    return { message: 'recipe not found' };
}
  
const del = await userModel.deleteacount(id);
return del;
};  

module.exports = {
  deleteId
}