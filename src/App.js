import React from 'react';
import './styles/_mainstyles.sass';
import Home from './pages/Home/Home';
import NavBar from './components/Navbar/Navbar';
import SingleHero from './components/SingleHero/SingleHero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Books from './pages/Books/Books';
import MyThemeProvider from './components/ThemeProvider/MyThemeProvider';




export default function App() {

  return (
    <div className='App'>
    
    <Router>
    <MyThemeProvider>
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="books" element={<Books />} />
    <Route path="Character/:heroId" element={<SingleHero />} />
    </Routes>
    <Footer />
    </MyThemeProvider>
    </Router>

    </div>

  )
}

