const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Define o tema atual com base nas preferências do usuário
const currentTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.toggle('light-theme', currentTheme === 'light');

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.remove("light-theme"); // Remove a classe do tema claro
});

// Define o ícone com base no tema atual
themeIcon.src = currentTheme === 'light' ? 
    'https://pnghq.com/wp-content/uploads/crescent-moon-outline-free-png-images.png' : 
    'https://img.freepik.com/vetores-premium/sol-no-fundo_592324-18630.jpg';

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Atualiza o tema e salva no localStorage
    const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    // Alterna o ícone de acordo com o tema
    themeIcon.src = newTheme === 'light' ? 
        'https://pnghq.com/wp-content/uploads/crescent-moon-outline-free-png-images.png' : 
        'https://img.freepik.com/vetores-premium/sol-no-fundo_592324-18630.jpg';
});
