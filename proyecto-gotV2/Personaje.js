export class Personaje{
    #name;
    #age;
    #estate;
    #house;
    constructor(name,age,estate,house){
        this.#name=name;
        this.#age=age;
        this.#estate=estate;
        this.#house=house;
    }
    /*---------------------------GET-------------------------------- */
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getEstate(){
        return this.#estate;
    }
    getHouse(){
        return this.#house;
    }
    /*---------------------------SET-------------------------------- */
    setName(valor){
        this.#name=valor;
    }
    setAge(valor){
        this.#age=valor;
    }
    setEstate(valor){
        this.#estate=valor;
    }
    setHouse(valor){
        this.#house=valor;
    }
    /*----------------------------Funciones--------------------------- */
    morirse(){
        return (this.#estate == false)? "Los muertos no pueden morir":`${this.#name} ha sido asesinad@`;
    }
    presentarse(){
        console.log(`Soy ${this.#name} de la Casa ${this.#house}`);
    }
}