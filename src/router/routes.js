import About from '../components/About/about'
import Home from '../components/Home/home'
import Services from '../components/Services/services'

const pageRoutes = [
    {path: '/about', element: About },
    {path: '/services', element: Services },
    {path: '/', element: Home },
]

export default pageRoutes