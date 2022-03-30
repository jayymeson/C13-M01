console.clear(); 
const prompt = require("prompt-sync")();

let personagem = {
    nome: "Alfredo",
    idade: 20,
    overall: 60,
    respeito: 60,
    
}   

let tempo = {
    dia: 29,
    mes: 03,
    ano: 2022,
    horario: "00:00",

    controleTempo: function(){
        if (this.dia >= 24) {
            this.hora -= 24
        }
    }
}

