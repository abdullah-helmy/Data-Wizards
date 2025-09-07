import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Home from './Home';
import Login from './Login';
import About from './About';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const darkModeHandler = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.className = isDark ? 'bg-black text-white' : 'bg-white text-black';
  }, [isDark]);

  return (
    <>
      <Navbar setActivePage={setActivePage} darkModeHandler={darkModeHandler} />

      {activePage === 'home' ? <Home /> : null}
      {activePage === 'login' ? <Login /> : null}
      {activePage === 'about' ? <About /> : null}
    </>
  );
}

export default App;