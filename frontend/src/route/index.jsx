import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage, Login } from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    }, {
        path: '/login',
        element: <Login />,
    }
])


export default router