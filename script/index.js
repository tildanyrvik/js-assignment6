while (running) {
        const choice = prompt(`
            Movie tracker
            1. Add Movie
            2. List Movies
            3. Mark Movie as Read
            4. Exit
            Enter your choice:`);
    

    switch (choice) {
        case "1":
            addMovie();
            break;
        case "2":
            listMovies();
            break;
        case "3":
            const title = prompt("Enter the title of the movie to mark as read");
            markAsRead(title);
            break;
        case "4":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }    
}



