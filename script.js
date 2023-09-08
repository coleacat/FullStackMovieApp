const APILINK = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e40256f14fab7e30089fdc292a482bdf';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/movie?&api_key=e40256f14fab7e30089fdc292a482bdf&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');   // create new div element for each movie
            div_card.setAttribute('class', 'card');
            
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');
            
            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');


            title.innerHTML = `${element.title}`;    //
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);


            main.appendChild(div_row);

        });
    });
}

// remove all the movies that were initially searched
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;
    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";  // clear search
    }

})