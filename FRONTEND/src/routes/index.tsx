import { createBrowserRouter } from "react-router-dom"
import { Logon } from "../pages/logon"
import { Register } from "../pages/register"
import { List } from "../pages/list"
import { New } from "../pages/new/new"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Logon />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/home',
        element: <List />
    },
    {
        path: '/new',
        element: <New />
    }
])