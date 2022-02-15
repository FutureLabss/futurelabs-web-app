import PersistentDrawerRight from '../components/User/Homepage'
import singlepost from '../components/User/Singlepost'
import Login from '../components/User/Login'
import Article from '../components/User/Article'
import Signup from '../components/User/Signup'
import UpdateArticle from '../components/User/UpdateArticle'


const pageRoutes = [
    {path: '/signin', element: Login },
    {path: '/signup', element: Signup },
    {path: '/create', element: Article },
    {path: '/singlepost/:id', element: singlepost },
    {path: '/updatepost/:id', element: UpdateArticle},
    {path: '/', element: PersistentDrawerRight },
]

export default pageRoutes