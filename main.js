class ingrediente {
    constructor(nome, liquido, densidade){
        this.nome = nome;
        this.liquido = liquido;
        this.densidade = densidade;
    }
}

const arroz = new ingrediente('arroz', false, 5);
console.log(arroz);

class medida {
    constructor(nome, conversor) {
        this.nome = nome;
        this.conversor = conversor;
    }
}

const xicara = new medida('xicara', 240);
console.log(xicara);

const inputEntrada = document.querySelector('#entrada > input');
const inputSaida = document.querySelector('#saida > input');

//testando event listeners nos input de entrada
inputEntrada.addEventListener('input', function(){
    const entrada = parseFloat(inputEntrada.value);
    const saida = entrada;
    inputSaida.value = saida;
})

