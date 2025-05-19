# Guia de Execução das Resoluções do Exercícios

Este repositório contém um programa em JavaScript que permite ao usuário escolher e executar a solução de 15 questões diferentes de lógica de programação e algoritmos a partir do console interativo (terminal).

---

## Pré-requisitos

Antes de começar, verifique se você tem instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão utilizada: 22.15.0)
* [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

---

## Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/JeanJerri/exercicios_JS.git
   cd exercicios_JS
   ```

2. **Instale as dependências**
   O programa utiliza o pacote [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para leitura de entradas no console. Execute:
   ```bash
   npm install
   ```

---

## Estrutura de Arquivos

```
├── lista_de_exercicios_1.js    # Arquivo principal com o menu e funções das questões
├── package.json                # Definições de dependências e scripts
└── README.md                   # Este guia de execução
```

* **lista_de_exercicios_1.js**: contém o loop principal que permite escolher de 1 a 15 ou sair com 0, e as 15 funções `questao1()` a `questao15()`.
* **package.json**: aponta a dependência `prompt-sync`.

---

## Executando no VSCode

1. **Abra o projeto** no VSCode:
   * Abra a pasta diretamente pelo menu do VSCode.

2. **Abra o terminal integrado**:
   * Vá em **View > Terminal** ou use o atalho **Ctrl + \`**.

3. **Execute o programa**:
   ```bash
   node lista_de_exercicios_1.js
   ```

4. **Interaja com o menu**:
   * Digite o número da questão (de 1 a 15) para a execução da solução correspondente.
   * Ou digite `0` para encerrar o programa.

---

## Exemplo de Uso

```bash
$ node index.js

Informe o número da questão que você quer executar a solução
De 1 à 15 ou 0 para encerrar o programa: 1

Digite um número inteiro para verificar se ele é par ou ímpar: 7
É impar!

Informe o número da questão que você quer executar a solução
De 1 à 15 ou 0 para encerrar o programa: 0
Encerrando...
```

---