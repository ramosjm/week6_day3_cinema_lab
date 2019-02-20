const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getTitles = function (film) {
  return this.films.map((film)=> film.title);
};

Cinema.prototype.findByTitle = function(title){
  return this.films.find(film=> film.title === title);
};

Cinema.prototype.findByGenre = function(genre){
  return this.films.filter(film=> film.genre === genre);
};

Cinema.prototype.hasFilmByYear = function(year){
  return this.films.some(film => film.year === year);
};
