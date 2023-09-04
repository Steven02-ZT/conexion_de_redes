import { Outlet,Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = () => {
    const user = useSelector((state) => state.user)
    const {userInfo} = user
    let auth = {'token':userInfo}
    return(
        auth.token ? <Outlet/> : <Navigate to='/' />
    )
}

export default PrivateRoute