const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a prática de atividades físicas é importante para uma vida saudável?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "a prática de atividades é extremamente importante para a saúde do corpo humano"
            },
            {
                texto: "Não",
                afirmacao: "O que poderia suprir parcialmente a prática de atividades físicas seria uma boa dieta e uma boa qualidade de sono"
            }
        ]
    },
    {
        enunciado: "As atividades físicas conciliadas a uma boa dieta e uma boa qualidade de sono são a fórmula para um corpo saudável, atualmente, você está contente com a sua forma física",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Òtimo! isso quer dizer que você provavelmente exercita o seu corpo, se alimenta e dorme corretamennte, ou é genéticamente sortudo!"
            },
            {
                texto: "Não",
                afirmacao: "Pode ser que esteja na hora de começar a incluir a prática de atividades físicas, uma boa dieta e um bom sono na sua rotina"
            }
        ]
    },
    {
        enunciado: "De que forma você acha ideal encaixar essas práticas no seu dia-a-dia?",
        alternativas: [
            {
                texto: " Consultando um profissional na área para te auxiliar",
                afirmacao: "È com certeza a melhor opção, nada melhor do que um profissional formado para auxiliar no seu caminho para o corpo dos seus sonhos"
            },
            {
                texto: "De fornma independente, com a ajuda de pesquisas na internet",
                afirmacao: "Òtimo! a internet hoje é uma fonte de informações infinitas, só cuidado com as fake news, com pesquisas confiáveis de boas fontes você com certeza chegará na forma física que tanto almeja, boa sorte! "
            }
        ]
    }
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
