import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage, Login, Register } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    }, 
    {
        path: '/login',
        element: <Login />,
    },
     {
        path: '/register',
        element: <Register />,
    },
])


export default router