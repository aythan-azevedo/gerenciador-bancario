// aqui fazemos validações necessarias para que não chegue informações de uma maneira que não queremos. 
const mandatory  = (nome,cpf) => {
//valida se os elementos existe e o tipo ideal.
  if (typeof nome !== 'string' || typeof cpf !== 'number') {
    return { message: 'Invalid entries. Try again.' };
  }
  return true
};
 const numberPositive =  (valor) => {
// valida se o valor informado é positivo
  if (valor < 0 || typeof valor !== 'number') {
    return false;
    }
    return true;
 };

module.exports = { 
  mandatory,
  numberPositive
 };