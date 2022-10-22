// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}


function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let newCats = [...cats, 'Broom'];
    return newCats;

}

function prependCat(name) {
    let newCats = ["Arnold", ...cats];
    return newCats;
}
function removeLastCat() {
    let newCats = cats.slice(0, - 1);
    return newCats;
}
function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
}






/*
const cats = ["Milo", "Otis", "Garfield"];
cats;
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}


function appendCat(name) {
    let name1 = [...cats, name];


    return name1;
}

function prependCat(name) {
    let name2 = [name, ...cats];

    return name2;

}


function removeLastCat() {
    let newCats = cats.slice(0, cats.length - 1);
    return newCats;
}


function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
}

*/