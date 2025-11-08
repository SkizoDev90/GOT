import { Personaje } from "../Personaje.js";
import { Arma } from "../Arma.js";
export class Guerrero extends Personaje{
    #arm;
    #vida;
    constructor(name,age,estate,house){
        super(name,age,estate,house);
        this.#arm = new Arma();
        this.#vida=100;
    }
    getArm(){
        return this.#arm;
    }
    getVida(){
        return this.#vida;
    }
    asignarArma(arma){
        if(!(arma instanceof Arma)){
            console.log("Esto no es un arma");
        }else{
            if(this.#arm){ 
                this.#arm = arma;
                console.log(`${this.getName()} ha equipado el arma ${this.#arm.getNameArm()}`);
            }else{ 
                console.log(`Ya tiene el arma ${arma.getNameArm()}`);
            };
        }
    }
    atacar(oponente){
        console.log(`${this.getName()} ataca con su ${this.#arm.getNameArm()},al rival ${oponente.getName()} causandole ${this.#arm.getDamage()} puntos`);
    }
    entrenar(){
        console.log(`${this.getName()} se entrena sin descanso para la proxima batalla`);
    }
    recibirDaño(puntos){
        this.#vida = this.#vida-puntos;
        /*Si llega ha cero llama a morirse y dentro se agrega a los muertos en batalla y retorna falso para eliminar del array de la casa*/
        if(this.#vida<=0){
            this.#vida = 0;
            this.morirse();
            return false;
        }else{
            /*sino retorna true y sigue para un nuevo duelo*/
            return true;
        }
    }
}