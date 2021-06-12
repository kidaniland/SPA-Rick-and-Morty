const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    //si nuestra funcion no recibe un id por defecto retorna todo lo que tiene api
    const apiURL = id ? `${API}${id}` : API ;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        //console.log('--->DATA',data)
        return data
    } catch (error) {
        console.log('Fetch Error', error);
    }   
}

export default getData