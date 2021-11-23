class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
            <style>
             * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
            movie-item {
                margin: 18px 8px;
                box-shadow: 0 4px 10px 0 rgba(10, 10, 10, 0.2);
                border-radius: 5px;
                overflow: hidden;
                flex-direction: column;
                width: 200px;
                heigth: auto; 
            }
            .button1{
                  float: left;
                  margin-left: 20px;
                  margin-bottom : 10px;
                  
                }

           movie-item .fan-art-movie {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            movie-item .content {
                padding: 10px;
            }
           
            @media screen and (max-width:700px){
                movie-item{
                    width: 100%;
                    margin: 20px 30px;
                }
                img{
                    width: 100%;
                }
                
            </style>
            <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="Fan Art">
            <div class="content">
                <h4>${this._movie.original_title}</h4>
                <p>Rating: ${this._movie.vote_average}</p>
            </div>
            <div class = "button1">
                <a href="#" class="detail-info btn btn-secondary stretched-link" data-toggle="modal" data-target="#exampleModal" 
                    data-id="${this._movie.id}">Details</a>
                </div>
            `;

    $("movie-list").on("click", ".detail-info", function () {
      console.log($(this).data("id"));
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
                                <div class="row-fluid bg-warning">
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
                                            <li class="list-group-item bg-warning"><h5>Plot : ` +
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
  }
}

customElements.define("movie-item", MovieItem);
