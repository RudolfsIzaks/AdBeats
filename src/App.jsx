import { useState } from 'react';
import React from 'react';
import './index.css';
import Home from './pages/home';
import Landing from './pages/landing';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Global animation duration
          once: true, // Whether animation should happen only once
        });
      }, []);

    return(
    <>
     <Landing/>
    </>
    )
}

export default App