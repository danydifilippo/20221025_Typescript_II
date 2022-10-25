class Account {
    private name: string
    private lastname: string
    balanceInit: number = 0
    balance?: number

    constructor (name: string, lastname: string){
        this.name = name
        this.lastname = lastname
    }

    versamentoInit(oneDeposit:number){
        this.balance = oneDeposit + this.balanceInit
    }
    versamento2(twoDeposit:number){
        this.balance = twoDeposit + this.balance
    }

    prelievo(oneWithDraw:number){
        this.balance < oneWithDraw ? console.log('Non hai sufficiente denaro') :
        this.balance = this.balance - oneWithDraw;
        
    }

    prelievo2(twoWithDraw:number){
        this.balance = this.balance - twoWithDraw
    }

}

let SonAccount = new Account("Mario","Rossi")

SonAccount.versamentoInit(10)
SonAccount.versamento2(15)
SonAccount.prelievo(10)
SonAccount.prelievo2(5)

console.log(SonAccount);
