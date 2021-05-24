const resolveRoutes = (route) => {
    if (route.length <= 3) {
        //si no hay ruta retorna id 
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    } 

    //si no cumplimos con la validación, solo mandamos la ruta que recibimos
    return `/${route}`;
}

export default resolveRoutes
