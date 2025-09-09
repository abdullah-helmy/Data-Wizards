import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import IMAGE1 from '../Images/IMAGE1.png';
import Galaxy from "../Components/Galaxy";

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
            <Galaxy mouseInteraction={false} mouseRepulsion={false}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-[700px]"
                >
                    <div className="flex flex-row">
                        <div>
                            <p className="ml-[200px] mt-[200px] font-bold text-3xl">The first end-to-end TEMPO support, <br />monitoring and forecasting air quality<br />in North America.</p>
                            <p className="ml-[200px] text-xl">Resources from NASA and other TEMPO institutions, real-time, <br />user-friendly air quality forecast application and tips to be<br />protected form pollution.</p>
                            <button ref={button} className='ml-[200px] mt-[50px] px-4 py-3 bg-purple-500 border-none rounded-full text-lg'>See latest forecasts</button>
                        </div>
                        <div>
                            <img className="absolute right-0 pr-[100px] h-[650px] " src={IMAGE1} alt="Something went wrong" />
                        </div>
                    </div>
                </motion.div>
            </Galaxy>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="flex flex-col justify-center content-center"
            >
                <p className="mt-[200px] font-bold text-3xl">What is TEMPO?</p>
                <p>Tropospheric Emissions: Monitoring of Pollution</p>
            </motion.div>
        </>
    );
};

export default Home;