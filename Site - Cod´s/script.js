document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // Verifica o tema atual no localStorage
    const currentTheme = localStorage.getItem("theme") || "dark-theme";
    document.body.className = currentTheme;

    // Evento de clique para alternar o tema
    themeToggle.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark-theme") ? "light-theme" : "dark-theme";
        document.body.className = newTheme;
        
        // Salva o tema no localStorage
        localStorage.setItem("theme", newTheme);
    });
});