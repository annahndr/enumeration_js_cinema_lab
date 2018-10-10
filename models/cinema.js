const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.find_film_titles = function () {
  return this.films.map((film) => {
    return film.title;
  })
};

Cinema.prototype.find_film_by_title = function (title) {
  return this.films.find((film) => {
    if (film.title === title){
      return film;
    }
  })
};

Cinema.prototype.find_films_by_genre = function (genre) {
  return this.films.filter((film) => {
    if (film.genre === genre){
      return film;
    }
  })

};

Cinema.prototype.find_films_by_year = function (year) {
  return this.films.filter((film) => {
    if(film.year === year){
      return film;
    }
  })
};

Cinema.prototype.check_films_by_year = function (year) {
    return this.films.some((film) => {
      return film.year === year
    })
};

Cinema.prototype.find_long_films = function (duration) {
  return this.films.filter((film) => {
    if(film.length > duration){
      return film;
    }
  })
};

  Cinema.prototype.total_run_time = function () {
    return this.films.reduce((runningTotal, film) => {
      return runningTotal + film.length;
    }, 0);
  };

Cinema.prototype.films_by_property = function (property, value) {

  return this.films.filter((film) => {
    if(property in film){
      if(film[property] === value){
      return film;
    }
  }
})
};

// return this.films.filter(film => film[property] === search);
module.exports = Cinema;
