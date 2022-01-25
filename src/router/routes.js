import Home from '../components/Home/home'

import About from '../components/About/about'   
import Services from '../components/Services/services'
import Strategy from '../components/Strategy/strategy'

import PersistentDrawerRight from '../Blog/Homepage'
import Modelling from '../components/Modelling/modelling'

import Products from '../components/Products/products'

import Websites from '../components/Websites/websites'
import DigitalArt from '../components/DigitalArt/digitalArt'
import singlepost from '../components/singlepost/singlepost'

const pageRoutes = [
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: Strategy },

    {path: '/modelling', element: Modelling },
    {path: '/products', element: Products },
    {path: '/websites', element: Websites },
    {path: '/digitalArt', element: DigitalArt },
    {path: '/singlepost/:id', element: singlepost },


    {path: '/home', element: PersistentDrawerRight },

    // {path: '/about', element: About },
    // {path: '/services', element: Services },
    // {path: '/strategy', element: strategy },
    // {path: '/modelling', element: modelling },
    // {path: '/products', element: product },
    // {path: '/websites', element: websites },
    {path: '/', element: Home },
]

export default pageRoutes