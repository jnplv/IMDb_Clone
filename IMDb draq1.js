(function () {

  // Get the "title" element and set its content to the value stored in "movieName" key of localStorage
    const title = document.getElementById("title");
    title.innerHTML = localStorage.getItem("movieName");

     // Get other DOM elements
    const year = document.getElementById("year");
    const runtime = document.getElementById("runtime");
    const rating = document.getElementById("rating");
    const poster = document.getElementById("poster");
    const plot = document.getElementById("plot");
    const directorsName = document.getElementById("director-names");
    const castName = document.getElementById("cast-names");
    const genre = document.getElementById("genre");
   // Call the function to fetch movie data using the movie title
    fetchMovies(title.innerHTML);
  
    async function fetchMovies(search) {
      const url = `https://www.omdbapi.com/?t=${search}&type=movie&apikey=28a2ff0`;
      try {
        const response = await fetch(url);
        const data = await response.json();


   // Update the webpage elements with the fetched movie data
        year.innerHTML = data.Year;
        runtime.innerHTML = data.Runtime;
        rating.innerHTML = `${data.imdbRating}/10`;
        poster.setAttribute("src", `${data.Poster}`);
        plot.innerHTML = data.Plot;
        directorsName.innerHTML = data.Director;
        castName.innerHTML = data.Actors;
        genre.innerHTML = data.Genre;
      } catch (err) {
         // Log any errors to the console
        console.log(err);
      }
    }
  })();