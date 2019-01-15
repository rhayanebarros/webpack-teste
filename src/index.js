const testTranspile = () => console.log('ES6 Config Funcionando!');
import createCard from "./card";
import "./index.css";

createCard(
    "Im learning webpack!",
    "Rhayane Barros Cassemiro"
);

console.log("foo");

testTranspile();