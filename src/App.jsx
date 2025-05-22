
import {Route, Routes} from 'react-router'
import Login  from './Components/Login'
import Home from './Components/Home/index.jsx'
import Cart from './Components/Cart/index.jsx'


function App() {

  return (
 <>
  
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </>
    
  )
}

export default App
