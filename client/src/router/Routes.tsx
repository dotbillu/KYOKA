import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar'
import Settings from '../pages/Settings'
import Analysis from '../pages/Analysis'
import BuymeAcoffee from '../pages/BuymeAcoffee'
import Auth from '../pages/Auth'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <Home />
            </>
        )
    },
    {
        path: '/settings',
        element: (
            <>
                <Navbar />
                <Settings />
            </>
        )
    },
    {
        path: "/Analysis",
        element: (
            <div className="h-screen flex flex-col">
                <Navbar />
                <Analysis />
            </div>
        ),
    },

    {
        path: '/BuymeAcoffee',
        element: (
            <>
                <Navbar />
                <BuymeAcoffee />
            </>
        )
    },
    {
        path: '/Auth',
        element: (
            <>
                <Auth />
            </>
        )
    },


])




export default router;