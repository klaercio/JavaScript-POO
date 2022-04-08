import { cliente } from "./Cliente.js";

export class contaPoupanca {
    
    constructor (saldo, cliente, agencia) {
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    }
};
