import { Casa } from "./Casa.js";
export class Personaje{
    #name;
    #age;
    #estate;
    #house = new Casa();
    constructor(name,age,estate,house){
        this.#name = name;
        this.#age = age;
        this.#estate = estate;
        this.#house = house;
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
        this.#name = valor;
    }
    setAge(valor){
        this.#age = valor;
    }
    setEstate(valor){
        this.#estate = valor;
    }
    setHouse(valor){
        this.#house = valor;
    }
    /*----------------------------Funciones--------------------------- */
    morirse(){
        if(this.#estate == false){
            console.log("Los muertos no pueden morir");
        }else{
            this.#estate = false;
            console.log("");
            console.log(`-${this.#name} ha muerto en combate`);
        }
    }
    presentarse(){
        console.log(`Soy ${this.#name} de la Casa ${this.#house.getNameHouse()}`);
    }
}