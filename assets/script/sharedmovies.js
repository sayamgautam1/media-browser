//Function for creating movie card. This is called on home page and favourites page, so was easier to create in new js file
function createMovieCard(movie) {

    let movieSearchContainer = document.createElement("div");
    movieSearchContainer.classList.add("search-display");

    // add media poster
    let moviePosterImg = document.createElement("img");
    moviePosterImg.setAttribute("src", movie.mediaImage);
    movieSearchContainer.appendChild(moviePosterImg);

    // get movie title
    let movieTile = document.createElement("p");
    movieTile.appendChild(document.createTextNode(movie.mediaTitle));
    movieSearchContainer.appendChild(movieTile);

    // created div to add more info btn and add to fav btn
    let buttonDiv = document.createElement("div");

    //add more info btn
    let moreInfoEL = document.createElement("button");
    moreInfoEL.classList.add("moreinfo-btn");
    moreInfoEL.appendChild(document.createTextNode("More Info"));
    buttonDiv.appendChild(moreInfoEL);
    movieSearchContainer.appendChild(buttonDiv);
    return movieSearchContainer;
}