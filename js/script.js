const form = document.querySelector("#formLogin");
const usuario = document.querySelector("#txUsuario");
const senha = document.querySelector("#txSenha");
const confirmar = document.querySelector("#txConfirmar");
const mensagemSenha = document.querySelector("#mensagemSenha");
const mensagemErro = document.querySelector("#mensagemErro");
const resultado = document.querySelector("#resultado");

senha.addEventListener("input", function () {
    const tamanho = senha.value.length;

    mensagemSenha.classList.remove("fraca", "intermediaria", "forte");

    if (tamanho < 3) {
        mensagemSenha.textContent = "Senha fraca";
        mensagemSenha.classList.add("fraca");
    } else if (tamanho < 6) {
        mensagemSenha.textContent = "Senha intermediária";
        mensagemSenha.classList.add("intermediaria");
    } else {
        mensagemSenha.textContent = "Senha forte";
        mensagemSenha.classList.add("forte");
    }
});

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    mensagemErro.textContent = "";
    resultado.textContent = "";

    if (usuario.value.trim().length < 3) {
        mensagemErro.textContent = "O usuário deve ter no mínimo 3 caracteres.";
        return;
    }

    if (senha.value !== confirmar.value) {
        mensagemErro.textContent = "As senhas devem ser iguais.";
        return;
    }

    resultado.innerHTML = "<h2>Dados corretos!</h2>" +
        "<p>Usuário: " + usuario.value + "</p>" +
        "<p>Senha: " + senha.value + "</p>";
});
