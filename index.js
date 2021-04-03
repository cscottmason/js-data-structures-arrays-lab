// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
drivers.push("Ralph");
}

function destructivelyPrependDriver(){
    drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(){
    const newArray = [...drivers, "Broom"];
    return newArray;
}

function prependDriver(){
const newaArray2 = [ "Arnold", ...drivers];
return newaArray2;
}

function removeLastDriver(){
    const newArray3 = drivers.slice(0,2);
    return newArray3;
}

function removeFirstDriver(){
    const newArray4 = drivers.slice(-2);
    return newArray4;
}