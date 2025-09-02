document.getElementById("btnEnviar").addEventListener("click", calcular);

function calcular() {
    let valorPedido = parseFloat(document.getElementById("inValorPedido").value);

    if (isNaN(valorPedido) || valorPedido <= 0) {
        alert("Digite um valor válido para o pedido!");
        return;
    }

    let percDesc = 0;
    if (valorPedido >= 2000) {
        percDesc = 1.5;
    } else if (valorPedido >= 1500) {
        percDesc = 1.0;
    } else if (valorPedido >= 1000) {
        percDesc = 0.8;
    } else if (valorPedido >= 500) {
        percDesc = 0.5;
    }

    let valDesc = (valorPedido * percDesc) / 100;
    let valFinal = valorPedido - valDesc;

    document.getElementById("inPercDesc").value = percDesc;
    document.getElementById("inValDesc").value = valDesc.toFixed(2);
    document.getElementById("inValFinal").value = valFinal.toFixed(2);
}
