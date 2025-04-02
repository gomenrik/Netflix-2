// Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(() => {
        toggleLoading();
    }, 2000);

    let trendingContainer = document.querySelector("#trendingMovies");
    trendingContainer.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                    <img src="img/posters/${i}.jpg" alt="${i}">
                </a>`;
    }
});

// Trending Movies Scroll
const containerTrendingMovies = document.getElementById("trendingMovies");

let scrollIntervalTrendingMovies;
let scrollDirectionTrendingMovies = 0;

containerTrendingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTrendingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; // Distancia das bordas para aativar o scroll

    if (mouseX < boundingRect.left + threshold) {
        scrollDirectionTrendingMovies = -1; //scroll to left
        containerTrendingMovies.style.cursor = "url('/img/arrow-left.png'), auto";
    } else if (mouseX > boundingRect.right - threshold) {
        scrollDirectionTrendingMovies = 1; //scroll to right
        containerTrendingMovies.style.cursor = "url('/img/arrow-right.png'), auto";
    } else {
        scrollDirectionTrendingMovies = 0; //stop scroll
        containerTrendingMovies.style.cursor = "pointer"; // default pointer
    }
});

containerTrendingMovies.addEventListener("mouseleave", () => {
    scrollDirectionTrendingMovies = 0;
    containerTrendingMovies.style.cursor = "default";
});

// Função para scroll contínuo
function autoScrollTrendingMovies() {
    if (scrollDirectionTrendingMovies !== 0) {
        containerTrendingMovies.scrollLeft += scrollDirectionTrendingMovies * 6; // Ajuste a velocidade (5 = rapido)
    }
}

scrollIntervalTrendingMovies = setInterval(autoScrollTrendingMovies, 16); // ~60 FPS