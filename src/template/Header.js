const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="header-logo">
                <a href="/">
                    <img src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png">
                </a>
            </div>
            <div class="Header-nav">            
                <select class="tag" name="a-z" id="selectOrder">
                    <option value="ordenado">--Select order--</option>
                    <option value="ascendente">A-Z</option>
                    <option value="descendente">Z-A</option>
                </select>
                <div class="search">
                    <div class="icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="input-search">
                    </div>
                </div>
                <a href="#/about/">About</a>
                <button class="tag" id= "openPage"><i class="fas fa-bars"></i></button> 
            </div> 
        </div>
    `;
    return view
}

export default Header
