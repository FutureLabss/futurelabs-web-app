
import Home from '../components/Home/home'


import About2 from '../components/About2/about2'
import Services2 from '../components/Services2/services2'
import Strategy2 from '../components/Strategy2/strategy2'

import Modelling2 from '../components/Modelling2/modelling2'
import Products2 from '../components/Products2/products2'
import Websites2 from '../components/Websites2/websites2'
import DigitalArt2 from '../components/DigitalArt2/digitalArt2'

const pageRoutes = [
    {path: '/about2', element: About2 },
    {path: '/services2', element: Services2 },
    {path: '/strategy2', element: Strategy2 },

    {path: '/modelling2', element: Modelling2 },
    {path: '/products2', element: Products2 },
    {path: '/websites2', element: Websites2 },
    {path: '/digitalArt2', element: DigitalArt2 },


   
    {path: '/', element: Home },
]

export default pageRoutes