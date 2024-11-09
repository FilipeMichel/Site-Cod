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

    // Função para buscar avaliações do servidor
    async function fetchAvaliacoes() {
        const response = await fetch('https://codstudios.vercel.app/'); // URL da sua API
        const avaliacoes = await response.json();
        
        const container = document.getElementById('avaliacao-container');
        container.innerHTML = ''; // Limpa avaliações antigas

        avaliacoes.forEach(avaliacao => {
            const div = document.createElement('div');
            div.classList.add('avaliacao');
            div.innerHTML = `<div class="estrelas">⭐⭐⭐⭐⭐</div>
                             <div class="texto">“${avaliacao.texto}” - ${avaliacao.autor}</div>`;
            container.appendChild(div);
        });
    }

    // Atualizar a cada 5 segundos
    setInterval(fetchAvaliacoes, 5000);
    
    // Chama a função na primeira vez para carregar as avaliações
    fetchAvaliacoes();
});
