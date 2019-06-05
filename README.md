# Exercícios: 

## 1º exercício

A promessa deve resolver-se 2 segundos após a chamada para a job() e deve fornecer Hello World nos dados

```js
function job(data) {
    return something;
}

```



## 2º exercício

* Sua função deve sempre retornar uma promise

* Se data não for um número, devolva uma promessa rejeitada instantaneamente e forneça a mensagem "deu ruim" (em uma string)

* Se data for um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os dados "ímpar" (em uma string)

* Se data for um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os dados "par" (em uma string)

* Dica: quando você codifica uma função que retorna uma promessa, certifique-se de sempre retornar uma promessa. Mesmo se você quiser lidar com um erro, basta retornar uma promessa e rejeitá-la.

* Dica: use isNaN(data) para verificar se os dados não são um número.



```js
function job(data) {
    return something;
}

```