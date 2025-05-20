
import {Route, Routes} from 'react-router'
import Login  from './Components/Login'
import {BackgroundContainer } from './App.styles.js'
function App() {

  return (
 <BackgroundContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BackgroundContainer>
  )
}

export default App
