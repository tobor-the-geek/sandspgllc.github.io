class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          height: 1em;
          /*padding: 0.1em 0.1em;*/
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #dfdfe2;
        }
        
        ul li {
          list-style: none;
          display: inline;
        }
        
 /*       a {
          margin: 0 1em;
          color: inherit;
          text-decoration: none;
        } 
        
        a:hover {
          padding-bottom: 0.5em;
          box-shadow: inset 0 -0.2em 0 0 #333;
        }	*/
        
      </style>
      <footer>
        <ul>
          <li><a href="TOC-BC.html"> TOC-Business</a></li>
          <li><a href="TOC-Agent.html"> TOC-Agent</a></li>
          <li><a href="TOC-Cont.html"> TOC-Contractor</a></li>
          <li><a href="TOC-WBH.html"> TOC-We Buy Houses</a></li>
          <li><a href="TOC-Inv.html"> TOC-Investor</a></li>
          <li><a href="Cover-page.html"> Cover-sheet</a></li>
          <li style="color:rgba(0,0,0,0.0)">Filler</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
