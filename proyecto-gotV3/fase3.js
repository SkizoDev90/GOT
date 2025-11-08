import { Arma } from "./Clases/Arma.js";
import { Casa } from "./Clases/Casa.js";
import {Guerrero} from "./Clases/presonajesEspeciales/Guerrero.js";
import {Batalla} from "./Clases/Batalla.js";
/*----------------------------Creacion--------------------------- */
let casaStark = new Casa("Stark","Hasta el 40 de mayo no te quites el sayo");
let casaLannister = new Casa("Lannister","Aqui no somos morosos");
/*----------------------------Armas------------------------------*/
const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60);

// === GUERREROS DE LA CASA STARK === //
const jon = new Guerrero("Jon Snow", 25, true, casaStark);
const arya = new Guerrero("Arya Stark", 18, true, casaStark);
const robb = new Guerrero("Robb Stark", 22, true, casaStark);
const brienne = new Guerrero("Brienne de Tarth", 30, true, casaStark);

// === GUERREROS DE LA CASA LANNISTER === //
const jaime = new Guerrero("Jaime Lannister", 32, true, casaLannister);
const cersei = new Guerrero("Cersei Lannister", 34, true, casaLannister);
const tyrion = new Guerrero("Tyrion Lannister", 30, true, casaLannister);
const gregor = new Guerrero("Gregor Clegane", 38, true, casaLannister);
/*-----------------------Asignar armas-----------------------------------*/
jon.asignarArma(garra);
arya.asignarArma(aguja);
robb.asignarArma(espadaLarga);
brienne.asignarArma(hacha);
jaime.asignarArma(filoRojo);
cersei.asignarArma(lanzaDeCaza);
tyrion.asignarArma(ballesta);
gregor.asignarArma(hacha);

// === AÑADIR PERSONAJES A LAS CASAS === //
casaStark.asignarCasa(jon);
casaStark.asignarCasa(arya);
casaStark.asignarCasa(robb);
casaStark.asignarCasa(brienne);

casaLannister.asignarCasa(jaime);
casaLannister.asignarCasa(cersei);
casaLannister.asignarCasa(tyrion);
casaLannister.asignarCasa(gregor);

//=== MOSTRAR MIEMBROS==== //
casaStark.mostrarMiembros();
casaLannister.mostrarMiembros();

const batallaBastardos = new Batalla();
console.log("---------------------COMIENZA LA BATALLA------------------");
batallaBastardos.iniciarBatalla(casaStark,casaLannister);
//=== MOSTRAR MUERTOS ===//
console.log("-Estos son los fallecidos:");
console.log("");
batallaBastardos.mostrarGuerrerosMuertosEnBatalla();
