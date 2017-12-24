var botaoCalcular = document.querySelector("[type=button]");

function calculoNinjaPositivo(){
    var positivosTeam = document.querySelectorAll("[name=positivoteam]");
    var porcentagemPositivaTeam = [];

    for(var i = 0; i < positivosTeam.length; i++){
        if(positivosTeam[i].checked){
            porcentagemPositivaTeam.push(parseFloat(positivosTeam[i].value));
        }
    }
    
    console.log(porcentagemPositivaTeam);
    return porcentagemPositivaTeam;
}

function calculoNinjaNegativo(){
    var negativosTeam = document.querySelectorAll("[name=negativoteam]");
    var porcentagemNegativaTeam =[];

    for(var i = 0; i < negativosTeam.length; i++){
        if(negativosTeam[i].checked){
            porcentagemNegativaTeam.push(parseFloat(negativosTeam[i].value));
        }
    }
    console.log(porcentagemNegativaTeam);
    return porcentagemNegativaTeam;
}

function calculoAdversarioPositivo(){
    var positivosAdv = document.querySelectorAll("[name=positivoadv]");
    var porcentagemPositivaAdv = [];

    for(var i = 0; i < positivosAdv.length; i++){
        if(positivosAdv[i].checked){
            porcentagemPositivaAdv.push(parseFloat(positivosAdv[i].value));
        }
    }
    console.log(porcentagemPositivaAdv);
    return porcentagemPositivaAdv;
}

function calculoAdversarioNegativo(){
    var negativoAdv = document.querySelectorAll("[name=negativoadv]");
    var porcentagemNegativaAdv = [];

    for(var i = 0; i < negativoAdv.length; i++){
        if(negativoAdv[i].checked){
            porcentagemNegativaAdv.push(parseFloat(negativoAdv[i].value));
        }
    }
    console.log(porcentagemNegativaAdv);
    return porcentagemNegativaAdv;
}

function calcularPorcentagemPositiva(velocidade, porcentagem){
    var velocidadeSaida = velocidade + (velocidade * porcentagem / 100);
    return velocidadeSaida;
}

function calcularPorcentagemNegativa(velocidade, porcentagem){
    var velocidadeSaida = velocidade - (velocidade * porcentagem / 100);
    return velocidadeSaida;
}

function calcularVelocidadeTeam(){
    var velocidadeInicialTeam = document.querySelector("#velInicialTeam").value;
    var velocidadeFinalTeam = parseFloat(velocidadeInicialTeam);
    var positivosTeam = calculoNinjaPositivo();
    var negativoadv = calculoAdversarioNegativo();

    for(var i = 0; i < positivosTeam.length; i++){
        velocidadeFinalTeam = calcularPorcentagemPositiva(velocidadeFinalTeam, positivosTeam[i]);
    }

    for(var i = 0; i < negativoadv.length; i++){
        velocidadeFinalTeam = calcularPorcentagemNegativa(velocidadeFinalTeam, negativoadv[i]);
    }
    console.log(velocidadeFinalTeam);
    return velocidadeFinalTeam;
}

function calcularVelocidadeAdv(){
    var velocidadeInicialAdv = document.querySelector("#velInicialAdv").value;
    var velocidadeFinalAdv = parseFloat(velocidadeInicialAdv);
    var positivoadv = calculoAdversarioPositivo();
    var negativoteam = calculoNinjaNegativo();

    for(var i = 0; i < positivoadv.length; i++){
        velocidadeFinalAdv = calcularPorcentagemPositiva(velocidadeFinalAdv, positivoadv[i]);
    }

    for(var i = 0; i < negativoteam.length; i++){
        velocidadeFinalAdv = calcularPorcentagemNegativa(velocidadeFinalAdv, negativoteam[i]);
    }
    console.log(velocidadeFinalAdv);
    return velocidadeFinalAdv;
}
function calcularVelocidadeFinal(){
    var velocidadeTeam = calcularVelocidadeTeam();
    var velocidadeAdv = calcularVelocidadeAdv();
    var teamMaior = velocidadeTeam - velocidadeAdv;
    var advMaior = velocidadeAdv - velocidadeTeam;
    
    document.write("Sua velocidade é: " + velocidadeTeam.toFixed() + '<br>');
    document.write('Velocidade do seu adversario é: ' + velocidadeAdv.toFixed() + '<br>');
    if(velocidadeTeam > velocidadeAdv){
        document.write('Sua velocidade é maior com a diferença de: ' + teamMaior.toFixed() + '<br>');
    }else{
        document.write('A velocidade do adversario é maior com a diferença de: ' + advMaior.toFixed() + '<br>');
    }
    
    //alert('Sua velocidade é: ' + velocidadeTeam.toFixed());



    console.log(velocidadeFinal);
}
botaoCalcular.onclick = calcularVelocidadeFinal;