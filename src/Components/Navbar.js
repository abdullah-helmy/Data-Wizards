import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from "react";

const Navbar = (props) => {
    const navbar = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            navbar.current.classList.add('shadow-white');
            navbar.current.classList.remove('shadow-black');
        } else {
            navbar.current.classList.remove('shadow-white');
            navbar.current.classList.add('shadow-black');
        }
    }, [props.isDark]);

    return (
        <div className="shadow-md" ref={navbar}>
            <ul className='flex flex-row py-5 px-2'>
                <li className='pr-5'>
                    <button className='' onClick={() => props.setActivePage('home')}>Home</button>
                </li>
                <li className='pr-5'>
                    <button className='' onClick={() => props.setActivePage('login')}>Login</button>
                </li>
                <li className='pr-5'>
                    <button className='' onClick={() => props.setActivePage('about')}>About</button>
                </li>
                <button className="absolute right-0 pr-5" onClick={() => props.darkModeHandler()}>
                    <FontAwesomeIcon icon={faSun} />
                </button>
            </ul>
        </div>
    );
};

export default Navbar;