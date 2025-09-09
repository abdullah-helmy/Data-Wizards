import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Satellite from "../Components/Satellite";
import IMAGE5 from '../Images/IMAGE5.png';
import Galaxy from "../Components/Galaxy";
import Carousel from "../Components/Carousel";

const Home = (props) => {
    const button = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            button.current.classList.add('text-white');
            button.current.classList.remove('text-black');
        } else {
            button.current.classList.remove('text-white');
            button.current.classList.add('text-black');
        }
    }, [props.isDark]);

    return (
        <>
            <Galaxy
                mouseInteraction={false}
                mouseRepulsion={false}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-[800px]"
                >
                    <div className="flex flex-row">
                        <div className="w-[800px] mr-[50px]">
                            <p className="ml-[200px] mt-[300px] font-bold text-3xl">The first end-to-end TEMPO support, <br />monitoring and forecasting air quality<br />in North America.</p>
                            <p className="ml-[200px] text-xl">Resources from NASA and other TEMPO institutions, real-time, <br />user-friendly air quality forecast application and tips to be<br />protected form pollution.</p>
                            <button ref={button} className='ml-[200px] mt-[50px] px-4 py-3 bg-purple-500 border-none rounded-full text-lg'>See latest forecasts</button>
                        </div>
                        <div className="flex justify-center items-center h-[800px]">
                            <Satellite isDark={props.isDark} className="w-full h-full" />
                        </div>
                    </div>
                </motion.div>
            </Galaxy>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="flex flex-row mx-[200px] justify-center content-center py-10"
            >
                <img src={IMAGE5} alt="Something went wrong" />
                <div className="flex flex-col justify-center content-center">
                    <p className="mx-auto font-bold text-3xl">What is TEMPO?</p>
                    <p className="ml-[240px] mr-[200px] text-xl">Tropospheric Emissions: Monitoring of Pollution instrument is the first NASA mission capable of monitoring hourly air pollution over greater North America from a geostationary orbit of ~22,000 miles away.</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >

            </motion.div>
        </>
    );
};

export default Home;