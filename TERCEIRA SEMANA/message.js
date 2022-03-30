const prompt = require('prompt-sync')();
console.clear();

const pressEnter = () => {
    console.log();
    prompt(`pressione ENTER para continuar`);
    console.clear();
    console.log();
};

do {
    const personagem = {
        nome: 'Alfredo',
        idade: 20,
        overall: 60,
        respeito: 60,
        time: 'Flamengo', 

        menosOverall: function (baixa){
            console.log(`Você perdeu ${baixa} de overall! `)
            this.overall -= baixa;
            return this.overall
        },

        maisOverall: function (aumento) {
            console.log(`Você ganhou ${aumento} de overall! `)
            this.overall += aumento;
            return this.overall
        },

        menosRespeito: function (baixa) {
            console.log(`Você perdeu ${baixa} de respeito! `)
            this.respeito -= baixa;
            return this.respeito
        },

        maisRespeito: function (aumento) {
            console.log(`Você ganhou ${aumento} de respeito! `)
            this.respeito += aumento;
            return this.respeito
        }, 
        
        
    }

    var restart;

    const passagemTempo = {
        dia: 1, 
        hora: 22,
        minuto: 00,
        
        controleTempo: function(tempo) {  
            if (this.hora >= 24) {
                (this.hora = this.dia++)
            } else if (this.minuto >= 60) {
                (this.minuto = this.hora++ ) 
            } 
            console.log(`${this.hora}:${this.minuto} do dia ${this.dia}`)
            return this.hora, this.dia, this.minuto
            
        },
                

    };

    
    
    // Introdução ao jogo! 

    
    
          
    // Primeiro desafio.

    dia1 : while (personagem.overall <= 60) {
    console.log(`Olá, bem vindo ao Modo Carreira de ${personagem.nome}, ${personagem.idade} anos, jogador do ${personagem.time}! Você terá caminhos na qual poderá chegar ao Overall ideal para ser convocado para a seleção Brasileira.`);
    console.log();
    pressEnter();
    console.log(`Terá alguns caminhos a percorrer! Alfredo conta contigo para ajudá-lo a chegar lá! `)
    console.log();
    pressEnter();
    console.log(`Alfredo, começará com nível de Overall e Respeito em 60 e perderá ou ganhará mediante suas escolhas. `);
    console.log(`=======PRIMEIRO DIA=======`)
        passagemTempo.controleTempo();
        let primeiraPergunda = +prompt(`Balada ou dormir? Alfredo amanhã você tem um treino muito importante, mas você é jovem e tem uma balada legal pra ir... Decida! (Dormir - 1 ou Balada - 2): `)
        if (primeiraPergunda == 1) {
            console.log();
            let treino1 = +prompt(`Alfredo, Você chegou no treino! Quer treinar o quê? Finalização, está cansado? Ah, tem uma coletiva de imprensa também. (1 - Finalização // 2 - Estou cansado // 3 - Coletiva de imprensa.) `)
            if (treino1 == 1) {
                    console.log();
                    personagem.maisOverall(5);
                    console.log(`Agora você tem ${personagem.overall}`);
                    personagem.maisRespeito(2);
                    console.log(`Agora você tem ${personagem.respeito}`);
                    pressEnter()
                let finalizacao = +prompt(`Estamos no treino de finalização. Escolha onde vai ser seu chute: 1 - Meio // 2 - Esquerda // 3 - Direita`)
                if (finalizacao == 1) {
                    console.log();
                    console.log(`Goleiro saiu bem na bola. Pegou... `);
                    pressEnter()
                } else if (finalizacao == 2) {
                    console.log();
                    personagem.maisOverall(3);
                    personagem.maisRespeito(3);
                    console.log(`Chute forte, no canto! Sem chances para o goleiro. Seu overall agora é ${personagem.overall} e respeito é ${personagem.respeito}`);
                    console.log();
                    pressEnter()
                } else if (finalizacao == 3) {
                    personagem.menosOverall(1);
                    console.log(`Tirou do goleiro e do gol! Chute pra fora! ${personagem.overall} `);
                    console.log();
                    pressEnter()
                } else {
                    console.log(`Digite uma opção válida! `)
                }
                console.log();
                console.log(`Muito bem treinado! Vamos agora aguardar a seletiva de convocação para o jogo!`);
                pressEnter()
                console.log();
            } else if (treino1 == 2) {
                    personagem.menosOverall(2);
                    personagem.menosRespeito(2);
                    console.log(`Infelizmente você perdeu alguns pontos, que agora são de: ${personagem.overall} e respeito ${personagem.respeito}`)
                    pressEnter()
                console.log("Treinador falando: ");
                console.log()
                let embora = +prompt(`Alfredo, você teve chance de treinar e alegou cansaço. Mas você realmente vai para casa ou desviar o caminho? Seja sincero! (1 - Casa // 2 - Desviar o caminho, muita gata na balada)`)
                
                console.log();
                if (embora == 1){
                    personagem.menosRespeito(2);
                    console.log("Treinador falando: ");
                    console.log(`OK, acreditarei em você! Por isso seu respeito será aumentado! ${personagem.respeito}`);
                    pressEnter()
                    console.log();
                } else if (embora == 2) {
                    console.log();
                    personagem.menosRespeito(5);
                    console.log(`Obrigado pela sinceridade! Mas infelizmente seu respeito cairá novamente e ficará em: ${personagem.respeito} `);
                    pressEnter()
                    console.log();
                }      
                console.log(`OK! A convocatória é amanhã! Vamos ver o que acontece. `);
            } else if (treino1 == 3) {
                console.log();
                pressEnter()
                let pergunta1 = +prompt(`Alfredo, você objetivo em chegar na seleção Brasileira? (Sim - 1 ou Não - 2) `) 
                if (pergunta1 = 1) {
                    console.log();
                    personagem.maisRespeito(3);
                    console.log(`Seu respeito aumento para ${personagem.respeito}`); 
                    pressEnter()
                } else if (pergunta1 == 2) {
                    console.log();
                    personagem.menosRespeito(3);
                    console.log(`Seu respeito com o treinador e torcedores agora é ${personagem.respeito}`);
                    pressEnter();
                    console.log();
                } else {
                    console.log(`Digite uma opção válida! `)
                }
        let pergunta2 = +prompt(`Alfredo, você tem se dedicado ao máximo para conseguir seus objetivos no seu clube? (Sim - 1 ou Não - 2)`)
                if (pergunta2 == 1) {
                    console.log();
                    personagem.maisRespeito(2);
                    console.log(`Dá pra ver que seu comprometimento é grande com o clube, por isso, seu respeito agora é ${personagem.respeito}`);
                    pressEnter()
                } else if (pergunta2 == 2) {
                    console.log();
                    personagem.menosRespeito(2);
                    console.log(`Péssima resposta, respeito em decadência ${personagem.respeito}`);
                    pressEnter()
                    console.log();
                } else {
                    console.log(`Digite uma opção válida! `)
                }
                console.log(`Coletiva encerrada! Vamos aguardar a convocatória! `);
                pressEnter()
            } else {
                console.log(`Digite uma opção válida! `)
            }
        
    }   else if (primeiraPergunda == 2) {
        console.log();
        personagem.menosOverall(2);
        personagem.menosRespeito(2);
        console.log(`Alfredo, você infelizmente perdeu overall! Seu overal agora é: ${personagem.overall} e seu respeito caiu para ${personagem.respeito}`)
        pressEnter()
        var bebado = +prompt(`Alfredo, você chegou meio melado no treino? (1 - Sim ou 2 - Não)`)
            if (bebado == 1) {
                console.log();
                personagem.menosOverall(2);
                personagem.menosRespeito(2);
                console.log(`Alfredo, você está vacilando! Quer ser o Romário! Agora sua qualidade diminiu para ${personagem.overall} e respeito ${personagem.respeito}`)
                pressEnter();
                console.log();
                console.log(`Não sei como será! Vamos aguadar a convocatória! `);
                console.log();
            } else if (bebado == 2) {
                personagem.maisRespeito(2);
                personagem.maisOverall(2);
                console.log(`Legal! Agora vamos treinar, seu overall subiu ${personagem.overall} pela sinceridade! Seu respeito agora: ${personagem.respeito}`)
                pressEnter()
                console.log(); 
                console.log(`Não sei como será! Vamos aguadar a convocatória! `);           
        var treino2 = +prompt(`Você tem uma grande oportunidade de se redimir! Há uma falta e você foi escolhido pra bater. Qual lado? (1 - Direita ou 2 - Esquerda!)`)
                console.log();
            } else if (treino2 == 1) { 
                console.log();
                console.log(`Você perdeu e nada acontece! Todo mundo perde!`)
                pressEnter()
                console.log();
                console.log(`Espero que você esteja na convocatória amanhã!  `);
                pressEnter()
            } else if (treino2 == 2) {
                personagem.maisRespeito(2);
                personagem.maisOverall(2);
                console.log(`Você aproveita suas oportunidades! Agora seu overall é ${personagem.overall} e seu respeito com treinador é ${personagem.respeito}`)
                pressEnter();
                console.log();
                } else {
                    console.log(`Digite uma opção válida! `)
                }
        }   else {
            console.log(`Digite uma opção válida!`)
            } break;    

    }   

    if (personagem.overall <= 65 && personagem.respeito <= 65) {
        console.log("Você não conseguiu o overall aprópriado! ")
    }           
                       


    dia2 : while(personagem.overall >= 65 && personagem.respeito >= 65) {
        console.log();
        console.log(`=======SEGUNDO DIA=======`)
        console.log("Chegamos no jogo!" );
        console.log();
        console.log(`Alfredo sabe que está na convocatória! Mas só na hora do jogo saberá se será titular ou reserva! No momento que soube estava em casa e seu técnico ligou.`);
        console.log();
        console.log("Depois das seções de treino, vamos para o jogo! Você começa como reserva, Alfredo! Aproveite as oportunidades! ")
        pressEnter();
        console.log();
        let segundaPergunta = +prompt(`Treinador mandou Alfredo aquecer... Ele já começa puto porque tá no banco! (1 - Aquecer ou 2 - Negar ao treinador)`) 
        if (segundaPergunta == 1){
            console.log();
            personagem.maisRespeito(2);                
            console.log(`- Treinador chamou! Respeito aumentou! ${personagem.respeito} `);
            console.log(`"Alfredo, você vai entrar de atacante. Faz um gol e tem seus objetivos mais próximos"`);
            
            console.log();
        let jogo1 = +prompt(`Linda chance criada, Alfredo vem pela ponta direta, passou pelo zagueiro. Tem duas opções: 1 - Chutar ou 2 - Tocar para o colega ao lado.`)
            if (jogo1 == 1) { 
                console.log();
                personagem.menosOverall(2);
                personagem.doisRespeito(2);
                console.log(`Perdeu o gol! O colega tava melhor colocado! Overall atingido ${personagem.overall} e respeito do treinador caiu, agora ${personagem.respeito}`);
                pressEnter();
            } else if (jogo1 == 2) {
                console.log();
                personagem.maisRespeito(2);
                personagem.maisOverall(2);
                console.log(`Perfeito! Que bela bola para seu companheiro! Overall aumentou ${personagem.overall} e respeito também ${personagem.respeito}`);
                pressEnter();
            } else {
                console.log(`Digite uma opção válida! `)
            }

        } else if (segundaPergunta == 2) {
            console.log();
            personagem.menosRespeito(3);
            console.log(`Alfredo, você desaponta seus fãs fazendo essas coisas. Perde respeito com treinador ${personagem.respeito}`);
            console.log(`Mesmo assim o treinador coloca Alfredo por causa do pedido dos fãs! `);
            console.log();
            pressEnter();
        let jogo2 = +prompt(`Linda chance criada, Alfredo vem pela ponta direta, passou pelo zagueiro. Tem duas opções: 1 - Tocar para o colega ao lado ou 2 - Chutar  `)
            if (jogo2 == 1) {
                console.log();
                personagem.maisRespeito(2);
                personagem.maisOverall(2);
                console.log(`Perfeito! Que bela bola para seu companheiro! Overall aumentou ${personagem.overall} e respeito também ${personagem.respeito}`);
                console.log();
                console.log(`Ganhou o jogo`);
                pressEnter();
            } else if (jogo2 == 2) {
                console.log();
                personagem.menosRespeito(2);
                personagem.menosOverall(2);
                console.log(`Perdeu o gol! O colega tava melhor colocado! Overall atingido ${personagem.overall} e respeito do treinador caiu, agora ${personagem.respeito}! `);
                console.log();
                console.log(`Perdeu o jogo!` );
                pressEnter();
            } else {
                console.log(`Digite uma opção válida! `)
            }
        } else {
            console.log(`Digite uma opção válida! `)
        }

        let jogo3 = +prompt(`Pênalti! Treinador está indeciso do quem mandar bater. (1 - Pede pra bater ou 2 - Entrega a bola para Gabigol)`)
            if (jogo3 == 1) {
                console.log();
                personagem.maisRespeito(2);                
                console.log(`Treinador gostou da sua atitude! Respeito do elenco aumentou ${personagem.respeito} `);
                console.log();
                personagem.menosOverall(2);
                console.log(`Alfredo bate o Pênalti, mas o goleiro pega! Acontece... Mas seu overall diminui! ${personagem.overall}`);
                pressEnter();
            } else if (jogo3 == 2){
                console.log();
                personagem.maisOverall(2);
                console.log(`Gabigol bate, goleiro vai muito bem e pega rebote, mas Alfredo tá lá e confere! Golaço! Seu overall agora é de ${personagem.overall}`);
                pressEnter();
            } else {
                console.log(`Digite uma opção válida! `)
                
            }
            break;   
    }   
    
                 
            

     dia3 : do {
        console.log();
        console.log(`=======TERCEIRO DIA=======`)
        console.log();
        pressEnter();
        let terceiraPergunta = +prompt(`Em mais uma seção de treino, pós jogo, Alfredo chega para treinar aparentemente bêbado! O treinador logo pergunta se ele está bêbado... O que você acha? (1 - Sóbrio, 2 - Bêbado ou 3 - Não responder! )`)
            if (terceiraPergunta == 1) {
                console.log();
                personagem.menosRespeito(5);
                console.log(`Treinador viu que era mentira, pois viu fotos dele na rua logo após a balada! Faz o respeito dele cair bastante para ${personagem.respeito}`);
                pressEnter();
                console.log();
                let recuperar = +prompt(`Viu que não dava para mentir e foi falar com o treinador depois! O que você faria? (1 - Assumia o erro, 2 - Pergunta ao treinador quem nunca bebeu)`);
                console.log();
                if (recuperar == 1) {
                    personagem.maisOverall(2)
                    console.log(`Treinador dá os parabéns, viu que Alfredo ficou arrependido! Respeito aumentou um pouquinho para ${personagem.respeito}`)
                    pressEnter();
                    console.log();
                } else if (recuperar == 2) {
                    personagem.menosRespeito(3);
                    console.log(`Treinador viu que Alfre não tem um pingo de arrependimento e assim, decide ainda que Alfredo perderá mais respeito em sua perspectiva. ${personagem.respeito}`)
                    console.log();
                    pressEnter();
                } else {
                    console.log(`Digite uma opção válida! `)
                }
            }  else if (terceiraPergunta == 2) {
                    console.log();
                    personagem.maisRespeito(2);
                    console.log(`O treinador do time viu que você errou, mas foi honesto! Então ele decidiu te dá uma chance para melhorar. Seu respeito aumentou um pouco ${personagem.respeito}`); 
                    console.log();
                    pressEnter();
            }  else if (terceiraPergunta == 3) {
                    personagem.menosRespeito(5);
                    console.log(`"Sinceramente não sei se posso contar com você!" ${personagem.respeito}`)
                    console.log();
                    pressEnter();
            }
            

    } while (false)
    
    if (personagem.overall <= 65 && personagem.respeito <= 65) {
        console.log("Você não conseguiu o overall aprópriado! E infelizmente sua trajetória acaba aqui!  ")
    }      


    dia4 : while (personagem.overall >= 70 && personagem.respeito >= 70) {
        console.log();
        console.log(`=======QUARTO DIA=======`)
        console.log("Chegamos no jogo!" );
        console.log();
        pressEnter();
        console.log(`Alfredo sabe que está na convocatória! Dessa vez como titular! `);
        let jogo2 = +prompt(`Alfredo, você vai começar como titular! Essa é sua grande chance! Estão te provocando dentro de campo. Decida o que fazer: 1 - Ativar modo driblador ou 2 - Jogar para o time. `)
        if (jogo2 == 1) {
            console.log();
            console.log(`"Vamos ver o que acontece!"`);
            console.log();
            let recuperar = +prompt(`Em seu modo driblador ativado, Alfredo tem o primeiro dilema: Em jogada que saiu dois contra um, Alfredo pode tocar para o companheiro melhor colocado, ou decidir sozinho! Escolha: 1 - Tocar, 2 - Decidir! `)
            if (recuperar == 1){
                console.log();
                personagem.menosRespeito(2);
                personagem.menosOverall(2);
                console.log(`Alfredo tentou toque para seu companheiro, o toque saiu fraco! Com isso, diminuiu overall para ${personagem.overall} e respeito para ${personagem.respeito} `);
                pressEnter();
            } else if (recuperar == 2) {
                console.log();
                personagem.maisOverall(5);
                personagem.maisRespeito(5);
                console.log(`Alfredo foi pra cima do defensor, passou liso. Saiu de cara para o gol e fez! Foi uma linda jogada que coloca Alfredo no olho do treinador da seleção que vê o jogo! `);
                pressEnter();
            } else {
                console.log(`Digite uma opção válida! `)
            }
        } else if (jogo2 == 2) {
            console.log();
            personagem.maisOverall(5);
            personagem.maisRespeito(5);
            console.log(`Alfredo claramente é um jogador solidário! ${personagem.overall} é seu overall agora e de respeito: ${personagem.respeito}`);
            pressEnter();
            let recuperar = +prompt(`Chega o intervalo o treinador pede para Alfredo jogar mais pela esquerda, puxando contra-ataque! Alfredo não gosta muito da instrução, pois gosta de jogar centralizado. O que fazer? 1 - Questionar ordem do treinador ou 2 - Aceitar, mesmo que jogue mal? `);
                if (recuperar == 1) {
                    console.log();
                    personagem.maisRespeito(2);
                    console.log(`Treinador não gostou do questionamento, mas mesmo assim, pela coragem você ganhou respeito! Foi para ${personagem.respeito}`); 
                    pressEnter();
                } else if (recuperar == 2) {
                    console.log();
                    personagem.menosOverall(3);
                    console.log(`Alfredo aceita, mas vai muito mal! Ele não sabe jogar por aquele lado! Com isso seu overrll para ${personagem.overall}`);
                    pressEnter();
                    let reclamar = +prompt(`Treindor reclama com Alfredo, o que ele faz? 1 - Xingar o treinador ou 2 - Pedir para o treinador te colocar centralizado? `)
                        if (reclamar == 1) {
                            console.log();
                            personagem.menosRespeito(10);
                            console.log(`Treinador tira Alfredo do jogo na hora! E perde respeito ${personagem.respeito}`);
                            console.log(`Alfredo foi demitido! `)
                            console.log();
                            pressEnter();
                            break;
                        } else if (reclamar == 2) {
                            console.log();
                            personagem.maisRespeito(5);
                            personagem.maisOverall(10);
                            console.log(`Treinador mudou e Alfredo ganhou respeito ${personagem.respeito} e fez um gol, aumentando seu overall para ${personagem.overall}`);
                            pressEnter();
                        }
                }
                
            
        } else {
            console.log(`Digite uma opção válida! `)
        }
        break;
    }
    if (personagem.overall <= 75 && personagem.respeito <= 75) {
        console.log("Você não conseguiu o overall aprópriado! Não foi convocado e infelimente não cumpriu seu objetivo! Jogo encerrado!  ")
    }      

    dia5 : do while (personagem.overall >= 75 && personagem.respeito >= 75){ 
        console.log();
        console.log(`=======QUINTO DIA=======`)
        console.log();
        console.log(`Convocação da seleção Brasilera! Alfredo foi convocado por seu desempenho! Houve até coletiva de imprensa. `)
        console.log();
        pressEnter();
        let coletiva = +prompt(`Estamos inciando a coletiva. Primeira pergunta para Alfredo! - Alfredo, como você se sente em sua primeira convocação? 1 - Muito feliz ou 2 - Sabia que esse dia ia chegar? `)
        if (coletiva == 1) {
            console.log();
            personagem.maisRespeito(5);
            console.log(`"Ah, cara! Estou muito feliz! Sempre sonhei por esse momento e não sabia que ia chegar tão cedo!"`);
            console.log(`Com essa resposta, seu respeito aumentou muito, Alfredo! ${personagem.respeito} é seu nível de respeito! `);
            pressEnter();

        } else if (coletiva == 2) {
            console.log();
            personagem.menosRespeito(5);
            console.log(`"Sempre soube que esse dia ia chegar, um jogador como eu nunca pode ficar de fora da convocatória!" `);
            console.log(`Com essa mala toda, seu nível de respeito baixou! ${personagem.respeito}`);
            pressEnter();
        }
        personagem.maisOverall();
        personagem.maisOverall();
        console.log(`Alfredo conseguiu o objetivo e foi convocado! THE END! `);
        console.log(`Nível de respeito ficou em ${personagem.respeito}`)
        console.log(`Nível de overall ficou em ${personagem.overall}`)

    } while (false)

    
} while (restart);





