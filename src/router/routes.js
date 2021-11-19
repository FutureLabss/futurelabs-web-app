import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'
import strategy from '../components/strategy/strategy'
import modelling from '../components/modelling/modelling'
import product from '../components/Products/product'
import websites from '../components/websites/websites'

import About2 from '../components/About2/about2'

const pageRoutes = [
    {path: '/about2', element: About2 },

    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: strategy },
    {path: '/modelling', element: modelling },
    {path: '/products', element: product },
    {path: '/websites', element: websites },
    {path: '/', element: Home },
]

export default pageRoutes