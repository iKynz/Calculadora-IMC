const calcular = document.getElementById("calcular");

function imc() {
const nome = document.getElementById("nome").value;
const altura = document.getElementById("altura").value;
const peso = document.getElementById("peso").value;
const resultado = document.getElementById("resultado");

if (nome !== "" && altura !== "" && peso !== ""){
    
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = "";

    if(valorIMC < 18.5) {
        classificacao = "abaixo do peso";
    } else if(valorIMC <25) {
        classificacao = "no Peso ideal, Parabéns";
    } else if(valorIMC < 30){
        classificacao = "levemente acima do peso";
    } else if(valorIMC < 35){
        classificacao = "Com obesidade grau I"
    }else if(valorIMC < 40){
        classificacao = "Com obesidade grau II"
    }else{
        classificacao = "Com obesidade grau III,  CUIDADO!!"
    }

    
    resultado.textContent = `${nome} seu IMC é ${valorIMC}, você está ${classificacao}`;
}
else {
    resultado.textContent = "Preencha Todos os Campos!"
}
}

calcular.addEventListener("click", imc);