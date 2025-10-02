import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    return (
        <div className={`tw-border-b-2 tw-w-full ${props.isDark ? 'tw-border-gray-600' : 'tw-border-slate-200'}`}>
            <ul className='tw-flex tw-flex-row tw-align-middle tw-py-4 tw-px-2'>
                <li className='tw-pr-3 max-sm:tw-pr-1.5'>
                    <button className='' onClick={() => props.setActivePage('home')}>Home</button>
                </li>
                <li className='tw-pr-3 max-sm:tw-pr-1.5'>
                    <button className='' onClick={() => {
                        props.setScrollToForecast(true);
                        props.setActivePage('home');
                    }}>
                        Forecast
                    </button>
                </li>
                <li className='tw-pr-3 max-sm:tw-pr-1.5'>
                    <button className='' onClick={() => props.setActivePage('docs')}>Documentation</button>
                </li>
                <li className='tw-pr-3 max-sm:tw-pr-1.5max-sm:tw-pr-1.5'>
                    <button className='' onClick={() => props.setActivePage('about')}>About</button>
                </li>
                <button className='tw-absolute tw-right-0 tw-pr-5' onClick={() => props.darkModeHandler()}>
                    <FontAwesomeIcon icon={faSun} />
                </button>
                <button className='tw-absolute tw-right-0 tw-top-2.5 tw-mr-16 max-sm:tw-mr-12 tw-px-5 tw-py-3 tw-bg-purple-500 tw-border-none tw-rounded-full max-md:tw-text-base' onClick={() => props.setActivePage('login')}>Login</button>
            </ul>
        </div>
    );
};

export default Navbar;