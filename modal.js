function modal() {
    let fundo = document.body
    let alerta = document.getElementById("alerta")
    alerta.style.display = "block"
    fundo.className= "bloq"
    cab.className = "bloq2"
}

function fecharmodal() {
    let fundo = document.body
    let cab = document.getElementById("cab")
    let alerta = document.getElementById("alerta")
    alerta.style.display = "none"
    fundo.className = ""
    cab.className = "cabecalho"
}
