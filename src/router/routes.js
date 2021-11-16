import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'
import strategy from '../components/strategy/strategy'
import modelling from '../components/modelling/modelling'
<<<<<<< HEAD
import product from '../components/Products/product'
=======
import websites from '../components/websites/websites'
>>>>>>> cc6a9b12a9f936ec7a782e7a7a91ea8a43c39c7c

const pageRoutes = [
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/strategy', element: strategy },
    {path: '/modelling', element: modelling },
<<<<<<< HEAD
    {path: '/products', element: product},
=======
    {path: '/websites', element: websites },
>>>>>>> cc6a9b12a9f936ec7a782e7a7a91ea8a43c39c7c
    {path: '/', element: Home },
]

export default pageRoutes