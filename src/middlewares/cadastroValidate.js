
const mandatory  = (nome,cpf) => {

  if (typeof nome !== 'string' || typeof cpf !== 'number') {
    return { message: 'Invalid entries. Try again.' };
  }
  return true
};
 const numberPositive =  (valor) => {

  if (valor < 0 || typeof valor !== 'number') {
    return false;
    }
    return true;
 };

module.exports = { 
  mandatory,
  numberPositive
 };