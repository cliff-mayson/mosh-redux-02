import {pipe} from 'lodash/fp';
import produce from 'immer';

const input = { tag: "JAVASCRIPT" }
const getTag = obj => obj.tag ?? '';
const toLower = str => str.toLowerCase();
const wrapInBrackets = str => `(${str})`;

const convert = pipe(getTag, toLower, wrapInBrackets);

console.log(convert(input));

const recipe = { 
    name: "Spaghetti Bolognese", 
    ingredients: ["egg",  "salt", "water"] 
}

const r1 = produce(recipe, draft => {
    draft.ingredients.push("cream");
});
console.log(r1);

const r2 = produce(r1, draft => {
    draft.ingredients = draft.ingredients.map(x => x === "egg" ? "egg white" : x);
});
console.log(r2);

const r3 = produce(r2, draft => {
    draft.ingredients = draft.ingredients.filter(x => x !== "egg white");
});
console.log(r3);

console.log(r4);

