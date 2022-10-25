"use strict";
class Account {
    constructor(name, lastname) {
        this.balanceInit = 0;
        this.name = name;
        this.lastname = lastname;
    }
    versamentoInit(oneDeposit) {
        this.balance = oneDeposit + this.balanceInit;
    }
    versamento2(twoDeposit) {
        this.balance = twoDeposit + this.balance;
    }
    prelievo(oneWithDraw) {
        this.balance < oneWithDraw ? console.log('Non hai sufficiente denaro') :
            this.balance = this.balance - oneWithDraw;
    }
    prelievo2(twoWithDraw) {
        this.balance = this.balance - twoWithDraw;
    }
}
let SonAccount = new Account("Mario", "Rossi");
SonAccount.versamentoInit(10);
SonAccount.versamento2(15);
SonAccount.prelievo(10);
SonAccount.prelievo2(5);
console.log(SonAccount);
