import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';

import Main from './layouts/Main';
import { productAndCartLoader } from './loders/productAndCartLoader';
import Home from './pages/Home';
import Orders from './pages/Orders';

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/shop',
                    loader: () => fetch('products.json'),
                    element: <Products />,
                },
                {
                    path: '/orders',
                    loader: productAndCartLoader,
                    element: <Orders />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
