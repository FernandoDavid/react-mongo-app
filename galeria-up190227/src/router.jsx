import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Home from './components/home'
import Profile from './components/profile'
import Error from './components/error'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login'/> }></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>                    
                <Route path='*' element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router