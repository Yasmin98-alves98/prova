function mostrarErro(mensagem) {
    let erro = document.getElementById('erro');
    erro.innerText = mensagem;
    erro.style.display = 'block';
}

function esconderErro() {
    let erro = document.getElementById('erro');
    erro.style.display = 'none';
}

function mostrarSucesso(mensagem) {
    let sucesso = document.getElementById('sucesso');
    sucesso.innerText = mensagem;
    sucesso.style.display = 'block';
}

function esconderSucesso() {
    let sucesso = document.getElementById('sucesso');
    sucesso.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", () => {
        esconderErro();
        esconderSucesso();

        const data = document.getElementById("inData").value.trim();
        const cliente = document.getElementById("inCli").value.trim();
        const fone = document.getElementById("inFone").value.trim();
        const mail = document.getElementById("inMail").value.trim();
        const produto = document.getElementById("inProd").value.trim();
        const quantidade = document.getElementById("inQtd").value;
        const val = document.getElementById("inVal").value;

        if (data === "") return mostrarErro("O campo data não pode estar vazio!");
        if (cliente.length < 5) return mostrarErro("O nome do cliente deve ter pelo menos 5 caracteres!");
        if (fone.length < 5) return mostrarErro("O telefone deve ter pelo menos 5 caracteres!");
        if (mail.length < 5) return mostrarErro("O e-mail deve ter pelo menos 5 caracteres!");
        if (produto.length < 5) return mostrarErro("O nome do produto deve ter pelo menos 5 caracteres!");
        if (quantidade <= 0) return mostrarErro("A quantidade deve ser positiva!");
        if (val <= 0) return mostrarErro("O valor unitário deve ser positivo!");

        mostrarSucesso("Dados enviados com sucesso!");
    });
});

