import { useEffect, useRef } from "react";

const Footer = (props) => {
    const footer = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            footer.current.classList.add('border-gray-600', 'bg-slate-800');
            footer.current.classList.remove('border-slate-200', 'bg-slate-100');
        } else {
            footer.current.classList.remove('border-gray-600', 'bg-slate-800');
            footer.current.classList.add('border-slate-200', 'bg-slate-100');
        }
    }, [props.isDark]);

    return (
        <div ref={footer} className="border-t-2 grid grid-cols-3 gap-2 p-5">
            <div>
                <p className='font-bold'>Documentation</p>
            </div>
            <div>
                <p className='font-bold'>About Us</p>
                <button className="block" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const who = document.getElementById('who');
                        who.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Who are we?</button>

                <button className="block" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const insight = document.getElementById('insight');
                        insight.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Our insight</button>
                
                <button className="block" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const aim = document.getElementById('aim');
                        aim.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Our aim</button>

                <button className="block" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const team = document.getElementById('team');
                        team.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Meet our team</button>
            </div>
            <div>
                <p className='font-bold'>FAQ</p>
            </div>
        </div>
    );
};

export default Footer;