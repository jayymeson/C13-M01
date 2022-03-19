// const prompt = require('prompt-sync')();

// let nome = prompt(`Olá, vamos jogar! Qual é seu nome? `)
// let rodadas = +prompt(`Quantas rodadadas você quer jogar, ${nome}? `)
// let i = 0

// while (i < rodadas) {
//     i++
//     let opcoes = ["", "Papel", "Tesoura", "Pedra"]
//     var usuario;
//     let escolhaComputador = (Math.floor(Math.random()*3));
//     let pontosUsuario = 0
//     let pontosPC;
//     let empate; 
    
//     console.log(escolhaComputador)

//     usuario = +prompt(`${nome}, vamos começar! Escolha uma opção de jogada sabendo que; 1 - Papel, 2 - Tesoura, 3 - Pedra: ` )
//     console.log(`Você escolheu: ${usuario}`)
//         if (usuario == opcoes[1] && escolhaComputador == opcoes[3] || usuario == opcoes[3] && escolhaComputador == opcoes[2] || usuario == opcoes[2] && escolhaComputador == opcoes[1]) {
//         console.log(`${nome}, você ganhou`)
//         pontosUsuario++
//     }   else if (usuario == opcoes[3] && escolhaComputador == opcoes[1] || usuario == opcoes[2] && escolhaComputador == opcoes[3] || usuario == opcoes[1] && escolhaComputador == opcoes[2]) {
//         console.log(`${nome}, quen-quen-quennnnnnn! Você perdeu!`)
//         pontosPC++
//     }   else if (usuario == opcoes[1] && escolhaComputador == opcoes[1] || usuario == opcoes[2] && escolhaComputador == opcoes[2] || usuario == opcoes[3] && escolhaComputador == opcoes[3]) {
//         console.log(`Empatou! `)
//         empate++
//     }

// } 

// console.log(`Pontos do jogador: ${pontosUsuario}`)
// console.log(`Pontos do computador: ${pontosPC}`)
// console.log(`Empate: ${empate}`)