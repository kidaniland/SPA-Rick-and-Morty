import Header from '../template/Header';

const icon = Header.querySelector('.icon');
const search = Header.querySelector('.search');

icon.onclick = function (){
    search.classList.toggle('active')
}

/*
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