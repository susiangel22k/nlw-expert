const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Um sistema operacional",
        "Uma linguagem de programação",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparação de valores",
        "Verificar o tipo de dado de uma variável",
        "Concatenar strings",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar números inteiros",
        "Uma estrutura de controle de fluxo",
        "Uma coleção de elementos indexados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos são operadores de comparação",
        "'==' compara apenas valores, enquanto '===' compara valores e tipos de dados",
        "'===' é uma versão antiga de '=='",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Um bloco de código reutilizável",
        "Uma declaração de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)",
        "loop (i = 0; i < 5; i++)",
        "iterate (i = 0; i < 5; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação concorrente",
        "Um modelo de objeto para representar documentos HTML",
        "Uma ferramenta de debug",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é usado para números, enquanto 'const' é usado para strings",
        "'let' permite a reatribuição de valores, enquanto 'const' não permite",
        "Não há diferença, ambos são sinônimos",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma callback em JavaScript?",
      respostas: [
        "Uma função que é passada como argumento para outra função",
        "Um tipo de dado para armazenar informações sensíveis",
        "Um comando para interromper a execução do código",
      ],
      correta: 0
    }
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
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta) 
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
  
  corretas.delete(item)
  if (estaCorreta) {
    corretas.add(item)
  }
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }