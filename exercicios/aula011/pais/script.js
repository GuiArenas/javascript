function calcular() {
    var txtp = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')
    var nacionalidade = (txtp.value)

    var res = "Brasil";

    if (nacionalidade === "Brasil") {
        console.log("Eu sou Brasileiro!");
    } else {
        console.log("Eu sou estrangeiro!");
    }
}