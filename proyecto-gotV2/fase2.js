import { Arma } from "./Arma.js";
import { Casa } from "./Casa.js";
import {Guerrero} from "./Guerrero.js";
import {Consejero} from "./Consejero.js";
import {Rey} from "./Rey.js";
import { Reino } from "./Reino.js";
/*----------------------------Creacion--------------------------- */
let poniente = new Reino("Poniente");

let casStark = new Casa("Stark","Hasta el 40 de mayo no te quites el sayo");
let casLan = new Casa("Lannister","Aqui no somos morosos");
let casBar = new Casa("Baratheon","To el dia cabreados y borrachos");

let aguja = new Arma("Aguja",35,"Espada corta","Es un tipo de espada de pequeñas dimensiones y muy ligera");
let garra = new Arma("Garra",55,"Espada pesada","Arma de gran peso y alto daño");

let Jon = new Guerrero("Jon Snow",28,false,"Stark");
let Arya = new Guerrero("Arya Stark",15,true,"Stark");
let Jaime = new Guerrero("Jaime Lannister",39,true,"Lannister");
let Tyrion = new Consejero("Tyrion Lannister",45,true,"Lannister","El ballesteo");
let Robert = new Rey("Robert Baratheon",65,true,"Baratheon",15);
/*-----------------------Agregar casa------------------------------------*/
poniente.agregarCasa(casStark);
poniente.agregarCasa(casLan);
poniente.agregarCasa(casBar);
/*-----------------------Asignar armas-----------------------------------*/
Jon.asignarArma(garra);
Arya.asignarArma(aguja);
/*-----------------------Asignar casas-----------------------------------*/
casStark.asignarCasa(Jon);
casStark.asignarCasa(Arya);
casLan.asignarCasa(Jaime);
casLan.asignarCasa(Tyrion);
casBar.asignarCasa(Robert);
/*-----------------------Proclamar Rey------------------------------------*/
poniente.proclamarRey(Robert);
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
Tyrion.presentarse();
Robert.presentarse();
/*-----------------------Armas----------------------------------*/
console.log("Armas: ")
aguja.explicarArma();
garra.explicarArma();
/*-----------------------Atques---------------------------------*/
Jon.luchar();
Jon.entrenar();
Tyrion.luchar();
Robert.luchar();
/*-----------------------Aconseja------------------------------- */
Tyrion.aconseja(Robert);
/*-----------------------Gobernar--------------------------------*/
Robert.gobernar();
