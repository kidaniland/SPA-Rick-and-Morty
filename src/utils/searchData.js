import Header from '../template/Header';

const icon = Header.querySelector('.icon');
const search = Header.querySelector('.search');

icon.onclick = function (){
    search.classList.toggle('active')
}
