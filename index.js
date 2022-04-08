import {cliente} from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";
import { contaPoupanca } from "./ContaPopauca.js";
import { Gerente } from "./Gerente.js";
import { Diretor } from "./Diretor.js";
import { Autenticacao } from "./Autenticacao.js";

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

const contaPoup = new contaPoupanca(50, cliente1, cliente1.contaCorrente.agencia);

console.log(contaPoup);

const diretor = new Diretor("Rodrigo", 10000, 12345678);
const gerente = new Gerente("Ricardo", 5000, 12345678);


diretor.cadastrarSenha("1234567");

const estaLogado = Autenticacao.login(diretor, "12345678");

console.log(estaLogado);

