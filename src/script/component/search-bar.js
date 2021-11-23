class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .search-container {
                max-width: 500px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 3px;
                border-radius: 28px;
                display: flex;
                top: 10px;
                background-color: white;
                margin: 10px auto;
                display: block;
                margin-left:920px;
                
            }
        
            .search-container > input {
                width: 80%;
                font-size: inherit;
                text-align: center;
                border: 0;
            }

            .search-container > button {
                width: 18%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-image: linear-gradient(#1F1C2C, #928DAB);
                color: white;
                border: 0;
                text-transform: uppercase;
                border-radius: inherit;
            }
        
          
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                    margin: 20px;
                    border-radius: 10px;
                }

                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }

                .search-container > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Cari Movie" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
