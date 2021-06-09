import Header from '../template/Header';
import Home from '../views/Home';
import Characters from '../views/Characters';
import Error404 from '../views/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Footer from '../template/Footer';

const routes = {
    '/': Home,
    '/:id': Characters,
    '/:pages': Home,
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('contact');

    header.append(await Header());
    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
    footer.innerHTML = await Footer();
}

export default router