"use strict";
class Account {
    constructor(name, lastname) {
        this.balanceInit = 0;
        this.name = name;
        this.lastname = lastname;
        this.balance = 0;
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
class AccountInterest extends Account {
    addInterest() {
        this.interessi = (this.balance * 10) / 100;
        this.balance = this.balance + this.interessi;
    }
}
let MotherAccount = new AccountInterest("Maria", "Verdi");
MotherAccount.versamentoInit(30);
MotherAccount.addInterest();
console.log(MotherAccount);
let sonLabel = document.getElementById('sonLabel');
sonLabel.innerHTML = `<h1>Conto corrente del sig. ${SonAccount.lastname} ${SonAccount.name}</h1>
<p>Bilancio attuale ${SonAccount.balance} €</p>
<label for="onedeposit">Primo deposito</label>
<input type="number" name="onedeposit" />
<label for="deposit">depositi</label>
<input type="number" name="deposit" />
<label for="onedeposit">Prelievi</label>
<input type="number" name="onedeposit" />`;
let motherLabel = document.getElementById('motherLabel');
motherLabel.innerHTML = `<h1>Conto corrente del sig. ${MotherAccount.lastname} ${MotherAccount.name}</h1>
<p>Bilancio attuale ${MotherAccount.balance} €</p>
<p>Interessi su deposito attuale ${MotherAccount.interessi} €</p>
<label for="onedeposit">Primo deposito</label>
<input type="number" name="onedeposit" />
<label for="deposit">depositi</label>
<input type="number" name="deposit" />
<label for="onedeposit">Prelievi</label>
<input type="number" name="onedeposit" />`;
