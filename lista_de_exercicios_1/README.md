# Guia de Execução das Resoluções do Exercícios

Este repositório contém um programa em JavaScript que permite ao usuário escolher e executar a solução de 15 questões diferentes de lógica de programação e algoritmos a partir do console interativo (terminal).

---

## Pré-requisitos

Antes de começar, verifique se você tem instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão utilizada: 22.15.0)
* [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

---

## Instalação

1. **Abra uma pasta com o Git Bash**:
   * Abra a pasta diretamente no terminal do Git Bash.

2. **Clone o repositório:**

   ```bash
   git clone https://github.com/JeanJerri/exercicios_JS.git
   ```

3. **Instale as dependências:**

   O programa utiliza o pacote [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) para leitura de entradas no console. Execute:
   ```bash
   cd exercicios_JS
   npm install
   ```

---

## Estrutura de Arquivos

```
exercicios_JS/
├── lista_de_exercicios_1/
│   └── lista_de_exercicios_1.js    # Arquivo principal com menu e funções (questao1() ... questao15())
│   └── README.md                   # Este guia de execução
├── lista_de_exercicios_2/
├── package.json                    # Definições de dependências e scripts
└── README.md               
```

* **lista_de_exercicios_1/lista_de_exercicios_1.js**: contém o loop principal que permite escolher de 1 a 15 ou sair com 0, e as 15 funções `questao1()` a `questao15()`.
* **package.json**: define dependências (por exemplo prompt-sync) e scripts npm, se houver.

---

## Executando no VSCode

1. **Abra o projeto** no VSCode:
   * Abra a pasta diretamente pelo menu do VSCode.

2. **Abra o terminal integrado**:
   * Vá em **View > Terminal** ou use o atalho **Ctrl + '**.

3. **Se direcione para a pasta deste código**:
   ```bash
   cd exercicios_JS/lista_de_exercicios_1
   ```

4. **Execute o programa**:
   ```bash
   node lista_de_exercicios_1.js
   ```

5. **Interaja com o menu**:
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

## Problemas comuns e soluções rápidas

* **Erro: `Cannot find module 'prompt-sync'`**

  * Execute `npm install` na raiz do repositório ou instale manualmente com:

    ```bash
    npm install prompt-sync
    ```
* **Node não encontrado**

  * Verifique se o Node.js está instalado e acessível no PATH: `node -v`.

---