import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    return (
        <div className="flex flex-row bg-transparent py-3 px-2">
            <a className="pr-5">Home</a>
            <a className="pr-5">Log in</a>
            <a className="pr-5">About</a>

            <button className="relative " onClick={props.handler}>
                <FontAwesomeIcon icon={faSun} />
            </button>
        </div>
    );
};

export default Navbar;