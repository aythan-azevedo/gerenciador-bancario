# gerenciador-bancario
Bem vindo ao meu projeto que simula um registro de contas bancarias com função de deposito e transferencia básica
## Habilidades
Neste projeto usei de API's REST com um modelo MSC.
usei o node.js com o express para faze-lo, usei um banco não relacional mongodb.
## clone
faça o clone do projeto com o seguinte comando em seu terminal 
`git clone git@github.com:aythan-azevedo/gerenciador-bancario.git`
e entrar
`cd gerenciador-bancario`
## Necessario
-para conseguir execultar o projeto você vai precisar de um simulador de cliente como o insominia ou o postaman
- é necessario instalar as depensencias do node.js com o comando: `npm install node`
- inicie o projeto com o comando `npm start`
## criando um usuario 
insira esse endereço no cliente que você está usando com a modalidade post.
`http://localhost:3000/cadastro`
e coloque o comando nele assim como no exemplo
``` 
{
  "nome": "ricardo",
  "cpf": 12345646853
}
```
exemplo: ![com sucesso](./public/create.png)

==> se voce tentar fazer uma conta só com o cpf ou só com o nome a api retorna : 

![sem sucesso](./public/sem-nome.png)
![sem sucesso](./public/sem-cpf.png)

==> se tentar cadastrar mais de uma conta por cpf a api retorna : 
![sem sucesso](./public/registrado.png)

## Deposito 

insira esse endereço no cliente que você está usando com a modalidade post.
`http://localhost:3000/deposito`
e coloque o comando nele assim como no exemplo com o id da conta que você criou anteriormente , valor do deposito e o cpf.
``` 
{	
	"id": "61bba79e1e4fd9cdabad3416",
  "valor": 2000,
  "cpf": 78945612305
}
```
![sem sucesso](./public/deposito-sucesso.png)

==> se o valor do deposito for negativo a api retorna a seguinte menssagem; 