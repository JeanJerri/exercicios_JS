const prompt = require('prompt-sync')()
let opcao

do {
    console.log("\nInforme o número da questão que você quer executar a solução")
    opcao = Number(prompt("De 1 à 15 ou 0 para encerrar o programa: "))
    console.log()

    switch (opcao) {
        case 1:
            questao1()
            break
        case 2:
            questao2()
            break
        case 3:
            questao3()
            break
        case 4:
            questao4()
            break
        case 5:
            questao5()
            break
        case 6:
            questao6()
            break
        case 7:
            questao7()
            break
        case 8:
            questao8()
            break
        case 9:
            questao9()
            break
        case 10:
            questao10()
            break
        case 11:
            questao11()
            break
        case 12:
            questao12()
            break
        case 13:
            questao13()
            break
        case 14:
            questao14()
            break
        case 15:
            questao15()
            break
        case 0:
            console.log('Encerrando...')
            break
        default:
            console.log('Opção inválida.')
    }
} while (opcao!=0)

function questao1() {
    // 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
    // utilizando uma estrutura de controle if.

    let numero = Number(prompt("Digite um número inteiro para verificar se ele é par ou ímpar: "))

    if (numero<0) {
        numero = Math.abs(numero) // Transforma em positivo
    }

    if (!Number.isInteger(numero)) {
        console.log("Não é um número inteiro!, informe um número válido!")
        return questao1()
    }

    if (numero%2 == 0) {
        console.log("É par!")
    } else {
        console.log("É impar!")
    }
}

function questao2() {
    // 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
    // adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
    // controle if-else.

    let idade = prompt("Informe a idade de alguma pessoa: ")

    if (idade>=0 && idade<12) {
        console.log('Criança!')
    } else if (idade>=12 && idade<18) {
        console.log('Adolescente!')
    } else if (idade>=18 && idade<65) {
        console.log('Adulto!')
    } else if (idade>=65) {
        console.log('Idoso!')
    } else {
        console.log('Idade inválida!')
        questao2()
        return
    }
}

function questao3() {
    // 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
    // "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

    let nota = prompt('Informe uma nota(de 0 à 10): ')

    if (nota>=7 && nota<=10) {
        console.log('Aprovado!')
    } else if (nota>=5 && nota<7) {
        console.log('Recuperação!')
    } else if (nota>=0 && nota<5) {
        console.log('Reprovado!')
    } else {
        console.log('Nota inválida!')
        questao3()
        return
    }
}

function questao4() {
    // 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
    // Utilize switch-case para implementar a lógica de cada opção selecionada.

    console.log("Escolha uma das 3 opções seguintes: ")
    console.log("1-Opção 1")
    console.log("2-Opção 2")
    console.log("3-Opção 3")
    let escolha = Number(prompt('Opção: '))

    switch (escolha) {
        case 1:
            console.log('Opção 1 escolhida!')
            break
        case 2:
            console.log('Opção 2 escolhida!')
            break
        case 3:
            console.log('Opção 3 escolhida!')
            break
        default:
            console.log('Opção inválida!')
            questao4()
            return
    }
}

function questao5() {
    // 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
    // determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
    // utilizando if-else.

    let peso = Number(prompt('Informe seu peso(em kg): '))
    if(isNaN(peso) || peso<=0) {
        console.log('Peso inválido!')
        questao5()
        return
    }
    let altura = Number(prompt('Informe sua altura(em metros): '))
    if(isNaN(altura) || altura<=0) {
        console.log('Altura inválida!')
        questao5()
        return
    }

    let imc = peso / altura**2
    console.log('IMC = ' + imc)

    if (imc<18.5) {
        console.log('Categoria de peso = baixo peso')
    } else if (imc>=18.5 & imc<25) {
        console.log('Categoria de peso = peso normal')
    } else if (imc>=25 & imc<30) {
        console.log('Categoria de peso = sobrepeso')
    } else {
        console.log('Categoria de peso = obesidade')
    }
}

function questao6() {
    // 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    // formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    // Isósceles, escaleno ou eqüilátero.
    // Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    // Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    // Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    // Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

    let a = Number(prompt('Valor para o lado A: '))
    let b = Number(prompt('Valor para o lado B: '))
    let c = Number(prompt('Valor para o lado C: '))

    if((a<=0 || b<=0 || c<=0) || isNaN(a+b+c)) {
        console.log('O valor dos lados não podem ser valores não númericos, negativos ou igual 0.')
        questao6()
        return
    }

    if (a<(b+c) && b<(a+c) && c<(a+b)) {
        console.log('Esses valores formam um triângulo!')
        if (a==b || a==c || b==c) {
            if (a!=b || a!=c || b!=c) {
            console.log('Tipo de triângulo: isósceles')
            } else {
                console.log('Tipo de triângulo: equilátero')
            }
        } else {
            console.log('Tipo de triângulo: escaleno')
        }
    } else {
        console.log('Esses valores não formam um triângulo!')
    }
}

function questao7() {
    // 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    // forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    // compradas, calcule e escreva o valor total da compra.

    let qtdMacas = Number(prompt('Informe a quantidade de maçãs compradas: '))
    if((qtdMacas<=0) || isNaN(qtdMacas)) {
        console.log('Quantidade inválida!')
        questao7()
        return
    }

    let precoUn, total

    if (qtdMacas <= 12) {
        precoUn = 0.30
    } else {
        precoUn = 0.25
    }

    total = precoUn*qtdMacas
    console.log('Valor total da compra: R$', total.toLocaleString('pt-BR'))
}

function questao8() {
    // 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
    // e escreve-los em ordem crescente.

    let valor1 = Number(prompt('Digite um valor: '))
    let valor2 = Number(prompt('Digite um valor diferente do anterior: '))
    if((valor1==valor2) || isNaN(valor1+valor2)) {
        console.log('Valores inválidos!')
        questao8()
        return
    }

    if (valor1>valor2) {
        console.log(valor2)
        console.log(valor1)
    } else {
        console.log(valor1)
        console.log(valor2)
    }
}

function questao9() {
    // 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
    // utilizando um loop for.

    function bloqueio(ms) {
        const fim = Date.now() + ms;
        while (Date.now() < fim) {
            // nada aqui
        }
    }

    console.log('Contagem regressiva:')
    for (let i=10; i>=1; i--) {
        bloqueio(1000);
        console.log(i)
    }
}

function questao10() {
    // 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

    let numero = Number(prompt('Digite um número inteiro: '))
    if(!(Number.isInteger(numero))) {
        console.log('Esse valor não é inteiro!')
        questao10()
        return
    }

    for (let i=1; i<=10; i++) {
        console.log(numero)
    }
}

function questao11() {
    // 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
    // utilizando um loop for.

    let numero, total = 0

    for (let i=1; i<=5; i++){
        numero = Number(prompt('Digite o '+i+'º número: '))
        if(isNaN(numero)){
            console.log('Não é um número!')
            i-=1
        } else {
            total += numero
        }
    }

    console.log('Soma total: ' + total)
}

function questao12() {
    // 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário 
    // (de 1 a 10) utilizando um loop for.

    let numero = Number(prompt('Digite um número para que seja impressa sua tabuada: '))
    if(isNaN(numero)){
        console.log('Não é um número!')
        questao12()
        return
    }

    for(let i=1; i<=10; i++) {
        console.log(numero + 'x' + i + ' = ' + numero*i)
    }
}

function questao13() {
    // 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    // a média aritmética desses números.

    function eDecimal(n) {
        return typeof n === 'number' && Number.isFinite(n) && !Number.isInteger(n)
    }

    let decimal, total=0, media, qtd=0

    do {
        decimal = Number(prompt("Digite um número decimal (para encerrar digite 0): "))
        if(!(eDecimal(decimal)) && (decimal!=0)){
            console.log('Esse valor não é decimal, digite outro.')
        } else {
            total += decimal
            if(decimal!=0){
                qtd++  
            }
        }
    } while (decimal!=0)

    media=total/qtd
    console.log('Média dos números informados = ' + media)
}

function questao14() {
    // 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    // utilizando um loop for ou while.

    let numero = Number(prompt('Informe um número para calcular seu fatorial: '))
    if(!(Number.isInteger(numero)) || (numero<0)) {
        console.log('Esse valor não é inteiro ou não é positivo!')
        questao14()
        return
    }

    let fatorial=1, contador=numero

    while(contador!=0) {
        fatorial*=contador
        contador--
    }

    console.log('Fatorial de',numero,'=', fatorial)
}

function questao15() {
    // 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    // Fibonacci utilizando um loop for.

    let atual = 1, anterior = 0, temp
    console.log('10 primeiros números da sequência de Fibonacci:')

    for(let i=1; i<=10; i++){
        console.log(anterior)
        temp = atual
        atual+=anterior
        anterior=temp
    }
}