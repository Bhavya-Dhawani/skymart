import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthProtectors from '../protectors/AuthProtectors';
import MainProtect from '../protectors/MainProtect';
import Home from '../pages/Home';

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                {
                    element: <MainProtect />,
                    children: [
                        {
                            path: "",
                            element: <MainLayout />,
                            children: [
                                {
                                    path: "",
                                    element: <Home />
                                }
                            ]
                        }
                    ]
                },
                {
                    element: <AuthProtectors />,
                    children: [
                        {
                            path: "",
                            element: <AuthLayout />,
                            children: [
                                {
                                    path: "login",
                                    element: <Login />
                                },
                                {
                                    path: "register",
                                    element: <Register />
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRouter
