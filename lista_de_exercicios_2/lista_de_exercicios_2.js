const prompt = require('prompt-sync')()
let opcao

do {
    console.log("\nInforme o número da questão que você quer executar a solução")
    opcao = Number(prompt("De 1 à 9 ou 0 para encerrar o programa: "))
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
        case 0:
            console.log('Encerrando...')
            break
        default:
            console.log('Opção inválida.')
    }
} while (opcao!=0)


//Seção 1: Estruturas de Controle Avançadas

function questao1() {
    // 1. Validação de Datas
    // Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
    // formarem uma data real (meses de 28–31 dias, ano bissexto para
    // fevereiro) e false caso contrário.

    function ehDataValida(dia, mes, ano) {

        if (dia<1||mes<1) {
            return false
        }

        if (mes == 2) {
            if (ano%4 == 0) {
                if(dia<=29) {
                    return true
                } else {
                    return false
                }
            } else {
                if(dia<=28) {
                    return true
                } else {
                    return false
                }
            }
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            if(dia<=30) {
                return true
            } else {
                return false
            }
        } else if (mes > 12) {
            return false
        } else {
            if(dia<=31) {
                return true
            } else {
                return false
            }
        }
        
    }

    let dia = Number(prompt("Informe o dia: "))
    let mes = Number(prompt("Informe o mês: "))
    let ano = Number(prompt("Informe o ano: "))

    console.log(ehDataValida(dia, mes, ano))
}

function questao2() {
    // 2. Jogo de Adivinhação
    // Escreva um script que gere um número aleatório de 1 a 100 e peça ao
    // usuário, para adivinhar. Use while para repetir até acertar, contando
    // tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

    let numeroAleatorio, chute=0, tentativas=0

    numeroAleatorio = Math.floor(Math.random() * 100) + 1
    console.log(numeroAleatorio)

    while (chute!=numeroAleatorio) {
        chute = prompt("Chute um valor:")
        tentativas++

        if(chute==numeroAleatorio) {
            console.log("Você acertou com o total de", tentativas, "tentativa(s)!")
        } else {
            if (chute<numeroAleatorio){
                console.log("mais alto")
            } else {
                console.log("mais baixo")
            }
        }
    }
}

function questao3() {
    // 3. Palavras Únicas
    // Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
    // todas as palavras únicas e exibi-las em um array.

    let stringAleatoria = "olá olá mundo mundo"
    let palavras = stringAleatoria.split(" ")
    let unicas = []

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i]
        if (!unicas.includes(palavra)) {
            unicas.push(palavra)
        }
    }

    console.log("Palavras únicas:", unicas)

}


// Seção 2: Funções e Recursão

function questao4() {
    // 4. Fatorial Recursivo
    // Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
    // um Error, e n === 0 retornando 1.

    function fatorial(n) {
        if (n < 0) {
            throw new Error("Número inválido!")
        }
        if (n === 0) {
            return 1
        }
        return n * fatorial(n - 1)
    }

    let n = Number(prompt("Digite um número para calcular o fatorial: "))
    try {
        console.log("Fatorial:", fatorial(n))
    } catch (erro) {
        console.log(erro.message)
        questao4()
    }
}

function questao5() {
    // 5. Debounce
    // Crie function debounce(fn, delay) que receba uma função fn e um delay
    // em ms, retornando uma nova função que só executa fn se não for
    // chamada novamente dentro do intervalo.

    function debounce(fn, delay) {
        let timeout
        return function(...args) {
            clearTimeout(timeout)
            timeout = setTimeout(() => fn.apply(this, args), delay)
        }
    }

    const digitar = () => console.log("Função executada após o delay")
    const debounced = debounce(digitar, 1000)

    console.log("Digite algo (simulado):")
    debounced()
    debounced()
    debounced()
}

function questao6() {
    // 6. Memoization
    // Implemente function memoize(fn) que armazene em cache chamadas
    // anteriores de fn (por argumentos), retornando resultados instantâneos em
    // repetidas invocações.

    function memoize(fn) {
        const cache = {}
        return function(...args) {
            const chave = JSON.stringify(args)
            if (cache[chave]) {
                console.log("Resultado do cache")
                return cache[chave]
            }
            const resultado = fn(...args)
            cache[chave] = resultado
            return resultado
        }
    }

    const fatorial = memoize(function(n) {
        if (n === 0) return 1
        return n * fatorial(n - 1)
    })

    let valor = Number(prompt("Digite um número: "))
    console.log("Fatorial memoizado:", fatorial(valor))
}

// Seção 3: Arrays e Objetos Complexos

function questao7() {
    // 7. Mapeamento e Ordenação
    // Dado um array produtos = [{ nome, preco }, ...], crie uma função que
    // retorne um novo array apenas com os nomes, ordenados por preço
    // crescente, usando map, sort.

    let produtos = [
        { nome: "Banana", preco: 2.5 },
        { nome: "Maçã", preco: 3.2 },
        { nome: "Abacate", preco: 4.0 }
    ]

    let nomesOrdenados = produtos
        .sort((a, b) => a.preco - b.preco)
        .map(prod => prod.nome)

    console.log("Nomes ordenados por preço:", nomesOrdenados)
}

function questao8() {
    // 8. Agrupamento por Propriedade
    // Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
    // cada chave é um cliente e o valor é a soma de todos os seus total.

    let vendas = [
        { cliente: "Ana", total: 100 },
        { cliente: "João", total: 80 },
        { cliente: "Ana", total: 50 }
    ]

    let agrupado = vendas.reduce((acc, venda) => {
        if (!acc[venda.cliente]) {
            acc[venda.cliente] = 0
        }
        acc[venda.cliente] += venda.total
        return acc
    }, {})

    console.log("Totais por cliente:", agrupado)
}

function questao9() {
    // 9. Conversão Entre Formatos
    // Escreva duas funções:
    // ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
    // valor], ... ] e retorna o objeto equivalente.
    // ○ objetoParaPares(obj) faz o inverso, retornando um array de
    // pares.

    function paresParaObjeto(pares) {
        let obj = {}
        for (let [chave, valor] of pares) {
            obj[chave] = valor
        }
        return obj
    }

    function objetoParaPares(obj) {
        let pares = []
        for (let chave in obj) {
            pares.push([chave, obj[chave]])
        }
        return pares
    }

    let pares = [["nome", "Jean"], ["idade", 21]]
    let obj = paresParaObjeto(pares)
    console.log("Objeto:", obj)

    let deVolta = objetoParaPares(obj)
    console.log("Pares novamente:", deVolta)
}
