/********************
 * Objetivo : Arquivo responsável por calcular e validar médias escolares 
 * Autor : Victor Hugo Rocha da Silva
 * Data : 05/08/2025
 * Versão : 1.0
 *********************/

//Função para calcular a média de um aluno
// Essa função recebe 4 valores faz o calculo da média e devolve a média calculada
function calcularMedia(valor1, valor2, valor3, valor4) {
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    //Retornando somente um numero, com uma casa decimal 
    return Number(media).toFixed(1)

}


function validarStatus(valor) {
    let media = Number(valor)

    let statusAluno

    if (media < 5 && media >=0) {
        statusAluno = 'REPROVADO'
    } else if (media < 7 && media >= 5) {
        statusAluno = 'EXAME'
    } else if (media >= 7 && media <= 10) {
        statusAluno = 'APROVADO'
    }

    //se o status do aluno constar como indefinido retorna um false
    if(statusAluno == undefined) {
        return false
    //se o status estiver certo, mostrar o mesmo    
    } else {
        return statusAluno
    }
}

// let media = calcularMedia('9.0', '8.2', '1.4', '8.3')
// console.log(media)
// console.log(validarStatus(media))
//usando o console log como debugger

//Deixando privado ou publico para isto serve o module.exports
//Como somente quero calcularMedia, só deixo somente o module.exports
module.exports = {
    calcularMedia,
    validarStatus
}