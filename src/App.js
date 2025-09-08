import './index.css';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import About from './About/About';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activePage, setActivePage] = useState('home');

  const darkModeHandler = () => setIsDark(prev => !prev);

  useEffect(() => {
    document.body.className = isDark ? 'bg-black text-white' : 'bg-white text-black';
  }, [isDark]);

  return (
    <>
      <Navbar setActivePage={setActivePage} darkModeHandler={darkModeHandler} isDark={isDark} />

      {activePage === 'home' ? <Home /> : null}
      {activePage === 'login' ? <Login isDark={isDark} /> : null}
      {activePage === 'about' ? <About /> : null}
    </>
  );
}

export default App;