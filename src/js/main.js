import {ingrediente} from './ingrediente.js'
import {medida} from './medida.js'

const ingredientes = new Array(); 
const medidas = new Array();

ingredientes.push(new ingrediente('arroz', false, 0.8));
ingredientes.push(new ingrediente('farinha', false, 1));

medidas.push(new medida('Xícara', true, 240))
medidas.push(new medida('Colher de sopa', true, 15))
medidas.push(new medida('Colher de Chá', true, 5))
medidas.push(new medida('gramas', false))

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

let densidadeIngrediente, conversorEntrada, entradaEhVolume, conversorSaida, saidaEhVolume;

selectIngrediente.onchange = capturaIngrediente;
selectEntrada.onchange = capturaEntrada;
selectSaida.onchange = capturaSaida;

function capturaEntrada() {
    let medidaEntrada = selectEntrada.value;
    medidas.forEach(function(medida){
    if (medidaEntrada === medida.nome){
        conversorEntrada = medida.conversor;
        entradaEhVolume = medida.ehVolume;
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
            saidaEhVolume = medida.ehVolume;
            }    
        })
}

const inputEntrada = document.querySelector('#entrada > input');
const inputSaida = document.querySelector('#saida > input');

//evento que chama a funcao para converter valores
inputEntrada.addEventListener('input', function(){
    const entrada = parseFloat(inputEntrada.value);
    inputSaida.value = converte(entrada, conversorEntrada, conversorSaida, densidadeIngrediente);
})

document.addEventListener('change', function(e){
        if(e.target.tagName=="SELECT"){
            const entrada = parseFloat(inputEntrada.value);
            inputSaida.value = converte(entrada, conversorEntrada, conversorSaida, densidadeIngrediente);
        }
    }
)



function converte(entrada, coEntrada, coSaida, densidade) {
    if (entradaEhVolume === false & saidaEhVolume === true){
        const volume = entrada / densidade;
        const resultado = volume / coSaida;
        return resultado.toFixed(1);        
    } else if (entradaEhVolume === true & saidaEhVolume === false){
        const volume = entrada * coEntrada;
        const resultado = volume * densidade;
        return resultado.toFixed(1);
    } else if (entradaEhVolume === true & saidaEhVolume === true) {
        const volume = entrada * coEntrada;
        const resultado = volume / coSaida;
        return resultado.toFixed(1);
    }
}

import {camelCase} from 'lodash'
console.log(camelCase('hello world'))