import Home from '../pages/Home'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import { DefaultLayout, MainLayout } from '../Layout';

const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/catalog/:slug', component: Product, layout: DefaultLayout },
    { path: '/catalog', component: Catalog, layout: DefaultLayout },
    { path: '/cart', component: Cart, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
