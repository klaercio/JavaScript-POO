import {cliente} from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const ricardo = new contaCorrente(10001, 100);

const cliente1 = new cliente("Ricardo", "11122233309", ricardo);

const alice=  new contaCorrente(1005, 0);

const cliente2 = new cliente("Alice", "22233311187", alice);



console.log(cliente1, cliente2);

cliente1.sacar(101);

cliente1.depositar(200);

cliente1.transferir(500, cliente2);

console.log(cliente1, cliente2);

console.log("quantidade de clientes " + cliente.numeroDeContas);