var agora = new Date()
var hora = agora.getHours()
var fundo = document.getElementsByTagName("body")[0]
var titulo = document.getElementsByTagName("h1")[0]
var boa = document.querySelector('#boa')
var infoh = document.querySelector('#infoh')
var fotoMadru = document.querySelector('#fotoMadru')
var fotoManha = document.querySelector('#fotoManha')
var fotoTarde = document.querySelector('#fotoTarde')
var fotoNoite = document.querySelector('#fotoNoite')
var copy = document.querySelector('#copy')

infoh.innerHTML = `<p>Agora São ${hora} horas`

if (hora <= 6) {
    titulo.style.color = 'white'
    copy.style.color = 'white'
    fundo.style.background = "#242424"
    fotoMadru.style.display = 'inline'
    boa.innerHTML = 'Boa Madrugada'
} else if (hora > 6 && hora <= 12) {
    fundo.style.background = "#1cffa8"
    fotoManha.style.display = 'inline'
    boa.innerHTML = 'Bom Dia'
} else if (hora > 12 && hora <= 18) {
    fundo.style.background = "#1cceff"
    fotoTarde.style.display = 'inline'
    boa.innerHTML = 'Boa Tarde'
}  else if (hora > 18) {
    titulo.style.color = 'white'
    copy.style.color = 'white'
    fundo.style.background = "#521cbf"
    fotoNoite.style.display = 'inline'
    boa.innerHTML = 'Boa Noite'
} else {
    boa.innerHTML = '[Erro] Sem Hora Valida'
}
