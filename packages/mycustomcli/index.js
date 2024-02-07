#!/usr/bin/env node

// console.log(process.argv);
// const yargs = require('yargs');
// const {argv} =  yargs(process.argv);

const inquirer = require('inquirer');


const printFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    // console.log(data.moves[1]);
    const moves = pokemon.moves.map(({move}) => move.name);
    console.log(moves.slice(0, 5));
}

const promt = inquirer.createPromptModule();
promt({
    type: 'radio',
    name: 'name',
    message: 'Enter the name of the pokemon'
}).then((answers) => {
    console.log(answers);
    printFiveMoves(answers.name);
})

