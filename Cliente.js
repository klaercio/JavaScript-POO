import {contaCorrente} from "./ContaCorrente.js";

export class cliente{
    static numeroDeContas = 0;
    nome;
    _cpf;
    contaCorrente = new contaCorrente;

    get cpf() {
        return this._cpf;
    }

    sacar(valor) {
        if (!(this.contaCorrente.saldo >= valor)){
            console.log("Saldo insuficiente");
            return;
        }
        
        console.log(`R$ ${valor} Sacados com sucesso`);
        this.contaCorrente.saldo -= valor;
        return;
        
    }

    depositar(valor) {
        if (valor <= 0) 
            return;

        this.contaCorrente.saldo += valor;
        console.log(`Deposito de R$${valor} efetuado com sucesso`);
    }

    transferir(valor, conta) {
        if (this.contaCorrente.saldo < valor) {
            return console.log("Saldo insuficiente");
        }
        
        this.contaCorrente.saldo -= valor;
        conta.contaCorrente.saldo += valor;
    }

    constructor(nome, cpf, contaCorrente) {
        this.nome = nome;
        this._cpf = cpf;
        this.contaCorrente = contaCorrente;
        cliente.numeroDeContas += 1;
    }
}