// App.js
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Error from './components/Pages/Error';
import DynamicPage from './components/Pages/DynamicPage';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Pages/Login';
import Logout from './components/Pages/Logout';


import Navbar from './components/Navbar';


function App() {
  let isLogged = true;
  let data ={
    st :"data is not loggedin"   //when user user are not loggedin then itl will be show 
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:category" element={< DynamicPage />} />     {/* Dynamic pages  */}
          <Route path="/post/:category/:id" element={< DynamicPage />} />     {/*get through id  */}
          <Route path="/login" element={<Login />} />  
          <Route path="/logout" element={<Logout />} /> 
          <Route path="/dashboard" element={ isLogged ?< Dashboard />:<Navigate to="/login" replace state={data}/>} />  {/* use=>uselocation hook */}





          
          <Route path="*" element={<Error />} /> {/* Handles all undefined routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
