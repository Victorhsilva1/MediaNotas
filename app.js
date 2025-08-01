/************************** 
 * Objetivo: Realizar o calculo médias escolares, trabalhando com entrada de dados, variáveis, e condicionais
 * Autor: Victor Hugo
 * Data: 01/08/25
 * Versão : 1.0
**************************/
//Import da biblioteca readline 
var readline = require('readline')


/* 
* Var - Quase não se utiliza mais em projetos 
*
*{Não pode usar let se nao estiver dentro de um bloco
* let não em escopo global 
*LET somente entre chaves (if, loop, function, etc.) }
*
*Const - Permite criar um espaço em memoria cujo o conteudo não sofre alteração durante o programa, podemos criar uma const em qualquer parte do código, 
*recomenda-se que a escrita de uma const seja em maiusculo
*

                  Formas de conversão de dados 

*String permite converter um objeto ou variavel em string
* Number() -> Permite converter um objeto ou variavel em numero ( Inteiro ou Float)
* paserFloat() converte uma string para Decimal
* parseInt() converte uma string pra numero inteiro
* Boolean() Permite converer um objeto valor booleano (true/false)
* Object () Permite converter uma variável em objeto (ARRAY, JSON, Classe)


                Operadores de comparação :
* == -> Validação de iguladade entre conteudos
* < -> Validação de menor valor
* > -> Validação de maior valor
* === -> Validação de igualdade em conteúdos e igualdade nos tipos de dados 
* >= -> Validação de maior valor ou iguladade
* <= -> Validação de menor valor ou igualdade
* != -> Validação de diferença entre conteúdos
* !== -> Validação de diferença entre conteúdos e igualdade nos tipos de dados (Sempre verificar a documentação da linguagem)
* !=! -> Validação de diferença entre conteudos e diferença entre tipos de dados
*
*
*                 Operadores logicos :
* E AND &&
* OU OR ||
* NAO NOT !



* toUpperCase Maiusculo 
* toLowerase Minisculo

* To fixed() -> Permite limitar a qtde de casas decimais
*/

//Criando um objeto para entradade e saida de dados via terminal (provisório)
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do aluno
//Função de call back                             Criando argumento do que será o call back, aqui será o nome
entradaDeDados.question('Digite o nome do aluno:', function (nome) {
    // Recebe o call back e converte para MAIUSCULO

    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota 1:', function (valor1) {
        let nota1 = valor1

        entradaDeDados.question('Digite a nota 2:', function (valor2) {
            let nota2 = valor2

            entradaDeDados.question('Digite a nota 3:', function(valor3) {
                let nota3 = valor3

                entradaDeDados.question('Digite a nota 4:', function(valor4) {

                    let nota4 = valor4



                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == '') {
                        console.log('ERRO: Existem campos que não foram preenchidos.')
                    } else if (isNaN(nota1) == true || isNaN(nota2) == true|| isNaN(nota3) == true || isNaN(nota4) == true){
                        console.log('ERRO: Não é possivel calcular com a entrada de letras.')
                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10) {
                        console.log('ERRO: Os valores informados precisam ser entre 0 até 10')
                    }else{
                        let media = (Number(nota1) + Number(nota2) +  Number(nota3) + Number(nota4))/4
                        let statusAluno 

                        if(media < 5) {
                            statusAluno = 'REPROVADO'
                        }else if(media < 7 && media >=5 ){
                            statusAluno = 'EXAME'
                        }else if(media >=7 && media<=10){
                            statusAluno = 'APROVADO'
                        }
                        console.log(`O aluno(a) ${nomeAluno} teve a média: ${media.toFixed(1)} e está: ${statusAluno}`)
                    }


                })
            })
        })
    })
})

