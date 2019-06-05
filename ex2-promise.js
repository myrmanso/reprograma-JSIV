/* Crio uma função que verifica se é par[true] ou impar[false] */
const parOuImpar = num => num % 2 === 0 ? true : false;

//crio uma variavel recebendo uma função com um parâmetro 'numero' que tem uma Promise
const novaPromessa = (numero) => {
  return new Promise((resolve, reject) => {
    //crio uma variavel que recebe a função parOuImpar 
    const numPar = parOuImpar(numero) 
    //identifico se 'numero' é um número msm e se o parametro esta vazio
    if(!isNaN(numPar) || numero == null) {
      reject("Deu ruim")
    }
    else{
        //verifico se 'numPar' é par[true] : impar[false]
      par === true ? setTimeout(() => {resolve(numero + " é par")}, 2000) : setTimeout(() => {resolve(numero + " é impar")}, 1000)
    }
  })  
}


function retornoPromessa(num){
 novaPromessa(num)
 .then(resultado => console.log({resultado}))
 .catch(reject => console.log({reject}))
};

