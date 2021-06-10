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
                        <form action="">
                            <input type="text" class="search-bar" id="search-bar" placeholder="Buscar">
                        </form>
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
/*
    const searchBar = header.querySelector('#searchBar');
    let characters = [];
  
    const loadCharacters = async () => {
        try {
            const res = await fetch('https://rickandmortyapi.com/api/character/');
            characters = await res.json();
            displayCharacters(characters);
        } catch (err) {
            console.error(err);
        }
    };
*/
    return header
}

export default Header
