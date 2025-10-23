




let botao = document.querySelector('#botao');
botao.addEventListener('click', function () {
    let usuario = document.querySelector('#usuario').value;

    // valida se os campos estão preenchidos
    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos!");
        return; // para aqui se algum campo estiver vazio
    }

    // mostra alert com o email (pode adicionar senha se quiser, mas cuidado)
    alert(`Bem-vindo(a) de volta ${usuario}!`)

    // redireciona para logado.html
    window.location.href = "logado.html";

    localStorage.setItem("nomeUsuario", usuario);


});