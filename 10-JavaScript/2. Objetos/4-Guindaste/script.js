const guindaste = {
    operador: "Benjamin Netanyahu",
    cargaAcumulada: 0,
    limiteSeguranca: 50,
    pesoContêiner: 15
}

console.log(`Operador: ${guindaste.operador} \nLimite Segurança: ${guindaste.limiteSeguranca}t`)

for (let i = 1; i <= 4; i++){
    guindaste.cargaAcumulada += 15
    if (guindaste.cargaAcumulada >= guindaste.limiteSeguranca){
        console.log("ALERTA DE SOBRECARGA!")
        break
    } else {
        console.log(`Contêiner içado: ${i} \nCarga acumulada: ${guindaste.cargaAcumulada}`)
    }
}