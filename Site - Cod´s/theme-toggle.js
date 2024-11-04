// Alternância de tema com persistência
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.toggle('light-theme', currentTheme === 'light');
}



themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    // Salva a preferência no localStorage
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Funcionalidade do modal
const modal = document.getElementById("terms-modal");
const termosLink = document.getElementById("termos-link");
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no link de Termos de Serviço, abra o modal
termosLink.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no "x", feche o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, feche-o
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
