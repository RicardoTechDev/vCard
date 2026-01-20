import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";

const routes = [ ...routesAdmin, ...routesClient]// ...routesAdmin me devuelve el contenido al usar los ... para crear un [{}, {}]

export default routes;