import { useEffect, useRef } from "react";

const Footer = (props) => {
    const footer = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            footer.current.classList.add('border-white');
            footer.current.classList.remove('border-black');
        } else {
            footer.current.classList.remove('border-white');
            footer.current.classList.add('border-black');
        }
    }, [props.isDark]);

    return (
        <div ref={footer} className="border-t-2 my-[500px] grid grid-cols-3 gap-2">
            <div>
                <p className='font-bold'>Documentation</p>
            </div>
            <div>
                <p className='font-bold'>About Us</p>
                <a href="#1" className='block'>Who are we?</a>
                <a href="#1" className='block'>Our insight</a>
                <a href="#1" className='block'>Our Team</a>
            </div>
            <div>
                <p className='font-bold'>FAQ</p>
                <a href="#1" className='block'>How to get the forecast of my state?</a>
                <a href="#1" className='block'>Is these forecasts act as real-time ground-level current air quality?</a>
            </div>
        </div>
    );
};

export default Footer;