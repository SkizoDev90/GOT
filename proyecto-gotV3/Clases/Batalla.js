export class Batalla{
    #muertes;
    constructor(){
        this.#muertes=[];
    }
    getMuertes(){
        return this.#muertes;
    }
    setMuertes(valor){
        this.#muertes.push(valor);
    }
    iniciarBatalla(casaS,casaL){
        /*mientras una casa tenga guerreros*/
        while(casaS.getMembers().length!=0 && casaL.getMembers().length!=0){
            /*Elijo un atacante aleatorio de entre las dos casas para que se puedan atacar todos a la vez*/
            const atacanteS = (Math.floor(Math.random()*casaS.getMembers().length));
            const atacanteL = (Math.floor(Math.random()*casaL.getMembers().length));
            console.log("__________________________________________________________________________________________");
            console.log(`${casaS.getMembers()[atacanteS].getName()} contra ${casaL.getMembers()[atacanteL].getName()}:`);
            /*Elijo quien ataca primero metiendolo en un array y haciendo otro random entre el array*/
            const opciones=[atacanteS,atacanteL];
            const atacaPrimero=opciones[Math.floor(Math.random()*opciones.length)];
            /*Guardo el guerrero en una variable lo he tenido que hacer por que me estaba haciendo un lio*/
            const guerreroS=casaS.getMembers()[atacanteS];
            const guerreroL=casaL.getMembers()[atacanteL];
            /*comparo para saber que casa ataca a cual primero para hacer el primer ataque aleatorio*/
            if (atacaPrimero==atacanteS){
                guerreroS.atacar(guerreroL);
                /*primer ataque*/
                if(!guerreroL.recibirDaño(guerreroS.getArm().getDamage())){
                    this.#muertes.push(guerreroL);
                    /*Si ha retornado false quiere decir que el personaje a muerto y tenemos que quitarlo de la casa*/
                    casaL.getMembers().splice(atacanteL,1);
                };
                /*Segundo ataque*/
                /*Si siguen con vida contraataca esto se lo puse por que no cai y cuando mataba al contrincante si lo quitaba del array le tocaba atacar aun muerto*/
                if(guerreroL.getVida()>0){
                    guerreroL.atacar(casaS.getMembers()[atacanteS]);
                    if(!guerreroS.recibirDaño(guerreroL.getArm().getDamage())){
                        this.#muertes.push(guerreroS);
                        /*Si ha retornado false quiere decir que el personaje a muerto y tenemos que quitarlo de la casa*/
                        casaS.getMembers().splice(atacanteS,1);
                    };
                }
            }else{
                /*primer ataque*/
                guerreroL.atacar(casaS.getMembers()[atacanteS]);
                if(!guerreroS.recibirDaño(guerreroL.getArm().getDamage())){
                    this.#muertes.push(guerreroS);
                    /*Si ha retornado false quiere decir que el personaje a muerto y tenemos que quitarlo de la casa*/
                    casaS.getMembers().splice(atacanteS,1);
                };
                /*Segundo ataque*/
                /*Si siguen con vida contraataca*/
                if(guerreroS.getVida()>0){
                    guerreroS.atacar(guerreroL);
                    if(!casaL.getMembers()[atacanteL].recibirDaño(guerreroS.getArm().getDamage())){
                        this.#muertes.push(guerreroL);
                        /*Si ha retornado false quiere decir que el personaje a muerto y tenemos que quitarlo de la casa*/
                        casaL.getMembers().splice(atacanteL,1);
                    };
                }
            }
            console.log("");
            console.log(`${guerreroS.getName()}:${guerreroS.getVida()} || ${guerreroL.getName()}:${guerreroL.getVida()}`);
            console.log("");
        }
        console.log("-Ganador de la guerra:");
        (casaS.getMembers().length==0)?console.log(`Esta guerra la gana ${casaL.getNameHouse()}`):console.log(`Esta guerra la gana ${casaS.getNameHouse()}`);
        console.log("");
    }
    mostrarGuerrerosMuertosEnBatalla(){
        this.#muertes.forEach(personaje => {
            console.log(`${personaje.getName()} de la casa ${personaje.getHouse().getNameHouse()}`);
        });
    }
}