import MainRoot from '../components/MainRoot'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Programs from '../pages/Programs'
import Teachers from '../pages/Teachers'
import Add from './../pages/Add';

const ROUTES = [


    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "courses",
                element: <Courses />
            },
            {
                path: "programs",
                element: <Programs />
            },
            {
                path: "teachers",
                element: <Teachers />
            },
            {
                path: "add",
                element: <Add />
            }
        ]

    }
]

export default ROUTES