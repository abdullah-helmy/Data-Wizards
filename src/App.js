import './index.css';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import About from './About/About';
import Footer from './Components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    document.body.className = isDark ? 'bg-black  text-white' : 'bg-white text-black';
  }, [isDark]);

  const darkModeHandler = () => setIsDark(prev => !prev);

  return (
    <>
      <Navbar
        setActivePage={setActivePage}
        darkModeHandler={darkModeHandler}
        isDark={isDark}
      />

      {activePage === 'home' ? <Home isDark={isDark} /> : null}
      {activePage === 'login' ? <Login isDark={isDark} /> : null}
      {activePage === 'about' ? <About isDark={isDark} /> : null}

      {activePage === 'login' ? '' : <Footer isDark={isDark} />}
    </>
  );
}

export default App;