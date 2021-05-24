import Header from '../template/Header';
import Home from '../views/Home';
import Characters from '../views/Characters';
import Error404 from '../views/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Characters,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();

}

export default router