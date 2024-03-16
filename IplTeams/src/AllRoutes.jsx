import {Route,Routes} from 'react-router-dom'
import Home from './Component/Home'
import UpdateTeam from './Component/UpdateTeam'
import LogInPage from './Component/LogInPage'
import LogOutPage from './Component/LogOutPage'
import AddTeams from './Component/AddTeam'
import SignupPage from './Component/SignUpPage'
function AllRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddTeams/>}/>
        <Route path='/update/:id' element={<UpdateTeam/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/logout' element={<LogOutPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
  )
}

export default AllRouter