function calcular() {
    var txtp = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')
    var nacionalidade = (txtp.value)
    res.innerHTML = ('<p>Sua nacionalidade é:</p> ')
    if (nacionalidade = 'Brasil') {
        console.log('Brasileiro!')
    } else {
        console.log('Estrangeiro!')
    }
}