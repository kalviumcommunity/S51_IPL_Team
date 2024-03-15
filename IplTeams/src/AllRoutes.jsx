import {Route,Routes} from 'react-router-dom'
import Home from './Component/Home'

function AllRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default AllRouter