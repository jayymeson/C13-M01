const prompt = require(`prompt-sync`)();
console.clear();
console.log();

console.log(`A tragetória de Alfredo: O almirante a jogador profissional.
Alfredo é um garoto de 15 anos que deseja ser um jogador profissional. Seu grande sonho é chegar à selação brasileira 
e, para isso, ele precisa passar por algumas fases na sua carreira precoce. 
Diante disso, espera-se que ele supere algumas dificuldades onde precisará abdicar de certas coisas comuns a idade. `) 

console.log();

console.log(`Alfredo, responda 1-Sim e 0-Nao nas questãoes a seguir:  `);

console.log();

let perg1 = 100;  
while (perg1 != 0 && perg1 != 1) { 
    perg1 = +prompt(`Alfredo, você sempre abdica de dormir tarde e acordar tarde? `);    
} 

console.log();

let perg2 = 100;
while (perg2 != 0 && perg2 != 1) {
    perg2 = +prompt(`Alfredo, sua alimentação é de fato regrada para um atleta? `);
}

console.log();

let perg3 = 100;
while (perg3 != 0 && perg3 != 1) {
    perg3 = +prompt(`Alfredo, você se dedica ao máximo no treino? `);
}

console.log();

let perg4 = 100;
while (perg4 != 0 && perg4 != 1) {
    perg4 = +prompt(`Alfredo, ultimamente você tem conseguido ser decisivo em campo? `);
}

console.log();

let perg5 = 100;
while (perg5 != 0 && perg5 != 1) {
    perg5 = +prompt(`Alfredo, você vai fazer tudo que for possível para se tornar um profissional? `);
}

console.log();


let soma = perg1 + perg2 + perg3 + perg4 + perg5

if (soma == 0) {
    console.log(`Alfredo, infelizmente você não será um jogador de futebol profissional. `);
} else if (soma <= 1 || soma == 2){
    console.log(`Você falhou, Alfredo, talvez você consiga ser um jogador de várzea respeitado. `);
} else if (soma == 3) {
    console.log(`Você chegou perto de conseguir, porém ainda não é o suficiente. Precisa de mais.  `);
} else if (soma == 4) {
    console.log(`Alfredo, você será um jogador profissional. Mas não será um top mundial. `);
} else if (soma == 5) {
    console.log(`Alfredo, você vai conseguir ser um jogador de futebol profissional e conquistar seu maior sonho; Seleção Brasileira. Parabéns!` );
} else {
    console.log(``)
}
    console.log();