function mostrarErro(mensagem) {
    let erro = document.getElementById('erro');
    if (erro) {
        erro.innerText = mensagem;
        erro.style.display = 'block';
    } else {
        alert(mensagem);
    }
}

function esconderErro() {
    let erro = document.getElementById('erro');
    if (erro) {
        erro.style.display = 'none';
    }
}

function gerarImagens() {
    esconderErro(); 

    let quantidade = Number(document.getElementById('inQtdImg').value);
    let canvas = document.getElementById('canvas');

    canvas.innerHTML = "";

    if (quantidade <= 0) {
        mostrarErro("Digite uma quantidade válida (maior que 0).");
        return;
    }
    
    for (let i = 0; i < quantidade; i++) {
        let img = document.createElement("img");
        img.src = "img/computador.png";
        img.alt = "Computador";
        img.classList.add("imagens");
        canvas.appendChild(img);
    }
}

document.getElementById("btnEnviar").addEventListener("click", gerarImagens);
