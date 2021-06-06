const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="header-logo">
                <a href="/">
                    <img src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png">
                </a>
            </div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <nav class="header-nav">
                <ul>            
                    <li>
                        <a class="active">
                            <select class="tag" name="a-z" id="selectOrder">
                                <option value="ordenado">--Select order--</option>
                                <option value="ascendente">A-Z</option>
                                <option value="descendente">Z-A</option>
                            </select>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="search">
                                <div class="icon">
                                    <i class="fas fa-search"></i>
                                </div>
                                <div class="input-search">
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#/about/">About</a>
                    </li>  
                </ul> 
            </nav>
            <div class="clearfix"></div> 
        </div>
    `;
    return view
}

export default Header

//<button class="tag" id= "openPage"><i class="fas fa-bars"></i></button>

//https://www.youtube.com/watch?v=kEt5DCHeyJo