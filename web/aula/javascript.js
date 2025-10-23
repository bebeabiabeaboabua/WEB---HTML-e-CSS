/* por javascript

    <script src="javascript.js"></script>

    */



let titulo = document.getElementById('titulo')
console.log(titulo)
titulo.innerText = 'csd'

let parafrago = document.getElementsByClassName('PARAFRAGO')
console.log(parafrago)
parafrago[0].innerText = 'bilubilbuliblbulbibu'

let frozi = document.querySelector('#titulo')

let panagrafdos = document.querySelectorAll('p')

/*
let num1 = Number(prompt('digite o primeiro número'))
let operacao = prompt('escolha a operacao: soma, sub, mult, div')
let num2 = Number(prompt('digite o segundo número'))
let resultado = 0

if (operacao === 'soma') {
    resultado = num1 + num2;
    alert('Resultado da soma: ' + resultado);
} else if (operacao === 'sub') {
    resultado = num1 - num2;
    alert('Resultado da subtração: ' + resultado);
} else if (operacao === 'mult') {
    resultado = num1 * num2;
    alert('Resultado da multiplicação: ' + resultado);
} else if (operacao === 'div' && num2 != 0) {
    resultado = num1 / num2;
    alert('Resultado da divisão: ' + resultado);
} else {
    alert('Operação inválida!');
}

*/

/*

// variaveis

let nome = "marcep" //string
let idade = 45 //int number
let peso = 23.89 //real, float, double  number
let opcao = true //boolean
let array = [10,90,123,23, 'a', "oioioioi", false] //linguagens de alto nivem permitem essa lambança

//alteração dinamica
let objeto = document.querySelector('h1')
console.log(objeto)
objeto.innerText = 'alterei o codifo'

function soma(n1, n2){ //parametro, recebe dois valores
    let numero1 = n1
    let numero2 = n2

    let soma = numero1 + numero2

    return soma
}

console.log('soma', soma())
objeto.innerText = soma(10, 90)

let returnAlert = alert('quaqua')
console.log('alerta: ', returnAlert) //nao retorna nada
let digite = prompt('digiet')
console.log('digite: ', digite) //retorna o q a pessoa digitou
let returnConfirm = confirm('confirma?')
console.log('confimou?', returnConfirm) // retor true or false

//number(n) converte valor pra numero. ex: pessoa digitou um numero mas ele é texto então tem que converter
//string(n) converte vaslor pta texto


//array

notas = new Array(3)
notas[0] = 4
notas[1] = 5
notas[2] = 6

console.log(notas)

if (notas[0] === 4){
    debugger;
}

nomes = ['oi', 'tchau', 'bababa']
console.log(nomes)


//objeto

let sapo{
    cor: "verde"
    especie: "bullfrog"
    regiao: "africa"
}

sapo.idade = 8; // adiciona automatico

*/