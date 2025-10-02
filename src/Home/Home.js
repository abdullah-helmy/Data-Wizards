import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import Satellite from "../Components/Satellite";
import Galaxy from "../Components/Galaxy";
import IMAGE5 from '../Images/IMAGE5.png';

const Home = (props) => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const options = [
        {
            country: 'USA',
            states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illionis', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'New Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
        },
        {
            country: 'Canada',
            states: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
        },
        {
            country: 'Mexico',
            states: ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila (Coahuila de Zaragoza)', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'México', 'Michoacán (Michoacán de Ocampo)', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro (Querétaro de Arteaga)', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz (Veracruz de Ignacio de la Llave)', 'Yucatán', 'Zacatecas'],
        }
    ];

    const getSlides2 = (props) => [
        {
            button: {
                title: "See Documentation",
                triggerEvent: () => props.setActivePage('docs'),
            },
            description: "Curious about NASA TEMPO Project? See our documentation.",
        },
        {
            button: {
                title: "See latest forecasts",
                triggerEvent: () => props.setScrollToForecast(true),
            },
            description: "Need a real-time air quality forecast? See the latest air quality forecast.",
        },
        {
            button: {
                title: "Register",
                triggerEvent: () => props.setActivePage('login'),
            },
            description: "New to our website? Join us.",
        },
    ];

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const states = options.find((option) => option.country === selectedCountry)?.states || [];

    const slides1 = useMemo(() => {
        return Array(6).fill(null).map(() => ({
            location: `${selectedCountry}, ${selectedState}`,
            time: `${hour}:${minute}`,
            description: 'Air quality today is',
        }))
    }, [hour, minute, selectedCountry, selectedState]);
    const slides2 = getSlides2(props);

    useEffect(() => {
        if (props.scrollToForecast && props.forecast.current) {
            const timer = setTimeout(() => {
                props.forecast.current.scrollIntoView({ behavior: 'smooth' });
                props.setScrollToForecast(false);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [props.scrollToForecast, props.forecast, props]);

    const containerRef = useRef(null);

    return (
        <>
            <Galaxy mouseInteraction={false} mouseRepulsion={false}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="tw-h-full tw-w-full"
                >
                    <div className="tw-flex tw-flex-row tw-flex-wrap max-md:tw-py-5">
                        <div className="tw-h-fit tw-mr-[50px] max-md:tw-w-full max-md:tw-mr-0 max-sm:tw-px-2 max-sm: tw-items-center tw-text-center">
                            <p className="tw-ml-[200px] tw-mt-[200px] max-xl:tw-mt-[300px] max-sm:tw-mt-5 max-lg:tw-mt-[100px] tw-font-bold tw-text-3xl max-md:tw-ml-0 max-md:tw-mt-10 max-md:tw-text-xl">
                                The first end-to-end TEMPO support, <br />monitoring and forecasting air quality<br />in North America.
                            </p>
                            <p className="tw-ml-[200px] tw-text-xl max-md:tw-ml-4 max-md:tw-text-base">
                                Resources from NASA and other TEMPO institutions, real-time, <br />user-friendly air quality forecast application and tips to be<br />protected form pollution.
                            </p>
                            <button
                                className={`tw-ml-[200px] tw-mt-[50px] tw-px-6 tw-py-3 tw-bg-purple-500 tw-border-none tw-rounded-full tw-text-lg max-md:tw-ml-4 max-md:tw-mt-6 max-md:tw-text-base ${props.isDark ? 'tw-text-white' : 'tw-text-black'}`}
                                onClick={() => props.setScrollToForecast(true)}
                            >
                                See latest forecasts
                            </button>
                        </div>

                        <div
                            ref={containerRef}
                            className="tw-flex tw-justify-center tw-items-center tw-h-[800px] max-md:tw-hidden"
                        >
                            <Satellite isDark={props.isDark} className="tw-w-full tw-h-full max-lg:tw-w-[400px] max-lg:tw-h-[600px] max-md:" />
                        </div>
                    </div>
                </motion.div>
            </Galaxy>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                className="tw-flex tw-flex-row tw-mx-[200px] tw-justify-center tw-content-center tw-py-10 max-md:tw-flex-col max-md:tw-mx-4 tw-items-center tw-text-center"
            >
                <img src={IMAGE5} alt="Something went wrong" className="max-md:tw-order-2 max-lg:tw-mr-10 max-lg:tw-w-80 max-lg:tw-h-72 max-md:tw-w-30 max-md:tw-h-30 max-md:tw-mx-auto max-md:tw-my-4" />
                <div className="tw-flex tw-flex-col tw-justify-center tw-content-center tw-order-1 ">
                    <p className="tw-mx-auto tw-font-bold tw-text-3xl max-md:tw-text-xl">What is TEMPO?</p>
                    <p className="tw-ml-[240px] tw-mr-[200px] max-lg:tw-mr-0 max-lg:tw-w-80 max-lg:tw-ml-0 tw-text-xl max-md:tw-ml-0 max-md:tw-mr-0 max-md:tw-text-base">
                        Tropospheric Emissions: Monitoring of Pollution instrument is the first NASA mission capable of monitoring hourly air pollution over greater North America from a geostationary orbit of ~22,000 miles away.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="tw-py-10"
            >
                <Carousel slide interval={5000} className={props.isDark ? 'tw-carousel-dark' : 'tw-carousel-light'}>
                        {slides2.map((item, index) => (
                            <Carousel.Item key={index} className="tw-h-52">
                                <div className="tw-flex-shrink-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-10">
                                    <p className="tw-text-xl tw-font-bold tw-mb-4 tw-text-center max-md:tw-text-base">{item.description}</p>
                                    <button className="tw-px-6 tw-py-3 tw-bg-purple-500 tw-rounded-full tw-text-lg max-md:tw-text-base" onClick={() => item.button.triggerEvent()}>{item.button.title}</button>
                                </div>
                            </Carousel.Item>
                        ))}
                </Carousel>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                ref={props.forecast}
                className="tw-grid tw-grid-cols-2 max-sm:tw-grid-cols-1 tw-gap-4 tw-py-10"
            >
                <form className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-m-5 tw-p-5 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
                    <label>Name</label>
                    <input
                        type="text"
                        className={`tw-h-8 tw-border tw-border-solid tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                    />
                    <label>Country</label>
                    <select
                        value={selectedCountry}
                        onChange={(e) => {
                            setSelectedCountry(e.target.value);
                            setSelectedState('');
                        }}
                        className={`tw-block ${props.isDark ? 'tw-text-black' : 'tw-text-white tw-bg-slate-400'}`}
                    >
                        <option value="">Select a country</option>
                        {options.map((option) => (
                            <option key={option.country} value={option.country}>{option.country}</option>
                        ))}
                    </select>
                    <label>State</label>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        disabled={!selectedCountry}
                        className={`tw-block ${props.isDark ? 'tw-text-black' : 'tw-text-white tw-bg-slate-400'}`}
                    >
                        <option value="">Select a state</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className={`tw-h-10 tw-w-[300px] max-md:tw-w-[250px] tw-m-auto tw-my-5 tw-border-2 tw-bg-purple-500 tw-border-none tw-rounded-full ${props.isDark ? 'tw-text-white' : 'tw-text-black'}`}
                    >
                        Get Forecast
                    </button>
                </form>

                <Carousel slide interval={5000} className={props.isDark ? 'tw-carousel-dark' : 'tw-carousel-light'}>
                        {slides1.map((item, index) => (
                            <Carousel.Item key={index}>
                                <div className="tw-flex-shrink-0 tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-10">
                                    <div className={`tw-flex tw-flex-col tw-justify-center tw-text-center tw-items-center tw-border tw-rounded-lg tw-p-8 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
                                        <FontAwesomeIcon className="tw-text-yellow-400" icon={faSun} />
                                        <p className="tw-text-lg tw-font-bold">{item.time}</p>
                                        <p className="tw-text-lg tw-font-bold">{item.location}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                </Carousel>
            </motion.div>
        </>
    );
};

export default Home;