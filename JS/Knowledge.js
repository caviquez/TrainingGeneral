/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: Knowledge.js
 */
/*
 * Author:      cviquez@intelligentsense.com
 * Date:        22/04/2019
 * Description: POKEMON asignation.
 */

function Pokemon (p_name, p_type, p_attack, p_defense) {
    this.name = p_name;
    this.type = p_type;
    this.attack = p_attack;
    this.defense = p_defense;
}
    

function battle (pokemon1, pokemon2){
    var effectiveness;
    if(pokemon1.type == "fire" && pokemon2.type == "grass" || pokemon1.type == "water" && pokemon2.type == "grass"){
        effectiveness = 2;
        return demage(pokemon1, pokemon2, effectiveness);
    }else{
        if(pokemon1.type == "fire" && pokemon2.type == "water" || pokemon1.type == "water" && pokemon2.type == "electric"){
            effectiveness = 0.5;
            return demage(pokemon1, pokemon2, effectiveness);
        }else{
            if(pokemon1.type == "fire" && pokemon2.type == "electric" || pokemon1.type == "grass" && pokemon2.type == "electric"){
                effectiveness = 1;
                return demage(pokemon1, pokemon2, effectiveness);
            }
        }
    }
}


function demage (pokemon1, pokemon2, effectiveness){
    var demage = Math. round(50 * (pokemon1.attack / pokemon2.defense) * effectiveness);
    return demage;  
}


pokemon1 = new Pokemon ("Charizard", "fire", 84, 78);
pokemon2 = new Pokemon ("Bulbasaur", "grass", 49, 49);
console.log(battle(pokemon1, pokemon2))



