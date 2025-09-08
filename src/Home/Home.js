import { useEffect, useRef } from "react";

const Home = (props) => {
    const button = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            button.current.classList.add('bg-white', 'text-black');
            button.current.classList.remove('bg-black', 'text-white');
        } else {
            button.current.classList.remove('bg-white', 'text-black');
            button.current.classList.add('bg-black', 'text-white');
        }
    } ,[props.isDark]);

    return (
        <div>
            <p className="pl-[200px] pt-[200px] font-bold text-3xl">The first end-to-end TEMPO support, <br />monitoring and forecasting air quality<br />in North America.</p>
            <p className="pl-[200px] text-xl">Resources from NASA and other TEMPO institutions, real-time, <br />user-friendly air quality forecast application and tips to be<br />protected form pollution.</p>
            <button ref={button} className={`ml-[200px] mt-[50px] px-4 py-3 border-none rounded-full text-lg`}>See latest forecasts</button>
        </div>
    );
};

export default Home;