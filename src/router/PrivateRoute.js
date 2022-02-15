import React from 'react'
import { Route, Navigate} from 'react-router-dom'
import { useAuth } from '../Blog/contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}){
    const { currentUser } = useAuth()

    return (
        <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props} /> : <Navigate replace to="/signin" />
        }}>

        </Route>
    )
}