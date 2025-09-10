import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from "react";

const Navbar = (props) => {
    const navbar = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            navbar.current.classList.add('border-gray-600');
            navbar.current.classList.remove('border-slate-200');
        } else {
            navbar.current.classList.remove('border-gray-600');
            navbar.current.classList.add('border-slate-200');
        }
    }, [props.isDark]);

    return (
        <div className="border-b-2" ref={navbar}>
            <ul className='flex flex-row py-5 px-2'>
                <li className='pr-5'>
                    <button className='' onClick={() => props.setActivePage('home')}>Home</button>
                </li>
                <li className='pr-5'>
                    <button className='' onClick={() => props.setActivePage('forecast')}>Forecast</button>
                </li>
                <li className='pr-5'>
                    <button className='' onClick={() => props.setActivePage('docs')}>Documentation</button>
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