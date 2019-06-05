const retornaPromise = () =>{
    return new Promise ((resolve, reject) =>{ //criando uma nova classe por instaciamento. Promisse() é uma classe nativa do js
        //resolve: é o parametro que faz a função 'andar'. Pode ser qlqr palavra.
        //rejec: é o que vai fazer cais no 'erro'
        setTimeout(()=>{
            resolve("Hello World");
        }, 2000);
    }); 
}

//primeiro eu prometo algo para depois cobrar

//COBRANDO A PROMISE
function job(){
    retornaPromise()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
}

const maiorQueCinco = (numero) =>{
    return new Promise ((resolve, reject) => {
        numero > 5 ? resolve(numero + ' é maior que 5') : reject(numero + ' é menor que cinco')
    });
}

function maior(numero){
    maiorQueCinco(numero)
    .then(resolve => console.log({resolve}))
    .catch(reject => console.log({reject}))
}