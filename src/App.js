import logo from './logo.svg';
import './index.css';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [Signed, setSigned] = useState(false);

  const darkModeHandler = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'bg-[#000000] text-white' : ''}>
      <Navbar handler={darkModeHandler} />
    </div>
  );
}

export default App;