import "../component/movie-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";
const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-List");

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
