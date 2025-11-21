class MovieRepository {
    constructor(movieList) {
        this.movies = movieList;
    }

    search(keyword) {
        const lower = keyword.toLowerCase();
        return this.movies.filter(
            m => m.title.toLowerCase().includes(lower)
        );
    }
}
