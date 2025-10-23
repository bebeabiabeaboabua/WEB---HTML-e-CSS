window.addEventListener('DOMContentLoaded', () => {
    let perfil = document.querySelector('#perfil');

    // pega o nome salvo no localStorage
    let nomeUsuario = localStorage.getItem("nomeUsuario");

    if (nomeUsuario) {
        perfil.innerText = `Olá, ${nomeUsuario}! ⋆.˚ `;
    }
});
