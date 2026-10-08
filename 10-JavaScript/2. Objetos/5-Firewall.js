const firewall = {
    nivelAmeaça: 0,
    status: "Seguro",

    analisarTrafego(pacotesMaliciosos){
        this.nivelAmeaça += pacotesMaliciosos
        if (this.nivelAmeaça >= 100){
            this.status = "Bloqueio Total"
            return "ALERTA VERMELHO: conexões cortadas!"
        } else {
            return `Rede estável. Ameaça em ${this.nivelAmeaça}%`
        }
    }

}

console.log(firewall.analisarTrafego(100))

