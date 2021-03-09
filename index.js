import {Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente ("Ana Beatriz", 11122233309); 
const cliente2 = new Cliente ("Alice", 88822233309);
const contaCorrenteAnaBeatriz = new ContaCorrente(cliente1, 1001); 
contaCorrenteAnaBeatriz.depositar(500); 
const conta2 = new ContaCorrente(cliente2, 1002); 


let valor = 200; 
contaCorrenteAnaBeatriz.trasferir(valor, conta2); 

console.log(ContaCorrente.numeroDeContas); 
