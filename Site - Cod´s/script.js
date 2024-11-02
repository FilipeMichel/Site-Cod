document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // Verifica o tema atual no localStorage
    const currentTheme = localStorage.getItem("theme") || "dark-theme";
    document.body.className = currentTheme;

    // Atualiza as classes do cabeçalho e rodapé
    document.querySelector('.header').className = `header ${currentTheme}`;
    document.querySelector('.footer').className = `footer ${currentTheme}`;

    // Função para alternar entre temas
    themeToggle.addEventListener("click", () => {
        const newTheme = document.body.className === "dark-theme" ? "light-theme" : "dark-theme";
        document.body.className = newTheme;

        // Atualiza as classes do cabeçalho e rodapé
        document.querySelector('.header').className = `header ${newTheme}`;
        document.querySelector('.footer').className = `footer ${newTheme}`;

        localStorage.setItem("theme", newTheme); // Salva o tema no localStorage
    });
});
