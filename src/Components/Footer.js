import { useEffect, useRef } from "react";

const Footer = (props) => {
    const footer = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            footer.current.classList.add('border-gray-600');
            footer.current.classList.remove('border-gray-100');
        } else {
            footer.current.classList.remove('border-gray-600');
            footer.current.classList.add('border-gray-100');
        }
    }, [props.isDark]);

    return (
        <div ref={footer} className="border-t-2 bg-slate-900 grid grid-cols-3 gap-2 p-5">
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