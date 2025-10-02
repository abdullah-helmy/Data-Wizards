import './index.css';
import Navbar from './Components/Navbar';
import { useEffect, useRef, useState } from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import About from './About/About';
import Footer from './Components/Footer';
import Documentation from './Documentation/Documentation';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [scrollToForecast, setScrollToForecast] = useState(false);

  const forecast = useRef(null);

  useEffect(() => {
    document.body.className = isDark ? 'tw-bg-black  tw-text-white' : 'tw-bg-white tw-text-black';
  }, [isDark]);

  useEffect(() => {
    if (activePage === 'home' && scrollToForecast.current) {
      const timer = setTimeout(() => {
        if (forecast.current) {
          forecast.current.scrollIntoView({ behavior: 'smooth' });
          scrollToForecast.current = false;
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [activePage, scrollToForecast]);

  const darkModeHandler = () => setIsDark(prev => !prev);

  return (
    <>
      <Navbar
        setActivePage={setActivePage}
        darkModeHandler={darkModeHandler}
        isDark={isDark}
        forecast={forecast}
        setScrollToForecast={setScrollToForecast}
      />

      {
        activePage === 'home' ?
          <Home
            isDark={isDark}
            forecast={forecast}
            scrollToForecast={scrollToForecast}
            setScrollToForecast={setScrollToForecast}
            setActivePage={setActivePage}
          /> : null
      }
      {activePage === 'docs' ? <Documentation isDark={isDark} /> : null}
      {activePage === 'login' ? <Login isDark={isDark} /> : null}
      {activePage === 'about' ? <About isDark={isDark} /> : null}

      {activePage === 'login' ? '' : <Footer isDark={isDark} setActivePage={setActivePage} />}
    </>
  );
}

export default App;