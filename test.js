
// Grab access to the div with the id of "movies-container" for use later
const moviesContainer = document.getElementById("movies-container")

// This function is called when the button is clicked
async function onFetchMoviesClick() {
    // Make a GET request to the json-server API and parse the data from the response body
    // If the json-server isn't currently running and watching the db.json file, this code will error out
    const response = await fetch("http://localhost:3005/movies")
    const movieList = await response.json()

    // Set the contents of the movies-container div to be a string of HTML with a div for each movie
    // The map will map each movie object to a string, then join will join that mapped array of strings
    // into one long string, with an empty space between each div
    moviesContainer.innerHTML = movieList.map(
        movie => `<div>
            <h3>${movie.title}</h3>
            <p>${movie.genreId}</p>
        </div>`
    ).join("")
}