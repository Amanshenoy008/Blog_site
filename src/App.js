import Navbar from './components/navbar.js';
import Home from './components/home'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Create from './components/create.jsx';
import Nopage from './components/custom404'
import Blogdetails from './components/blogdetails'
import SignIn from './components/signin.jsx';

function App() {

  return (
    
    
    <BrowserRouter >
     <div className=" w-screen">
       <Navbar />
        <div className=" ">
        <Routes>
          <Route path='/'          element={<Home />} />
          <Route path='/create'    element={<Create />} />
          <Route path='/blogs/:id' element={<Blogdetails />} />
          <Route path='/Signin'    element={<SignIn />} />
          <Route path='*'          element={<Nopage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
