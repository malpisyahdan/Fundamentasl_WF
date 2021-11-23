const baseUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=3972fe62c1fecb0fec5a00350c83f10b&language=en-US&region=id";
const getMovie = () => {
  fetch(`${baseUrl}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderAllMovies(responseJson.results);
      }
    })
    .catch((error) => {
      showResponseMessage(error);
    });
};
const renderAllMovies = (movies) => {
  const listMovieElement = document.querySelector("#listTopMovie");
  listMovieElement.innerHTML = "";

  movies.forEach((movie) => {
    listMovieElement.innerHTML +=
      `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                #listTopMovie{
                    display: flex;
                    flex-wrap: wrap;
                    margin: 18px 8px;
                    justify-content: center;
                    width: auto;
                    max-height: 470px;
                }
                #topMovie{
                    margin-left: 650px;
                }
                .card-box{
                    margin: 20px;
                    box-shadow: 0 4px 10px 0 rgba(10, 10, 10, 0.2);
                    border-radius: 5px;
                    overflow: hidden;
                    flex-direction: column;
                    width: 180px;
                    height: auto;
                    padding-bottom: 10px;
                }
                #modal-dialog modal-lg{
                    margin-top: 50px;
                }
               
                .detail-info:hover{
                  color:yellow;
                  
                }
                .content{
                    padding: 10px;
                    height: 180px;
                }
                .button1{
                  float: left;
                  margin-left: 20px;
                  
                }
                .fan-art-movie {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
                @media screen and (max-width:600px){
                    #listTopMovie{
                        justify-content: center;
                    }
                    .card-box{
                        width: 80%;
                    }
                }
            </style>
            <div class="card-box">
                <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w500/` +
      movie.poster_path +
      `" alt="Fan Art">
                <div class="content">
                    <h4>${movie.original_title}</h4>
                    <p>Rating: ${movie.vote_average}</p>
                </div>
                <div class = "button1">
                    <a href="#button" class="detail-info btn btn-secondary stretched-link" data-toggle="modal" data-target="#exampleModal" 
                        data-id="${movie.id}">Details</a> </div>
            </div>`;
  });
};

$("#listTopMovie").on("click", ".detail-info", function () {
  $.ajax({
    url: `https://api.themoviedb.org/3/movie/` + $(this).data("id"),
    dataType: "json",
    data: {
      api_key: "3972fe62c1fecb0fec5a00350c83f10b",
    },
    success: function (movie) {
      $(".modal-body").html(
        `
                    <div class="container-fluid bg-warning">
                        <div class="row bg-warning">
                            <div class="col-md-4>
                                <ul class="list-group bg-warning">
                                    <img class="list-group-item bg-warning" src="https://image.tmdb.org/t/p/w500/` +
          movie.backdrop_path +
          `" alt="Fan Art" width="700px" heigth="50px">
                                    <li class="list-group-item bg-warning"><h3>` +
          movie.original_title +
          `</h3></li>
                                    <li class="list-group-item bg-warning"><h5>Release date : ` +
          movie.release_date +
          `</h5></li>
                                    <li class="list-group-item bg-warning"><h5>Duration : ` +
          movie.runtime +
          ` minute</h5></li>
                                    <li class="list-group-itembg-warning"><h5>Plot : ` +
          movie.overview +
          `</h5></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `
      );
    },
  });
});
const showResponseMessage = (message = "Check your internet connection") => {
  alert(message);
};
document.addEventListener("DOMContentLoaded", () => {
  getMovie();
});
