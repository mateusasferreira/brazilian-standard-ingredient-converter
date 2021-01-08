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

const arroz = new ingrediente('arroz', false, 0.8);
console.log(arroz);

class medida {
    constructor(nome, conversor) {
        this.nome = nome;
        this.conversor = conversor;
    }
}

const xicara = new medida('xicara', 240);



// console.log(xicara);



const select = document.getElementById("seletorEntrada");
const option = document.createElement("option"); 
option.text = 'text'
option.value = 1; 
select.add(option);




const inputEntrada = document.querySelector('#entrada > input');
const inputSaida = document.querySelector('#saida > input');

//evento que chama a funcao para converter valores
inputEntrada.addEventListener('input', function(){
    const entrada = parseFloat(inputEntrada.value);
    inputSaida.value = converte();
})

const medidaSelecionada, ingredienteSelecionado; //falta fórmula para alterar estas variáveis


// funcao que converte valores (ainda com valores estaticos para teste)
function converte() {
    var valorDeSaida
    
    if (arroz.liquido === false) {
        valorDeSaida = inputEntrada.value * xicara.conversor * arroz.densidade // inputEntrada.value * medidaSelecionada * ingredienteSelecionado
    } else {valorDeSaida = inputEntrada.value * xicara.conversor}

    return valorDeSaida
}