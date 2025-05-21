
import {Route, Routes} from 'react-router'
import Login  from './Components/Login'
import Home from './Components/Home/index.jsx'
import Cart from './Components/Cart/index.jsx'
import {BackgroundContainer } from './App.styles.js'
import Header from './Components/Header/index.jsx'
function App() {

  return (
 <BackgroundContainer>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BackgroundContainer>
  )
}

export default App
