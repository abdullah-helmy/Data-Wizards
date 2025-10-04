import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faLocationDot, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { homeContent, northAmericanCities } from "../config/data";
import Galaxy from "../Components/Galaxy";
import Satellite from "../Components/Satellite";
import IMAGE5 from '../Images/IMAGE5.png';

const Home = (props) => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        state: ''
    });
    
    const [selectedCity, setSelectedCity] = useState(null);
    const [airQualityStatus, setAirQualityStatus] = useState({
        status: 'idle', // 'idle', 'loading', 'success', 'error'
        message: '',
        isHealthy: null,
        timestamp: null,
        data: null
    });
    const [healthStatus, setHealthStatus] = useState({
        status: 'idle', // 'idle', 'loading', 'success', 'error'
        message: '',
        isHealthy: null,
        timestamp: null,
        data: null
    });
    
    const carouselRef = useRef(null);
    const [citiesAirQuality, setCitiesAirQuality] = useState([]);
    const [loadingCities, setLoadingCities] = useState(false);
    
    // Fetch health status and cities air quality data from API
    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
                const response = await fetch('http://localhost:8000/health'); // using local api for showing but in production it will be using the real api
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                setHealthStatus({
                    status: 'success',
                    message: 'Health status retrieved',
                    isHealthy: data.status === 'healthy',
                    timestamp: data.timestamp,
                    data: data
                });
            } catch (error) {
                console.error('Error fetching health status:', error);
                setHealthStatus({
                    status: 'error',
                    message: 'Failed to load health status',
                    isHealthy: false
                });
            }
        };
        
        const fetchCitiesAirQuality = async () => {
            setLoadingCities(true);
            try {
                const updatedCities = await Promise.all(
                    northAmericanCities.map(async (city) => {
                        try {
                            const response = await fetch(
                                `http://localhost:8000/aqi/current?lat=${city.lat}&lon=${city.lon}&location_name=${encodeURIComponent(city.name)}`, // using local api for showing but in production it will be using the real api
                                {
                                    headers: {
                                        'accept': 'application/json'
                                    }
                                }
                            );
                            if (!response.ok) throw new Error('Failed to fetch');
                            const data = await response.json();
                            return { 
                                ...city, 
                                ...data,
                                lastUpdated: new Date().toISOString() 
                            };
                        } catch (error) {
                            console.error(`Error fetching data for ${city.name}:`, error);
                            return { 
                                ...city, 
                                error: 'Failed to load data', 
                                lastUpdated: new Date().toISOString() 
                            };
                        }
                    })
                );
                setCitiesAirQuality(updatedCities);
            } catch (error) {
                console.error('Error fetching cities data:', error);
            } finally {
                setLoadingCities(false);
            }
        };

        // Fetch both health status and cities data on mount
        fetchHealthStatus();
        fetchCitiesAirQuality();
        
        // Set up intervals
        const healthIntervalId = setInterval(fetchHealthStatus, 5 * 60 * 1000);
        const citiesIntervalId = setInterval(fetchCitiesAirQuality, 15 * 60 * 1000); // Update every 15 minutes
        
        return () => {
            clearInterval(healthIntervalId);
            clearInterval(citiesIntervalId);
        };
    }, []);

    const getSlides2 = (props) => [
        {
            button: {
                title: homeContent.slides[0].buttonText,
                triggerEvent: () => props.setActivePage('docs'),
            },
            description: homeContent.slides[0].description,
        },
        {
            button: {
                title: homeContent.slides[1].buttonText,
                triggerEvent: () => props.setScrollToForecast(true),
            },
            description: homeContent.slides[1].description,
        },
        {
            button: {
                title: homeContent.slides[2].buttonText,
                triggerEvent: () => props.setActivePage('login'),
            },
            description: homeContent.slides[2].description,
        },
    ];

    const { options } = homeContent;
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const states = useMemo(() => {
        return options.find((option) => option.country === selectedCountry)?.states || [];
    }, [selectedCountry, options]);

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

    const fetchAQIData = async (city) => {
        try {
            setAirQualityStatus(prev => ({ ...prev, status: 'loading', message: 'Fetching air quality data...' }));
            const response = await fetch(
                `http://localhost:8000/aqi/current?lat=${city.lat}&lon=${city.lon}&location_name=${encodeURIComponent(city.name)}`, // using local api for showing but in production it will be using the real api
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            setAirQualityStatus({
                status: 'success',
                message: '',
                isHealthy: data.aqi <= 100, // Consider AQI <= 100 as healthy
                timestamp: data.timestamp,
                data: data
            });
            
            return data;
        } catch (error) {
            console.error('Error fetching AQI data:', error);
            setAirQualityStatus({
                status: 'error',
                message: 'Failed to load air quality data',
                isHealthy: null,
                timestamp: new Date().toISOString(),
                data: null
            });
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // If a city is selected from the dropdown, fetch its AQI data
        if (selectedCity) {
            await fetchAQIData(selectedCity);
        }
        
        // Don't reset form after submission to keep the selected city visible
    };

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
                                {homeContent.hero.title}
                            </p>
                            <p className="tw-ml-[200px] tw-text-xl max-md:tw-ml-4 max-md:tw-text-base">
                                {homeContent.hero.description}
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
                {/* Health Status Display */}
                <div className={`tw-p-4 tw-rounded-lg tw-shadow-md ${props.isDark ? 'tw-bg-slate-800' : 'tw-bg-white'} tw-mx-4 tw-border-l-4 ${healthStatus.isHealthy ? 'tw-border-green-500' : 'tw-border-red-500'}`}>
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <div>
                            <h3 className="tw-text-lg tw-font-bold">System Health Status</h3>
                            <p className="tw-text-sm tw-text-gray-500">
                                Last updated: {healthStatus.timestamp ? new Date(healthStatus.timestamp).toLocaleString() : 'N/A'}
                            </p>
                        </div>
                        <div className={`tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium ${healthStatus.isHealthy ? 'tw-bg-green-100 tw-text-green-800' : 'tw-bg-red-100 tw-text-red-800'}`}>
                            {healthStatus.isHealthy ? 'Healthy' : 'Unhealthy'}
                        </div>
                    </div>
                    {healthStatus.data && (
                        <div className="tw-mt-2 tw-text-sm">
                            <p><strong>Version:</strong> {healthStatus.data.version}</p>
                            <p><strong>Status:</strong> {healthStatus.data.status}</p>
                        </div>
                    )}
                    {healthStatus.status === 'error' && (
                        <p className="tw-mt-2 tw-text-sm tw-text-red-600">Error loading health status</p>
                    )}
                </div>

                <form onSubmit={handleSubmit} className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-m-5 tw-p-5 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
                    <label>{homeContent.forecastForm.labels.name}</label>
                    <input
                        type="text"
                        placeholder={homeContent.forecastForm.placeholders.name}
                        className={`tw-h-8 tw-border tw-border-solid tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                    />
                    <label>{homeContent.forecastForm.labels.country}</label>
                    <select
                        value={selectedCountry}
                        onChange={(e) => {
                            setSelectedCountry(e.target.value);
                            setSelectedState('');
                        }}
                        className={`tw-block ${props.isDark ? 'tw-text-black' : 'tw-text-white tw-bg-slate-400'}`}
                    >
                        <option value="">{homeContent.forecastForm.placeholders.country}</option>
                        {options.map((option) => (
                            <option key={option.country} value={option.country}>{option.country}</option>
                        ))}
                    </select>
                    <label>{homeContent.forecastForm.labels.state}</label>
                    <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        disabled={!selectedCountry}
                        className={`tw-block ${props.isDark ? 'tw-text-black' : 'tw-text-white tw-bg-slate-400'}`}
                    >
                        <option value="">{homeContent.forecastForm.placeholders.state}</option>
                        {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                    <div className="tw-mb-4">
                        <label htmlFor="city" className="tw-block tw-text-sm tw-font-medium tw-mb-1">
                            Select a City
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip id="city-tooltip">
                                        Select a city to view its air quality information
                                    </Tooltip>
                                }
                            >
                                <span className="tw-ml-1 tw-text-gray-500">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                </span>
                            </OverlayTrigger>
                        </label>
                        <select
                            id="city"
                            className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md tw-bg-white tw-text-gray-900"
                            value={selectedCity ? selectedCity.name : ''}
                            onChange={(e) => {
                                const cityName = e.target.value;
                                const city = northAmericanCities.find(c => c.name === cityName);
                                setSelectedCity(city);
                            }}
                            required
                        >
                            <option value="">Select a city</option>
                            {northAmericanCities.map((city, index) => (
                                <option key={index} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className={`tw-h-10 tw-w-[300px] max-md:tw-w-[250px] tw-m-auto tw-my-5 tw-border-2 tw-bg-purple-500 tw-border-none tw-rounded-full ${props.isDark ? 'tw-text-white' : 'tw-text-black'}`}
                    >
                        {homeContent.forecastForm.labels.submit}
                    </button>
                </form>

                <div className="tw-w-full tw-mt-8">
                    {airQualityStatus.status === 'loading' ? (
                        <div className="tw-flex tw-justify-center tw-items-center tw-h-64">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            <span className="tw-ml-2">Loading air quality data...</span>
                        </div>
                    ) : airQualityStatus.status === 'success' && airQualityStatus.data ? (
                        <div className={`tw-p-6 tw-rounded-lg tw-shadow-md ${props.isDark ? 'tw-bg-slate-800' : 'tw-bg-white'} tw-mx-4`}>
                            <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
                                <div>
                                    <div className="tw-flex tw-items-center">
                                        <FontAwesomeIcon icon={faLocationDot} className="tw-text-red-500 tw-mr-2" />
                                        <h3 className="tw-text-xl tw-font-bold">
                                            {airQualityStatus.data.location?.name || selectedCity?.name}
                                        </h3>
                                    </div>
                                    <p className="tw-text-gray-500 tw-text-sm tw-mt-1">
                                        {new Date(airQualityStatus.data.timestamp).toLocaleString()}
                                    </p>
                                </div>
                                <div className="tw-text-right">
                                    <div className="tw-text-4xl tw-font-bold tw-text-blue-600">
                                        {airQualityStatus.data.aqi}
                                        <span className="tw-text-sm tw-ml-1 tw-text-gray-500">AQI</span>
                                    </div>
                                    <div className="tw-mt-1 tw-px-3 tw-py-1 tw-rounded-full tw-inline-block tw-bg-blue-100 tw-text-blue-800">
                                        {airQualityStatus.data.category}
                                    </div>
                                </div>
                            </div>

                            {/* Health Recommendation */}
                            {airQualityStatus.data.health_recommendation && (
                                <div className="tw-mt-4 tw-p-3 tw-rounded tw-bg-blue-50 tw-text-blue-800 tw-text-sm">
                                    <p className="tw-font-medium">Health Advice:</p>
                                    <p>{airQualityStatus.data.health_recommendation}</p>
                                </div>
                            )}

                            {/* Pollutant Levels */}
                            <div className="tw-mt-4">
                                <h4 className="tw-font-medium tw-mb-2">Pollutant Levels (AQI):</h4>
                                <div className="tw-grid tw-grid-cols-2 tw-gap-3">
                                    {airQualityStatus.data.pollutants && Object.entries(airQualityStatus.data.pollutants)
                                        .filter(([key]) => key.endsWith('_aqi'))
                                        .map(([key, value]) => {
                                            const pollutantName = key.split('_')[0];
                                            const aqiValue = value;
                                            const getAqiCategory = (aqi) => {
                                                if (aqi === null || aqi === undefined) return { category: 'No data', color: 'gray' };
                                                if (aqi <= 50) return { category: 'Good', color: 'green' };
                                                if (aqi <= 100) return { category: 'Moderate', color: 'yellow' };
                                                if (aqi <= 150) return { category: 'Unhealthy for Sensitive Groups', color: 'orange' };
                                                if (aqi <= 200) return { category: 'Unhealthy', color: 'red' };
                                                if (aqi <= 300) return { category: 'Very Unhealthy', color: 'purple' };
                                                return { category: 'Hazardous', color: 'maroon' };
                                            };
                                            const aqiCategory = getAqiCategory(aqiValue);
                                            
                                            return (
                                                <div key={key} className="tw-bg-gray-50 tw-p-3 tw-rounded">
                                                    <div className="tw-flex tw-justify-between">
                                                        <span className="tw-font-medium">{pollutantName}:</span>
                                                        <span className="tw-font-mono">
                                                            {aqiValue}
                                                        </span>
                                                    </div>
                                                    <div className="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2 tw-mt-1">
                                                        <div 
                                                            className="tw-h-2 tw-rounded-full" 
                                                            style={{ 
                                                                width: `${Math.min(100, (aqiValue / 300) * 100)}%`,
                                                                backgroundColor: aqiValue <= 50 ? '#10B981' : 
                                                                    aqiValue <= 100 ? '#F59E0B' : 
                                                                    aqiValue <= 150 ? '#F97316' :
                                                                    aqiValue <= 200 ? '#EF4444' :
                                                                    aqiValue <= 300 ? '#8B5CF6' : '#7F1D1D'
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="tw-text-xs tw-text-gray-500 tw-mt-1">
                                                        {aqiCategory.category}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            {/* Dominant Pollutant */}
                            {airQualityStatus.data.dominant_pollutant && (
                                <div className="tw-mt-4 tw-text-sm">
                                    <p><span className="tw-font-medium">Dominant Pollutant:</span> {airQualityStatus.data.dominant_pollutant}</p>
                                </div>
                            )}
                        </div>
                    ) : airQualityStatus.status === 'error' ? (
                        <div className="tw-p-4 tw-bg-red-100 tw-text-red-800 tw-rounded-lg">
                            <p className="tw-font-medium">Error loading air quality data</p>
                            <p className="tw-text-sm">{airQualityStatus.message || 'Please try again later.'}</p>
                        </div>
                    ) : (
                        <div className="tw-text-center tw-text-gray-500 tw-p-8">
                            <p>Select a city to view air quality information</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
};

export default Home;