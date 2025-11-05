import { Rey } from "./Rey.js";
import { Casa } from "./Casa.js";
export class Reino {
    #nameKingdom;
    #king;
    #houses;

    constructor(nameKingdom){
        this.#nameKingdom = nameKingdom;
        this.#king = "";
        this.#houses = [];
    }
    /*---------------------------GET-------------------------------- */
    getNameKingdom(){
        return this.#nameKingdom;
    }
    getKing (){
        return this.#king;
    }
    getHouses (){
        return this.#houses;
    }
    /*---------------------------SET-------------------------------- */
    setNameKingdom(valor){
        this.#nameKingdom = valor;
    }
    setKing(valor){
        this.#king = valor;
    }
    setHouses(valor){
        this.#houses.push(valor);
    }
    /*----------------------------Funciones--------------------------- */
    agregarCasa(casa){
        if(!(casa instanceof Casa)){
            console.log("No es del tipo casa");
        }else{
            if(!this.#houses.some(item=>item.getNameHouse() == casa.getNameHouse())){
                this.#houses.push(casa);
                console.log(`La Casa ${casa.getNameHouse()} ha sido añadida al Reino de ${this.#nameKingdom}`);
            }else{
                console.log("Casa ya registrada");
            };
        }
    };
    listarCasas(){
        this.#houses.forEach(casa=>{
            console.log(`- Casa ${casa.getNameHouse()}`);
        })
    };
    proclamarRey(persona){
        if(!(persona instanceof Rey)){
            console.log("No es del tipo rey asi que no puede ser rey");
        }else{
            let encontrado=this.#houses.find(casa => casa.getNameHouse() == persona.getHouse());
            if(encontrado){
                if(encontrado.getMembers().some(person => person.getName() == persona.getName())){
                    this.#king = persona;
                    console.log(`${this.#king.getName()} ha sido proclamado rey de ${this.#nameKingdom}`);
                }else{
                    console.log("Esta persona no consta en ninguna casa y por lo tanto 'No casa ,no rey'");
                }
            }else{
                console.log("La casa no esta en este reino");
            }
        }
    }
}