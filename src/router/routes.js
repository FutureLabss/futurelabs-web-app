import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'
import strategy from '../components/strategy/strategy'
import modelling from '../components/modelling/modelling'
import product from '../components/Products/product'

const pageRoutes = [
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: strategy },
    {path: '/modelling', element: modelling },
    {path: '/products', element: product},
    {path: '/', element: Home },
]

export default pageRoutes