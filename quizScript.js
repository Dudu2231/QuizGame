// inicializando algumas constantes
const options = document.querySelectorAll('.options-container')
const secondaryContainer = document.createElement("div")
const tittleQuiz = document.createElement('h1')
const enunciado = document.createElement('p')
const alternative = document.createElement('div')
let acertos = 0
let erros = 0
let currentQuestionIndex = 0

//definindo um conteudo para o titulo:
tittleQuiz.textContent= "Quiz"

//definindo classes para os elementos que ainda nao foram adicionados ao document
secondaryContainer.classList.add('secondary-container')


//setando uma array de objetos com perguntas a serem utilizadas; Mais tarde seria legal criar uma função que retorna as perguntas, opções e respostas para cada tipo de conteúdo, por exempo "Function PortugueseQuestions()..."
const general= [
    {
        question: "Qual o nome do primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Pedro Alvares Cabral", "Dom Pedro I", "Marechal Deodoro da Fonseca"],
        answer: "Marechal Deodoro da Fonseca"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Rembrandt"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual o valor da seguinte divisão? 14/3.5",
        options: ["1.75", "2.72", "3.25", "4"],
        answer: "4"
    },
    {
        question: "Qual é o símbolo químico da água?",
        options: ["O2", "H2", "H2O", "CO2"],
        answer: "H2O"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["William Shakespeare", "Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges"],
        answer: "Miguel de Cervantes"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Roma", "Madri", "Paris"],
        answer: "Paris"
    },
    {
        question: "Em que ano ocorreu a Proclamação da República no Brasil?",
        options: ["1889", "1822", "1914", "1500"],
        answer: "1889"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        answer: "Pacífico"
    },
    {
        question: "Quem é conhecido como o 'Pai da Computação'?",
        options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
        answer: "Charles Babbage"
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        options: ["Dólar", "Euro", "Yuan", "Iene"],
        answer: "Iene"
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["K2", "Kilimanjaro", "Everest", "Aconcágua"],
        answer: "Everest"
    },
    {
        question: "Quantos continentes existem no mundo?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Qual é o animal terrestre mais rápido do mundo?",
        options: ["Cavalo", "Guepardo", "Leopardo", "Canguru"],
        answer: "Guepardo"
    },
    {
        question: "Qual é o menor país do mundo?",
        options: ["Mônaco", "Nauru", "Malta", "Vaticano"],
        answer: "Vaticano"
    },
    {
        question: "Quem inventou a lâmpada elétrica?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
        answer: "Thomas Edison"
    },
    {
        question: "Qual é o elemento químico mais abundante no universo?",
        options: ["Oxigênio", "Carbono", "Hidrogênio", "Hélio"],
        answer: "Hidrogênio"
    },
    {
        question: "Qual foi o primeiro satélite artificial lançado ao espaço?",
        options: ["Voyager 1", "Sputnik 1", "Apollo 11", "Hubble"],
        answer: "Sputnik 1"
    },
    {
        question: "Quem é o autor da série de livros 'Harry Potter'?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "J.K. Rowling"],
        answer: "J.K. Rowling"
    }

]

//incio do cod

options.forEach((option)=>{
    option.addEventListener('click', generateChart)
})

function generateChart(){
    const [question, options] = getQuestionAndAlternatives()
    enunciado.textContent = question
    alternative.innerHTML = ''

    options.forEach((option) => {
        const alternativeOption = document.createElement('div')
        alternativeOption.textContent = option
        alternativeOption.classList.add('answer')
        alternativeOption.addEventListener('click', (e) => {
            const userAnswer = e.target.textContent
            const correctAnswer = general[currentQuestionIndex].answer
            if (userAnswer === correctAnswer) {
                alert('Parabéns, você acertou!')
                acertos++
            } else {
                alert('Erro, a resposta certa é ' + correctAnswer)
                erros++
            }
            currentQuestionIndex++

            if (currentQuestionIndex === general.length) {
                mostrarScore()
            } else {
                generateChart() // Ir para a próxima pergunta
            }
        })
        alternative.appendChild(alternativeOption)
    })
    document.body.appendChild(secondaryContainer)
    secondaryContainer.appendChild(tittleQuiz)
    secondaryContainer.appendChild(enunciado)
    secondaryContainer.appendChild(alternative)
}

function mostrarScore(){
    enunciado.textContent = "Você chegou ao fim do Quiz"
    alternative.innerHTML = `Erros: ${erros} <br> Acertos: ${acertos}`
}

function getQuestionAndAlternatives(){
    const question = general[currentQuestionIndex].question
    const options = general[currentQuestionIndex].options
    return [question, options]
}