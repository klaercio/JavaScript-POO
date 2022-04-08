export class Autenticacao {
    static login (funcionario, senha) {
        return funcionario._senha == senha;
    }
}