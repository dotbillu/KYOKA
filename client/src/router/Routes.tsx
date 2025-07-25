import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
import Settings from '../pages/Settings'
import Analysis from '../pages/Analysis'
import BuymeAcoffee from '../pages/BuymeAcoffee'
const router= createBrowserRouter([
     {
        path: '/',
        element:(
            <>
                <Navbar/>
                <Home/>
            </>
        )
    },
    {
        path: '/settings',
        element:(
            <>
                <Navbar/>
                <Settings/>
            </>
        )
    },
    {
        path:'/Analysis',
        element:(
            <>
            <Navbar/>
            <Analysis/>
            </>
        )
    },
    {
        path:'/BuymeAcoffee',
        element:(
            <>
            <Navbar/>
            <BuymeAcoffee/>
            </>
        )
    }

])
   



export default router;