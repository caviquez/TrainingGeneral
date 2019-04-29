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




 /**
 * This method purpose is to create a new pokemon instance according to the information in
 * the section indicated as a parameter.
 * @return {void} it doesn't return anything.
 * @public
 */
function Pokemon (p_name, p_type, p_attack, p_defense) {
    this.name = p_name;
    this.type = p_type;
    this.attack = p_attack;
    this.defense = p_defense;
}

/**
 * This method purpose is to create a board that contains the rules for the effectiveness
 * @return {void} it doesn't return anything.
 * @public
 */
var battle_rules = {
    "fire" : {
        "grass": 2,
        "water": 0.5,
        "electric": 1
    },
    "grass": {
        "fire": 2,
        "water": 0.5,
        "electric": 1
    },
    "water": {
        "fire": 0.2,
        "grass": 0.5,
        "electric": 0.5
    },
    "electric": {
        "fire": 1,
        "grass": 1,
        "electric": 0.5
    }
}


/**
 * This method purpose is to obtain the effectiveness of an attack.
 * This call the function demage with the effectiveness value
 * @return {void} it doesn't return anything.
 * @public
 */
function battle (pokemon1, pokemon2)  {
    var defaul_value = 1;
    var effectiveness = battle_rules[pokemon1.type][pokemon2.type]|| defaul_value;
    demage(pokemon1, pokemon2, effectiveness);

}


/**
 * This method receives as parametter the two pokemons and the effectiveness value
 * The result is the demage value, this is calculated by a math formula 
 * @return {void} it doesn't return anything.
 * @public
 */
function demage (pokemon1, pokemon2, effectiveness){
    var demage = Math. round(50 * (pokemon1.attack / pokemon2.defense) * effectiveness);
    return demage;  
}


pokemon1 = new Pokemon ("Charizard", "fire", 84, 78);
pokemon2 = new Pokemon ("Bulbasaur", "grass", 49, 49);
console.log(battle(pokemon1, pokemon2))



