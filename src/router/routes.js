import Home from '../components/Home/home'

import About from '../components/About/about'   
import Services from '../components/Services/services'
import Strategy from '../components/strategy/strategy'
import Branding from '../components/Branding/branding'


import Modelling from '../components/modelling/modelling'

import Products from '../components/Products/products'

import Websites from '../components/websites/websites'
import DigitalArt from '../components/digitalArt/digitalArt'
import singlepost from '../components/singlepost/singlepost'
import PersistentDrawerRight from '../Blog/Homepage'

const pageRoutes = [
    {path: '/', element: Home },
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: Strategy },
    {path: '/branding', element: Branding },
    {path: '/modelling', element: Modelling },
    {path: '/products', element: Products },
    {path: '/websites', element: Websites },
    {path: '/digitalArt', element: DigitalArt },
    {path: '/singlepost/:id', element: singlepost },
    {path: '/blog', element: PersistentDrawerRight },
]

export default pageRoutes