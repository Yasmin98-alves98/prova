function controlarLampada() {
    let imgLampada = document.getElementById('lampada');
    let botao = document.getElementById('btnEnviar');

    if (imgLampada.getAttribute('src') === 'img/apagada.jpg') {
        imgLampada.setAttribute('src', 'img/acesa.jpg');
        botao.innerText = "Apagar";
    } else {
        imgLampada.setAttribute('src', 'img/apagada.jpg');
        botao.innerText = "Acender";
    }
}
document.getElementById('btnEnviar').addEventListener('click', controlarLampada);