const prompt = require(`prompt-sync`)();

let nome = prompt(`Olá, seja bem-vindo! Qual seu nome? `)

let notaA = parseFloat(prompt(`${nome} qual sua primeira nota? `))
let notaB = parseFloat(prompt(`${nome}, mais uma vez! Agora digite a sua segunda nota: `))

let media = (notaA * 4 + notaB * 6) / 10
console.log(`${nome}, sua média foi: ${media}`)

