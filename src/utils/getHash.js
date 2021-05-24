//obtenemos el hash, le quitamos el # (primer elemento), convertimos a minúscula y convertimos a arreglo pero sin incluir el '/', luego accedemos al elemento de la posición 1 que es el ID  o sino quedate en la raiz del proyecto.

const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash
