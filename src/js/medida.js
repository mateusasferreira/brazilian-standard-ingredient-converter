export class medida {
    constructor(nome, ehVolume, conversor) {
        if (typeof ehVolume !== "boolean") {
            throw new Error('ehVolume must be true or false')
        } 
        this.nome = nome;
        this.ehVolume = ehVolume;
        if (ehVolume === true){ 
         this.conversor = conversor; //volume total do recipiente em ml
        }
    }
}