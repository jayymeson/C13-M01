// Estrutura de repetição

// while
// console.clear();
// let numero = 0;

// while (numero < 10) { 
//     numero++;
//     console.log(numero);    
// }


// 1 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
// mostrando uma mensagem de erro e voltando a pedir as informações.
// const prompt = require(`prompt-sync`)();
// const prompt = require(`prompt-sync`)();

// let usuario;
// let senha;

// while (senha === usuario) {
//     usuario = prompt(`Digite seu nome: `)
//     senha = prompt(`${usuario}, digite a senha: `);

//     if (senha == usuario) {
//         console.log(`A senha digitada é muito fraca.`);
//     }
// }

// let usuario;
// let senha;

// while (true) {
//   usuario = prompt(`Digite seu nome de usuário: `);
//   senha = prompt(`Digite sua senha: `);
//   if (usuario === senha) {
//     console.log(`Usuário e senha não podem ser iguais`);
//   }
//   if (usuario !== senha) {
//     break;
//   }
// }

// do {
//     var username = prompt(`Type your username: `);
  
//     var password = prompt(`Type your password: `);
  
//     if (username.trim() == password.trim()) {
//       console.log(`Username and password cannot be the same.`);
//     }
//   } while (username.trim() == password.trim());


// 2 - Faça um programconst prompt = require(`prompt-sync`)();


// let nome = prompt(`Digite um nome: `);
// while (nome.length < 3) {
//     console.log(`Digite um nome válido: `);
//     continue;
// }

// let idade = +prompt(`Digite uma idade: `)
// while (idade < 0 && idade > 150) {
//     console.log(`Digite uma idade válida: `);
//     continue;
// } 

// let salario = prompt(`Digite o seu salário: `);
// while (salario < 0) {
//     console.log(`Digite um salário válido: `)
//     continue;
// }

// let estadoCivil = prompt(`Digite seu estado civil: `).toLocaleLowerCase();
// while (estadoCivil != "s" || estadoCivil != "c" || estadoCivil != "v" || estadoCivil != "d" ); {
//     console.log(`Digite um Estado Cívil válido: `)
// }a que leia e valide as seguintes informações:
// 
    
// 3 - Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

// const prompt = require(`prompt-sync`)();

// let numero = +prompt(`Digite um número: `)
// while ((numero % 2) != 0) {
//     numero = +prompt(`Digite outro número: `)
//         continue;
// } 
    

/* 4 - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o 
//número, e mostrar a quantidade de palpites que foi necessária.
const prompt = require(`prompt-sync`)();
console.clear();

let numero1 = Math.floor(Math.random() * (11));
console.log(numero1)

let tentativas = 1

let numero2 = +prompt(`Adivinhe o número do aleatório do PC: `)

while (numero1 != numero2) {
    console.log(`Número incorreto! `)
    tentativas = tentativas + 1;
    if (numero1 > numero2) {
        console.log(`O número pensado é maior que número ${numero2}`)
    } else if (numero2 > numero1) {
        console.log(`O número pensado é menor que número ${numero2}`)
    } else {
        console.log(``)
    }

    numero2 = +prompt(`Digite outro número: `)
} 


console.log();
console.log(`Adivinhão! O número pensando é justamente o ${numero1}. Você acertou na tentativa ${tentativas}. `)
console.log(); */

const prompt = require(`prompt-sync`)();









