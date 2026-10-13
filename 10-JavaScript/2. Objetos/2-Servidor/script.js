dispararAlerta = function(mensagem){
    console.log(`\n[ALERTA CRÍTICO!]: ${mensagem}`)
};

const servidorCentral = {
    ip: "192.169.0.100",
    status: "online",
    temperatura: 85,

    verificarSistema(){
        if (this.temperatura > 80) {
            dispararAlerta("Temperatura acima de 80°C")
            this.status = "offline"
        } else {
            console.log("Temperatura estável.")
        }

    },

    imprimirRelatorio(){
        console.log(`\n[RELATÓRIO]`)
        console.log(`IP: ${this.ip}`)
        console.log(`Status: ${this.status}`)
        console.log(`Temperatura: ${this.temperatura}°C`)
    }

};

servidorCentral.verificarSistema()
servidorCentral.imprimirRelatorio()