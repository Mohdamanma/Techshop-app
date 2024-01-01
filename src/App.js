// import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes, Form } from 'react-router-dom';
import Mainpage from "./Page/Mainpage";
import Loginpage from "./Page/Loginpage";
import Adminpage from "./Page/Adminpage";
import Techlist from "./Page/Techlist";
function App() {
  return (
    <div >
      <BrowserRouter>

        <Navbar btn="login"/>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/Adminlogin" element={<Adminpage/>} />
          <Route path="/Form" element={<Techlist/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
