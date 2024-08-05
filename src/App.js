import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/Login';
import UserForm from './pages/UserForm';
import DropdownPage from './pages/DropDownPage';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Configure1 from './pages/Configure1';
import Configure2 from './pages/Configure2';
import ConfirmOrder from './pages/ConfirmOrder';
import AccountCreatedResponse from './pages/AccountCreatedResponse';
import Logic1 from './pages/Logic1';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<UserForm />} />
        <Route path='/dropdownpage' element={<DropdownPage />} />
        <Route path='/configure1' element={<Configure1 />} />
        <Route path='/configure2' element={<Configure2 />} />
        <Route path='/confirmorder' element={<ConfirmOrder />} />
        <Route path='/accountcreatedresponse' element={<AccountCreatedResponse/>}/>
        <Route path='/logic1' element={<Logic1/>} />
        
        {/* Add other routes here if needed */}
      </Routes>
      <FooterWithConditionalRender />
    </BrowserRouter>
  );
}

function FooterWithConditionalRender() {
  const location = useLocation();
  const noFooterRoutes = ['/dropdownpage', '/register', '/configure1', '/configure2', '/confirmorder']; // Routes where Footer should not be displayed

  if (noFooterRoutes.includes(location.pathname.toLowerCase())) {
    return null; // Do not render Footer
  }

  return <Footer />; // Render Footer for other routes
}

export default App;
