const motor = {
    modelo: "Yamaha V6",
    tempAtual: 50,
    tempMaxima: 85,
}

console.log(`Modelo: ${motor.modelo} \nLimite de Segurança: ${motor.tempMaxima}`)

for (let i = 0; i <= 5; i++){
    motor.tempAtual += 10
    if (motor.tempAtual >= motor.tempMaxima){
        console.log("ALERTA! \nTemperatura atingiu 85 °C \nDeligando...")
        break
    } else {
        console.log("Funcionando normalmente")
    }
}