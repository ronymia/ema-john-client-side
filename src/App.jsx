import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import { productAndCartLoader } from './loders/productAndCartLoader';
import Home from './pages/Home';
import Orders from './pages/Orders/Orders';
import Shop from './pages/Shop/Shop';

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
                    element: <Shop />,
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
