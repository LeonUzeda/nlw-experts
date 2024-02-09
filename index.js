const perguntas = [
    {
      pergunta: "Qual é a função do operador '=== ' em JavaScript?",
      respostas: [
        "Compara valores sem levar em consideração o tipo de dado",
        "Compara valores e tipos de dados, garantindo igualdade estrita",
        "Realiza uma atribuição de valor"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar números inteiros",
        "Um modelo de programação para interagir com elementos HTML",
        "Uma função para declarar variáveis"
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar = 10;",
        "const myVar = 'Hello';"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Realizar operações matemáticas",
        "Associar um evento a um manipulador de eventos",
        "Criar elementos HTML"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma closure em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Uma função que não recebe argumentos",
        "Uma função que tem acesso ao escopo de outra função"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados para representar a ausência de valor",
        "null é atribuído explicitamente, enquanto undefined é o valor padrão de uma variável não inicializada",
        "undefined é usado para valores nulos em expressões condicionais"
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de dados para intercâmbio de informações",
        "Uma biblioteca para manipulação de strings"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, ambos são usados para declarar variáveis constantes",
        "let pode ser reatribuído, enquanto const não pode",
        "const só pode ser usado em loops, enquanto let é mais flexível"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o evento 'DOMContentLoaded'?",
      respostas: [
        "Um evento relacionado à manipulação de formulários",
        "Um evento acionado quando a página HTML é carregada",
        "Um evento que ocorre quando um elemento é clicado"
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle de fluxo que permite executar diferentes blocos de código dependendo de uma condição?",
      respostas: [
        "Switch",
        "If-Else",
        "Loop"
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // colaca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  