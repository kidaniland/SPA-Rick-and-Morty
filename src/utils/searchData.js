const API = 'https://rickandmortyapi.com/api/character/';

const searchData = async (character) => {
    console.log('Llega a CHARACTER', character);
    try {
        let api = `https://rickandmortyapi.com/api/character?name=${character}`;
        let response = await fetch(api);
        let json = await response.json(); 
    } catch (error) {
        console.log(error);
    }  
}

export default searchData

