import { useRoutes } from "react-router-dom"
import Layout from "../Layout"
import Main from "../Main"

const Routers = () => {
    return useRoutes([
        {
            path: '*',
            element: <h1>PAge not found</h1>
        },
        {
            path: '',
            element: <Layout />,
            children: [
                { path: '', element: <Main /> }
            ]
        }
    ])
}

export default Routers