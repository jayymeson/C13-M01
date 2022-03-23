const prompt = require('prompt-sync')();
console.clear

do {
    const personagem = {
        nome: 'Alfredo',
        idade: 20,
        stamina: 100,
        time: 'Flamengo',
        
        menosStamina: function (){
            this.stamina--
        },
        maisStamina: function (){
            this.stamina++
        },
        igualStamina: function (){
            this.stamina
        },

    };
// Introdução ao jogo! 

console.log(`Olá, bem vindo ao Modo Carreira de Alfredo! Você terá caminhos na qual poderá \n chegar ao time titular ou reserva.`);
console.log("===========")
console.log(`Terá alguns caminhos a percorrer! Alfredo conta contigo para ajudá-lo a chegar lá! `)
console.log("===========")
console.log(`Alfredo, começará com nível de stamina em 100 e perderá ou recuperará mediante suas escolhas. `)



// Primeiro desafio.

console.log(`Escolha 1: Balada ou não? Alfredo amanhã você tem um jogo muito importante, mas você é jovem e tem\n uma balada legal pra ir... Decida!  `);
desafio1 : do {
    let escolha1 = prompt(`Alfredo, a festa está cheio de gatas, em contra partida terá um treino pra decidir\n quem vai ser o titular no ataque. O que você prefere? `).toLocaleLowerCase
    if (escolha1 == balada) {
        console.log(`Alfredo, você infelizmente perdeu stamina! `)
        personagem.menosStamina();
    } else if (escolha1 == nao);
        console.log(`Essa foi sua melhor escolha pensando na sua titularidade! `)
        personagem.igualStamina();
} while (true)












    const restart = prompt(`Você quer jogar novamente com Alfredo? ` )
} while (restart == sim);































































































// Personagem
// let nome = "Alfredo"
// // Horário em que o jogo irá se passar! 
// let horarios = ["22h", "6h", "7:30h", "8h"];
// // Dias em que vai acontecer o jogo! 
// let dias = [25, 26];
// // Mês
// let mes = "março"
// // Energia do jogador
// let stamina = 100
// // Periodo
// let periodo = ["noite", "manhã"];



// function balada(n) {
//     let saida19 = prompt(`${n} vai para a balada às 19h? `); 
//     return saida19

    
// }

// for (i = 0; i < 18; i++){
//     // Atitude 
//     if (balada(nome) === "sim".toLocaleLowerCase) {
//         stamina -= 10
//         console.log(`Agora você está com: ${stamina}`)

//     } else if (balada(nome) === "nao".toLocaleLowerCase) {
//         stamina == 100
//         console.log(`OK, ${nome} você permanece com ${stamina}`)
//     }

//     // Regeneração


// }




