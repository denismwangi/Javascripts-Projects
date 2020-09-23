const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
//get initially movie
getMovies(APIURL);

//for inspection
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData);
    showMovies(respData.results);


    /*
        respData.results.forEach((movie) => {

            const { poster_path, title, vote_average } = movie;

            const movieEL = document.createElement("div");
            movieEL.classList.add("movie");


            movieEL.innerHTML = `
            <img 
            src="${IMGPATH + poster_path}"
            alt="${title}"
            />
            <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>`

            main.appendChild(movieEL);

        });
        return respData;
       */
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";

    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

//search
function showMovies(movies) {

    //clear main first
    main.innerHTML = '';
    movies.forEach((movie) => {

        const { poster_path, title, vote_average, overview } = movie;

        const movieEL = document.createElement("div");
        movieEL.classList.add("movie");


        movieEL.innerHTML = `
        <img 
        src="${IMGPATH + poster_path}"
        alt="${title}"
        />
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview>
        <h3>overview</h3>
        ${overview}
        </div>`

        main.appendChild(movieEL);

    });
    //  return respData;

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const serachTerm = search.value;

    if (serachTerm) {
        getMovies(SEARCHAPI + serachTerm);
        search.value = "";


    }
});