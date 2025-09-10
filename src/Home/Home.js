import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Satellite from "../Components/Satellite";
import IMAGE5 from '../Images/IMAGE5.png';
import Galaxy from "../Components/Galaxy";
import Carousel from "../Components/Carousel";

const Home = (props) => {
    const slides = [
        { title: "See Documentation", description: "Have a problem? See our documentation." },
        { title: "See latest forecasts", description: "Need a real-time air quality forecast? See the latest air quality forecast." },
        { title: "Register", description: "New to our website? Join us." },
    ];

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
                    className="h-full"
                >
                    <div className="flex flex-row flex-wrap">
                        <div className="h-fit mr-[50px] max-md:w-full max-md:mr-0">
                            <p className="ml-[200px] mt-[300px] font-bold text-3xl max-md:ml-4 max-md:mt-10 max-md:text-xl">
                                The first end-to-end TEMPO support, <br />monitoring and forecasting air quality<br />in North America.
                            </p>
                            <p className="ml-[200px] text-xl max-md:ml-4 max-md:text-base">
                                Resources from NASA and other TEMPO institutions, real-time, <br />user-friendly air quality forecast application and tips to be<br />protected form pollution.
                            </p>
                            <button
                                ref={button}
                                className='ml-[200px] mt-[50px] px-6 py-3 bg-purple-500 border-none rounded-full text-lg max-md:ml-4 max-md:mt-6 max-md:text-base'
                            >
                                See latest forecasts
                            </button>
                        </div>
                        {/* Hide Satellite on small screens */}
                        <div className="flex justify-center items-center h-[800px] max-md:hidden">
                            <Satellite isDark={props.isDark} className="w-full h-full" />
                        </div>
                    </div>
                </motion.div>
            </Galaxy>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                className="flex flex-row mx-[200px] justify-center content-center py-10 max-md:flex-col max-md:mx-4"
            >
                <img src={IMAGE5} alt="Something went wrong" className="max-md:w-full max-md:mb-4" />
                <div className="flex flex-col justify-center content-center">
                    <p className="mx-auto font-bold text-3xl max-md:text-xl">What is TEMPO?</p>
                    <p className="ml-[240px] mr-[200px] text-xl max-md:ml-0 max-md:mr-0 max-md:text-base">
                        Tropospheric Emissions: Monitoring of Pollution instrument is the first NASA mission capable of monitoring hourly air pollution over greater North America from a geostationary orbit of ~22,000 miles away.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            >
                <Carousel
                    autoSlide={true}
                    autoSlideInterval={5000}
                >
                    {slides.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full flex flex-col items-center justify-center p-10">
                            <p className="text-xl font-bold mb-4 text-center max-md:text-base">{item.description}</p>
                            <button className="px-6 py-3 bg-purple-500 rounded-full text-lg max-md:text-base">
                                {item.title}
                            </button>
                        </div>
                    ))}
                </Carousel>
            </motion.div>
        </>
    );
};

export default Home;