import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje{
    #specialty;
    constructor(name,age,estate,house,specialty){
        super(name,age,estate,house);
        this.#specialty=specialty;
    }
    getSpeciality(){
        return this.#specialty;
    }
    setSpeciality(specialty){
        this.#specialty=specialty;
    }
    luchar(){
        console.log(`${this.getName()} no lucha con armas,sino con palabras e inteligencia.`);
    }
    aconseja(Robert){
        console.log(`${this.getName()} aconseja a ${Robert.getName()} sobre la nueva tactica`);
    }
}