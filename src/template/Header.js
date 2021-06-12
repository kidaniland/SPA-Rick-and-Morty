import searchData from "../utils/searchData";
import Loader from "./Loader";

const Header = () => {
    const view = `
            <div class="header-logo">
                <a href="/">
                    <img src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png">
                </a>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars" id="faBars"></i>
            </div>
            <nav class="header-nav ">
                <ul> 
                    <li>
                        <a>
                        <div>
                            <input type="text" class="search-bar" id="search-bar" placeholder="Buscar">
                        </div>
                        </a>
                    </li>           
                    <li>
                        <a class="active">
                            <select name="a-z" id="selectOrder">
                                <option value="ordenado">--Select order--</option>
                                <option value="ascendente">A-Z</option>
                                <option value="descendente">Z-A</option>
                            </select>
                        </a>
                    </li>
                    <li>
                        <a href="#/about/">About</a>
                    </li>  
                </ul> 
            </nav>
            <div class="clearfix"></div>
         
    `;

    const header = document.createElement('div');
    header.setAttribute('class', 'Header-main');
    header.innerHTML = view;

    //Barras
    header.querySelector('#faBars').addEventListener('click', ()=>{
        console.log('CLICK-----');
        const icon = header.querySelector('.fa-bars');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    });

    //Select

    //Search
    const searchBar = header.querySelector('#search-bar');
    searchBar.addEventListener('keypress', async e => {
        if (e.target.matches('#search-bar')){
            //console.log("--->", e.key);
            if(e.key === "Enter"){
                let queryCharacter = e.target.value.toLowerCase();
                searchData(queryCharacter);
                /*
                try {
                    let queryCharacter = e.target.value.toLowerCase();
                    console.log('1--->', queryCharacter);
                    let api = `https://rickandmortyapi.com/api/character?name=${queryCharacter}`;
                    let response = await fetch(api);
                    let json = await response.json(); 
                } catch (error) {
                    console.log(error);
                }
                */
            }
        }
    });

    return header
}

export default Header
