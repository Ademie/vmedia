import React, { useState } from 'react'
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Works/Works";
import Team from "./Components/Team/Team";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import './App.scss'
import Menu  from './Components/Menu/Menu';
import MessengerCustomerChat from "react-messenger-customer-chat";




function App() {
  // toggle menu
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    {/* pass menuOpen and setMenuOpen as props to the Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Team/>
        <Contact/>
        <MessengerCustomerChat pageId="272925574521401" appId="332992658602823" />
      </div>
    </div>
  );
}
export default App;

//to automatically refresh the app without reloading the webpage
if (module.hot) {
  module.hot.accept();
}
