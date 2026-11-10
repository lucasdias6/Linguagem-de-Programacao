const personagem = {
    _nome: "Orelha",
    _hp: 100,

    get hp(){
        return this._hp;
    },

    set hp(novoHp){
        if (novoHp < 0){
            this._hp = 0;
            console.log("GAME OVER");
        } else if (novoHp > 100){
            this._hp = 100;
            console.log(`Vida máxima atingida`);
        } else {
            this._hp = novoHp;
            console.log(`HP atualizado para ${this._hp}`);
        }
    }
}

personagem.hp = 150;
personagem.hp = -20;
personagem.hp = 50;