import { Personaje } from "./Personaje.js";

export class Rey extends Personaje{
    #ageReign;
    constructor(name,age,estate,house,ageReign){
        super(name,age,estate,house);
        this.#ageReign=ageReign;
    }
    getAgeReign(){
        return this.#ageReign;
    }
    setAgeReign(ageReign){
        this.#ageReign=ageReign;
    }
    luchar(){
        console.log(`${this.getName()} no lucha que para eso es rey`);
    }
    gobernar(){
        console.log(`${this.getName()} gobierna con sabiduria desde hace ${this.#ageReign} años`);
    }
}