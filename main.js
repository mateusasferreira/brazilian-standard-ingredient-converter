class ingrediente {
    constructor(nome, liquido, densidade){
        if (typeof liquido !== "boolean") {
            throw new Error('liquido must be true or false')
        } 
        this.nome = nome;
        this.liquido = liquido;
        this.densidade = densidade; //em g/ml
    }

}

class medida {
    constructor(nome, conversor) {
        this.nome = nome;
        this.conversor = conversor;
    }
}

const ingredientes = new Array(); 
const medidas = new Array();

ingredientes.push(new ingrediente('arroz', false, 0.8));
ingredientes.push(new ingrediente('farinha', false, 1));

medidas.push(new medida('Xícara', 240))
medidas.push(new medida('Colher de sopa', 15))
medidas.push(new medida('Colher de Chá', 5))

const selectEntrada = document.getElementById("seletorEntrada");
const selectSaida = document.getElementById("seletorSaida");
const selectIngrediente = document.getElementById("select-ingrediente");


ingredientes.forEach(function(ingrediente){
    let option = document.createElement("option"); 
    option.text = ingrediente.nome;
    selectIngrediente.add(option);
});

 medidas.forEach(function(medida){
     let optionEntrada = document.createElement("option"); 
     let optionSaida = document.createElement("option"); 
     optionEntrada.text = medida.nome;
     optionSaida.text = medida.nome;
     selectEntrada.add(optionEntrada);
     selectSaida.add(optionSaida);
})

let conversorEntrada, conversorSaida, densidadeIngrediente;

selectIngrediente.onchange = capturaIngrediente;
selectEntrada.onchange = capturaEntrada;
selectSaida.onchange = capturaSaida;

function capturaEntrada() {
    let medidaEntrada = selectEntrada.value;
    medidas.forEach(function(medida){
    if (medidaEntrada === medida.nome){
        conversorEntrada = medida.conversor;
        }    
    })
}

function capturaIngrediente() {
    let ingredienteSelecionado = selectIngrediente.value; 
    ingredientes.forEach(function(ingrediente){
        if (ingredienteSelecionado === ingrediente.nome){
            densidadeIngrediente = ingrediente.densidade;
            }    
        })
}

function capturaSaida() {
    let medidaSaida = selectSaida.value;
    medidas.forEach(function(medida){
        if (medidaSaida === medida.nome){
            conversorSaida = medida.conversor;
            }    
        })
}







const arroz = ingredientes[0];
const xicara = medidas[0];

const inputEntrada = document.querySelector('#entrada > input');
const inputSaida = document.querySelector('#saida > input');

//evento que chama a funcao para converter valores
inputEntrada.addEventListener('input', function(){
    const entrada = parseFloat(inputEntrada.value);
    inputSaida.value = converte();
})

// const medidaSelecionada, ingredienteSelecionado; //falta fórmula para alterar estas variáveis


// funcao que converte valores (ainda com valores estaticos para teste)
function converte() {
    var valorDeSaida
    
    if (arroz.liquido === false) {
        valorDeSaida = inputEntrada.value * xicara.conversor * arroz.densidade // inputEntrada.value * medidaSelecionada * ingredienteSelecionado
    } else {valorDeSaida = inputEntrada.value * xicara.conversor}

    return valorDeSaida
}