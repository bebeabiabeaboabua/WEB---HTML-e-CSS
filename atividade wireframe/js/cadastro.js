




let botao = document.querySelector('#botao');
botao.addEventListener('click', function () {
    let usuario = document.querySelector('#usuario').value;
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;


    if (email === "" || senha === "" || usuario === "") {
        alert("Por favor, preencha todos os campos!");
        return; // para aqui se algum campo estiver vazio
    }

    alert(`Bem-vindo(a) ${usuario}! Conta criada com sucesso no email ${email}`);

    window.location.href = "logado.html";
    localStorage.setItem("nomeUsuario", usuario);


});