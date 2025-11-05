import { Personaje } from "./Personaje.js";
import { Arma } from "./Arma.js";
export class Guerrero extends Personaje{
    #arm;
    constructor(name,age,estate,house,arm){
        super(name,age,estate,house);
        this.#arm =arm;
    }
    asignarArma(arma){
        if(!(arma instanceof Arma)){
            console.log("Esto no es un arma");
        }else{
            if(!this.#arm){ 
                this.#arm = arma;
                console.log(`${this.getName()} ha equipado el arma ${this.#arm}`);
            }else{ 
                console.log(`Ya tiene el arma ${this.#arm}`);
            };
        }
    }
    luchar(){
        console.log(`${this.getName()} ataca con su ${this.#arm.getNameArm()},causando ${this.#arm.getDamage()} puntos`);
    }
    entrenar(){
        console.log(`${this.getName()} se entrena sin descanso para la proxima batalla`);
    }
}