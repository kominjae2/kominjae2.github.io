class UIController {
    constructor() {
        this.cardContainer = document.getElementById("card-container");
        this.cardLink = document.getElementById("card-link");
        this.cardPoster = document.getElementById("card-poster");
        this.cardTitle = document.getElementById("card-title");

        this.posterColumn = document.querySelector(".poster-column");
        this.movieColumn = document.querySelector(".movie-column");
        this.upcomingColumn = document.querySelector(".upcoming-column");
    }

    showCard(movie) {
        this.cardLink.href = movie.url;
        this.cardPoster.src = movie.poster;
        this.cardTitle.textContent = movie.title;
        this.cardContainer.style.display = "block";

        this.posterColumn.style.display = "none";
        this.movieColumn.style.display = "none";
        this.upcomingColumn.style.display = "none";
    }

    hideCard() {
        this.cardContainer.style.display = "none";
    }
}
