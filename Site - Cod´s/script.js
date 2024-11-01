// script.js

const container = document.querySelector('.avaliacao-container');
const avaliacoes = Array.from(container.children);

// Para que a animação funcione, precisamos duplicar o conteúdo
// para garantir que sempre haja avaliações visíveis
const clone = container.innerHTML;
container.innerHTML += clone; // Duplica as avaliações

// Inicia a rolagem
// O JavaScript não é necessário para a animação contínua agora
