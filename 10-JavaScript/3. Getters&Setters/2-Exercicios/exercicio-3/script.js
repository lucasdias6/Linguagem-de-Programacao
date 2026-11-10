const celular = {
    _volume: 50,

    get volume(){
        return this._volume;
    },

    set volume(novo){
        if (typeof novo !== "number"){
            console.log("ERRO: o volume deve ser um número")
        } else if (novo < 0){
            this._volume = 0
            console.log(`Volume no mínimo (${this._volume})`)
        } else if (novo > 100){
            this._volume = 100
            console.log(`Volume no máximo (${this._volume})`)
        } else {
            this._volume = novo
            console.log(`Volume: ${this._volume}`)
        } 
    }
}

celular.volume += 20; // Deve retornar volume 70
celular.volume += 50; // Deve retornar volume 100
celular.volume -= 30; // Deve retornar volume 70
celular.volume = -10; // Deve retornar volume 0
celular.volume += 60; // Deve retornar volume 60
celular.volume = "alto"; // Deve retornar erro
console.log(`Volume final: ${celular.volume}`); // Deve retornar 60

// Reposta: o "get" é chamado primeiro para ler o valor "celular._volume" e somente depois o "set" pode atribuir um valor novo.
