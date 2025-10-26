import React from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import OrderFood from "./components/OrderFood"
import WhyChooseUs from "./components/WhyChooseUs"
import Comments from "./components/Comments"
import Industry from './components/Industry';
import Technology from './components/Technology';
import Products from "./components/Products"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"
import Awards from './components/Awards';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <OrderFood />
      <WhyChooseUs />
      <Comments />
      <Industry />
      <Technology />
      <Products />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

