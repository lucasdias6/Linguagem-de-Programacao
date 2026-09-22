const drone = {
    modelo: "R2D2",
    bateria: 100,
    cameraLigada: false,

    ativarCamera(){
        this.cameraLigada = true
        console.log(`Câmera do drone ${this.modelo} ${this.cameraLigada}!`)
        console.log(`Bateria: ${this.bateria}%`)
    }
           
}

drone.ativarCamera()