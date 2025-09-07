import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    return (
        <div className='flex flex-row shadow-lg'>
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