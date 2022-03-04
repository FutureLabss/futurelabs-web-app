import { icons } from '../components/assets'
import Dashboard from '../components/User/pages/Dashboard'
import Create from '../components/User/pages/Create'
import Library from '../components/User/pages/Library'
import Logout from '../components/User/pages/Logout'
import Profile from '../components/User/pages/Profile'
import Settings from '../components/User/pages/Settings'
import Trash from '../components/User/pages/Trash'


export const userRoutes = [
    {path: '', icon: icons.dashboard, title: 'Dashboard', element: <Dashboard />},
    {path: 'create', icon: icons.create, title: 'Create', element: <Create />},
    {path: 'library', icon: icons.library, title: 'Library', element: <Library />},
    {path: 'trash', icon: icons.trash, title: 'Trash', element: <Trash />},
    {path: 'profile', icon: icons.profile, title: 'Profile', element: <Profile />},
    {path: 'settings', icon: icons.settings, title: 'Settings', element: <Settings />},
    {path: 'logout', icon: icons.logout, title: 'Logout', element: <Logout />},
]