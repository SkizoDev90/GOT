export class Arma{
    #nameArm;
    #damage;
    #typeArm;
    #description;
    
    constructor(nameArm,damage,typeArm,description){
        this.#nameArm = nameArm;
        this.#damage = damage;
        this.#typeArm = typeArm;
        this.#description = description;
    }
    /*---------------------------GET-------------------------------- */
    getNameArm(){
        return this.#nameArm;
    }
    getDamage(){
        return this.#damage;
    }
    getTypeArm(){
        return this.#typeArm;
    }
    getDescription(){
        return this.#description;
    }
    /*---------------------------SET-------------------------------- */
    setNameArm(valor){
        this.#nameArm = valor;
    }
    setDamage(valor){
        this.#damage = valor;
    }
    setTypeArm(valor){
        this.#typeArm = valor;
    }
    setDescription(valor){
        this.#description = valor;
    }
    /*----------------------------Funciones--------------------------- */
    explicarArma(){
        console.log (`${this.#nameArm} (${this.#typeArm}) - daño: ${this.#damage}`);
    }
}