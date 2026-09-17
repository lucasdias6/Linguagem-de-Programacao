dispararAlerta = function(mensagem){
    console.log("Alerta crítico!")
}

const servidorCentral = {
    ip: "192.169.0.100",
    status: "online",
    temperatura: 85,

    verificarSistema(){
        if (this.temperatura > 80) {
            dispararAlerta()
        } else {
            console.log("Temperatura estável.")
        }

    }
}

servidorCentral.verificarSistema()