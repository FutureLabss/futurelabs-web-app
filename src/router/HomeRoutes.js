import PersistentDrawerRight from '../components/User/components/Homepage'
import singlepost from '../components/User/components/Singlepost'
import Login from '../components/User/components/Login'
import Signup from '../components/User/components/Signup'
import UpdateArticle from '../components/User/components/UpdateArticle'
import UserDashboard from '../components/User/pages/Drawer'
// import {userRoutes} from './UserRoutes'
// import PrivateRoute from './PrivateRoute'


const pageRoutes = [
    {path: '/signin', element: Login },
    {path: '/signup', element: Signup },
    {path: 'user/*', element: UserDashboard},
    {path: '/singlepost/:id', element: singlepost },
    {path: '/updatepost/:id', element: UpdateArticle},
    {path: '/', element: PersistentDrawerRight },
]

export default pageRoutes