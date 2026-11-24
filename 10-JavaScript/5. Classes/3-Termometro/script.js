class Termometro {
    constructor(celsius){
        this._celsius = celsius;
    }

    get celsius(){
        return this._celsius;
    }

    set celsius(valor){
        if (valor <= -50, valor >= 60){
            console.log(`Temperatura inválida: ${valor} °C \nUse um valor entre -50 e 60.`)
        } else {
            this._celsius = valor 
            console.log(`Temperatura ajustada para ${this._celsius} °C`)
        }
    }

    get fahrenheit(){
        return this._celsius * 9 / 5 + 32
    }
}

const t = new Termometro(20);

console.log(t.celsius);      // imprime o resultado do método set celsius. Nessa caso: Temperatura ajustada para 20°C
console.log(t.fahrenheit);   // imprime o resultado do método get fahrenheit. 
t.celsius = 35;              // muda o valor do termometro para 35
console.log(t.fahrenheit);   // imprime o resultado do método get fahrenheit.
t.celsius = 100;             // muda o valor do termometro para 100
console.log(t.celsius);      // erro