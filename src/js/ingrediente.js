export class ingrediente {
    constructor(nome, liquido, densidade){
        if (typeof liquido !== "boolean") {
            throw new Error('liquido must be true or false')
        } 
        this.nome = nome;
        this.liquido = liquido;
        this.densidade = densidade; //em g/ml
    }
}