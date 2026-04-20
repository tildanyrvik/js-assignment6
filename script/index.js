const library = [
    {
        title: "Taxi Driver",
        director: "Martin Scorsese",
        isWatched: false
    },
    {
        title: "Midsommar",
        director: "Ari Aster",
        isWatched: false
    },
    {
        title: "Whiplash",
        director: "Damien Chazelle",
        isWatched: true
    },
    {
        title: "The Shining",
        director: "Stanley Kubrick",
        isWatched: true 
    }
];


function addMovie(title) {
    library.push({
        title: title,
        isWatched: false,
    });
}
addMovie(title);

function listMovies() {
    library.forEach(movie => console.log(movie.title, movie.director, movie.isWatched));
}
listMovies();

function markAsWatched(title) {
    const movie = library.find(movie => movie.title === title)
    if (movie) {
        movie.isWatched = true;
    } else {
        alert("Movie not found");
    }   
}
markAsWatched();

let running = true;

function movieTracker () {
    while (running) {
            const choice = prompt(`
                Movie tracker
                1. Add Movie
                2. List Movies
                3. Mark Movie as Watched
                4. Exit
                Enter your choice:`);
        

        switch (choice) {
            case "1": {
                const title = prompt("Enter the title of the movie to add to library");
                addMovie(title);
                break;
            }
            case "2":
                listMovies();
                break;
            case "3": {
                const title = prompt("Enter the title of the movie to mark as watched");
                markAsWatched(title);
                break;
            }
            case "4":
                running = false;
                alert("Goodbye!");
                break;
            default:
                alert("Invalid choice.");
        }    
    }
}

