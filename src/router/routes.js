import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'
import strategy from '../components/strategy/strategy'
import modelling from '../components/modelling/modelling'
import websites from '../components/websites/websites'

const pageRoutes = [
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: strategy },
    {path: '/modelling', element: modelling },
    {path: '/websites', element: websites },
    {path: '/', element: Home },
]

export default pageRoutes