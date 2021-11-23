class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 5px;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-image: linear-gradient(#1F1C2C, #928DAB);
                font-size: inherit ;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius:20px;
            }
            h2{
                display: inline;
                margin-left: 50px;
            }
            nav{
                padding: 10px;
                position: sticky;
	            top: 0;
            }
            
            @media screen and (max-width: 453px){
                :host{
                    font-size: 70%;
                }
            }
        </style>
         
        <nav>    
            <h2>MovieXXI</h2>
        </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
