// Variáveis
let nomeHeroi = "";
let experienciaHeroi = 0;
let nivelHeroi = "";


// Laço de repetição
while (true) {

    nomeHeroi = input.question("Informe o nome do Heroi: ");
    experienciaHeroi = input.questionInt("Informe a quantidade de experiencia (xp) do seu heroi: ");


    // Estruturas de decisão + operadores relacionais e de atribuição
    if (experienciaHeroi < 1000) {
        nivelHeroi = "Ferro";
    } else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
        nivelHeroi = "Bronze";
    } else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
        nivelHeroi = "Prata";
    } else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
        nivelHeroi = "Ouro";
    } else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
        nivelHeroi = "Platina";
    } else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
        nivelHeroi = "Ascendente";
    } else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
        nivelHeroi = "Imortal";
    } else if (experienciaHeroi >= 10001) {
        nivelHeroi = "Radiante";
    }


    // Saídas possíveis
    if (nomeHeroi !== "" && experienciaHeroi !== 0)
        console.log("O Herói de nome: ${nomeHeroi}, está no nível: ${nivelHeroi}.");
    else
        console.log("Você precisa informar o nome do herói e seu xp para verificar o nível.");

}