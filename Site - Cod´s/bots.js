// Seleciona o botão de alternância de tema
const toggleThemeBtn = document.getElementById('toggle-theme');

// Adiciona um evento de clique para alternar o tema
toggleThemeBtn.addEventListener('click', () => {
// Alterna a classe 'dark-theme' no corpo da página
document.body.classList.toggle('dark-theme');

// Alterna o texto do botão conforme o tema ativo
if (document.body.classList.contains('dark-theme')) {
  toggleThemeBtn.textContent = 'Modo Claro';
} else {
  toggleThemeBtn.textContent = 'Modo Escuro';
}
});