import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'
import strategy from '../components/strategy/strategy'
import modelling from '../components/modelling/modelling'
import product from '../components/Products/product'
import websites from '../components/websites/websites'
import branding from '../components/branding/branding'
 


import About2 from '../components/About2/about2'   
import Services2 from '../components/Services2/services2'
import Strategy2 from '../components/Strategy2/strategy2'


import PersistentDrawerRight from '../Blog/Homepage'
import Modelling2 from '../components/Modelling2/modelling2'

import Products2 from '../components/Products2/products2'
import Websites2 from '../components/Websites2/websites2'
import DigitalArt2 from '../components/DigitalArt2/digitalArt2'
import singlepost from '../components/singlepost/singlepost'

const pageRoutes = [
    {path: '/about2', element: About2 },
    {path: '/services2', element: Services2 },
    {path: '/strategy2', element: Strategy2 },

    {path: '/modelling2', element: Modelling2 },
    {path: '/products2', element: Products2 },
    {path: '/websites2', element: Websites2 },
    {path: '/digitalArt2', element: DigitalArt2 },
    {path: '/singlepost', element: singlepost },


    {path: '/home', element: PersistentDrawerRight },

    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: strategy },
    {path: '/modelling', element: modelling },
    {path: '/products', element: product },
    {path: '/websites', element: websites },
     {path: '/branding', element: branding },
    {path: '/', element: Home },
]

export default pageRoutes