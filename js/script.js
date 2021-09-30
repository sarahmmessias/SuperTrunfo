var carta1 = {
    nome: "Bulbasaur",
    imagem: "https://cdn.dribbble.com/users/1787323/screenshots/4458591/media/42f6ffb66874b880d1cd92fa132848ae.png?compress=1&resize=800x600",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

var carta2 = {
    nome: "Squirtle",
    imagem: "https://cdn.dribbble.com/users/1787323/screenshots/4422567/media/75fb0578bc25b19972374ced6cedf150.png?compress=1&resize=800x600",
    atributos: {
        ataque: 7,
        defesa: 6,
        magia: 9
    }
}

var carta3 = {
    nome: "Snorlax",
    imagem: "https://i.pinimg.com/564x/f9/2b/7f/f92b7f6a1717184024df6053b6fe99c3.jpg",
    atributos: {
        ataque: 8,
        defesa: 10,
        magia: 4
    }
}

var carta4 = {
    nome: "Jigglypuff",
    imagem: "https://i.pinimg.com/564x/b9/73/9d/b9739dc7659a27792f0ec9a70c210902.jpg",
    atributos: {
        ataque: 7,
        defesa: 5,
        magia: 10
    }
}

var cartas = [carta1, carta2, carta3, carta4];
var cartaMachine;
var cartaPlayer;

function sortearCarta() {
    var numCartaMachine = parseInt (Math.random() * 4);
    cartaMachine = cartas[numCartaMachine];

    var numCartaPlayer = parseInt (Math.random() * 4);
    while (numCartaMachine == numCartaPlayer) {
        numCartaPlayer = parseInt (Math.random() * 4);
    }
    cartaPlayer = cartas[numCartaPlayer];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaPlayer()
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
    var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado];
    var valorCartaMachine = cartaMachine.atributos[atributoSelecionado];

    if (valorCartaPlayer > valorCartaMachine) {
        htmlResultado = "<p class='resultado-final'> Você venceu!</p> ";
    } else if (valorCartaPlayer < valorCartaMachine) {
        htmlResultado = "<p class='resultado-final'> Você perdeu!</p>";
    } else {
        htmlResultado = "<p class='resultado-final'> Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMachine();
}

function exibirCartaPlayer() {
    var divCartaPlayer = document.getElementById("carta-jogador");
    divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.imagem})`;
    //divCartaPlayer.style.backgroundImage = "url(" + cartaPlayer.imagem+ ")";
    var moldura =
        '<img src="img/card.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaPlayer.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo + "'>" + atributo + " " + 
            cartaPlayer.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`;
    divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMachine() {
    var divCartaMachine = document.getElementById("carta-maquina");
    divCartaMachine.style.backgroundImage = `url(${cartaMachine.imagem})`;
    //divCartaMachine.style.backgroundImage = "url(" + cartaMachine.imagem+ ")";
    var moldura =
        '<img src="img/card.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMachine.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='"+ atributo + "'>" + atributo + " " + 
            cartaMachine.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMachine.nome}</p>`;
    divCartaMachine.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}