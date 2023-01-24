import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import { productAndCartLoader } from './loders/productAndCartLoader';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Orders from './pages/Orders/Orders';
import Shop from './pages/Shop/Shop';
import SignUp from './pages/SignUp/SignUp';
import PrivateRoute from './routes/PrivateRoute';

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
                    element: <PrivateRoute>
                        <Orders />
                    </PrivateRoute>,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/signUp',
                    element: <SignUp />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
