import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>

    
  
  )
}

export default App;
