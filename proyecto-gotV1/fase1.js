import { Arma } from "./Arma.js";
import { Casa } from "./Casa.js";
import { Personaje } from "./Personaje.js";
import { Reino } from "./Reino.js";
/*----------------------------Creacion--------------------------- */
let poniente = new Reino("Poniente");

let casStark = new Casa("Stark","Hasta el 40 de mayo no te quites el sayo");
let casLan = new Casa("Lannister","Aqui no somos morosos");

let aguja = new Arma("Aguja",35,"Espada corta","Es un tipo de espada de pequeñas dimensiones y muy ligera");
let garra = new Arma("Garra",55,"Espada pesada","Arma de gran peso y alto daño");

let Jon = new Personaje("Jon Snow",28,false,"Stark");
let Arya = new Personaje("Arya Stark",15,true,"Stark");
let Jaime = new Personaje("Jaime Lannister",39,true,"Lannister");
/*-----------------------Agregar casa------------------------------------*/
poniente.agregarCasa(casStark);
poniente.agregarCasa(casLan);
/*-----------------------Asignar armas-----------------------------------*/
Jon.asignarArma(garra);
Arya.asignarArma(aguja);
/*-----------------------Asignar casas-----------------------------------*/
casStark.asignarCasa(Jon);
casStark.asignarCasa(Arya);
casLan.asignarCasa(Jaime);
/*-----------------------Proclamar Rey------------------------------------*/
poniente.proclamarRey(Jaime);
/*-----------------------Listar casa------------------------------------*/
console.log(`Casas del reino de ${poniente.getNameKingdom()}:`)
poniente.listarCasas();
/*-----------------------Rey actual----------------------------------*/
console.log("Rey actual:")
let rey=poniente.getKing();
console.log(`El rey actual es ${rey.getName()} de la casa ${rey.getHouse()}`)
/*-----------------------Mostrar Miembros----------------------------------*/
casStark.mostrarMiembros();
/*-----------------------Presentaciones----------------------------------*/
console.log("Presentaciones: ")
Jon.presentarse();
Arya.presentarse();
Jaime.presentarse();
/*-----------------------Armas----------------------------------*/
console.log("Armas: ")
aguja.explicarArma();
garra.explicarArma();