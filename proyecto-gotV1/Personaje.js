import { Arma } from "./Arma.js";
export class Personaje{
    #name;
    #age;
    #estate;
    #house;
    #arm;

    constructor(name,age,estate,house){
        this.#name=name;
        this.#age=age;
        this.#estate=estate;
        this.#house=house;
        this.#arm = "";
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
    asignarArma(arma){
        if(!this.#arm){ 
            this.#arm = arma.getNameArm();
            console.log(`${this.#name} ha equipado el arma ${this.#arm}`)
        }else{ 
            console.log(`Ya tiene el arma ${this.#arm}`)
        };
    }
}