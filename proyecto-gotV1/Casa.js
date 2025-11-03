import { Reino } from "./Reino.js";
export class Casa{
    #nameHouse;
    #motto;
    #members;

    constructor(nameHouse,motto){
        this.#nameHouse = nameHouse;
        this.#motto = motto;
        this.#members = [];
    }
    /*---------------------------GET-------------------------------- */
    getNameHouse (){
        return this.#nameHouse;
    }
    getMotto (){
        return this.#motto;
    }
    getMembers (){
        return this.#members;
    }
    /*---------------------------SET-------------------------------- */
    setNameHouse (valor){
        this.#nameHouse = valor;
    }
    setMotto (valor){
        this.#motto = valor;
    }
    setMembers (valor){
        this.#members.push(valor);
    }
    /*----------------------------Funciones--------------------------- */
    asignarCasa(persona){
        /*Compruebo si existe ya en la casa*/
        if(!this.#members.some(item => item == persona.getName())){
            this.#members.push(persona);
            console.log(`${persona.getName()} ha sido añadido a la Casa ${this.#nameHouse}`);
        }else{
            console.log("Ya se encuentra registrado en la casa");
        }
    }
    mostrarMiembros(){
        console.log(`Miembros de la Casa ${this.#nameHouse}:`);
        this.#members.forEach(miembro=>{
            console.log(`- ${miembro.getName()}`);
        })
    }
}