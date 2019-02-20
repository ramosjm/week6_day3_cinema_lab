const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getTitles = function (film) {
  return this.films.map((film)=> film.title);
};
