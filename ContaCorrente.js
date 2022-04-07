export class contaCorrente {
    agencia;
    saldo = 0;

    constructor (agencia, saldo) {
        this.agencia = agencia;
        this.saldo = saldo;
    }
}