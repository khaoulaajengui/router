import Navbar from './Components/navbar';
import Home from './Components/home';
import Service from './Components/service';
import Sign from './Components/signup';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
const App=()=> {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     
        <Route path='/' exact element={<Home/>}/>
        <Route path='/service' element={<Service/>} />
        <Route path='/sign' element={<Sign/>}/>

        
     </Routes>

        
       




      <Footer/>



    </div>
  );
}

export default App;
