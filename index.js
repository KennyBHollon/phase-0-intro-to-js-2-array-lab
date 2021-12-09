// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Used .push() to add "Ralph" to end of Array - Destructive
function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

// Used .unshift() to add "Bob" to the beginning of Array - Destructive
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

// Used .pop() to remove last element in the Array - Destructive
function destructivelyRemoveLastCat() {
    cats.pop();
};

// Used .shift() to remove first element in the Array - Desturctive
function destructivelyRemoveFirstCat() {
    cats.shift();
};

// Used the Spread Operator ... , added "Broom" to end of the array
function appendCat(name) {
    const allCats =  [...cats, "Broom"];
    return allCats;
};

// Used the Spread Operator ... , added "Arnold" to the beginning of the array
function prependCat(name) {
    const allCats = ["Arnold", ...cats];
    return allCats;
};

// Used .slice() to take away the last element in the Array, and had the splice be the value of a new variable - Non Destructive
function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
};

// Used .slice() to take away the first element in the Array, and had the splice be the value of a new variable - Non Destructive
function removeFirstCat() {
    const newCats = cats.slice (1)
    return newCats;
};


