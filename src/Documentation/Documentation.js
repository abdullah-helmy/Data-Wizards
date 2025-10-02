import { useEffect, useReducer, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Components/Sidebar";
import VIDEO1 from '../Images/VIDEO1.mp4';

const Documentation = (props) => {
    const idMap = [
        {
            id: 'TEMPO',
            description: 'What is TEMPO?',
        },
        {
            id: 'geostationary',
            description: 'Why is TEMPO mounted on a Satellite in a geostationary area on Earth?',
        },
        {
            id: 'measures',
            description: 'What does TEMPO meausres?',
        },
        {
            id: 'conclusion',
            description: 'Conclusion: TEMPO is a measurement appraoch',
        },
    ];
    const initialState = {
        currentSection: {
            id: 'TEMPO',
            description: 'What is TEMPO?'
        }
    };
    const isDark = props.isDark;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_SECTION':
                return {...state, currentSection: action.payload};
            default:
                return state;
        }
    };

    const [text, setText] = useState('');
    const [open, setOpen] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const section = document.getElementById(state.currentSection.id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, [state.currentSection]);

    return (
        <>
            <div className={`tw-flex tw-items-start tw-px-3 tw-py-2 tw-border-b-2 ${props.isDark ? 'tw-border-gray-600' : 'tw-border-slate-200'}`}>
                <button className="" onClick={() => setOpen(prev => !prev)}>
                    <FontAwesomeIcon className="tw-font-bold tw-text-lg tw-pr-12" icon={faGripLines} />
                </button>
                <p className="tw-text-lg">
                    <span className="tw-font-bold">Documentation</span> &nbsp;<span className="tw-text-slate-500">&gt;</span>&nbsp; {text}
                </p>
            </div>
            <div className="tw-flex tw-flex-row tw-w-full tw-min-h-screen">
                <Sidebar
                    isDark={isDark}
                    setText={setText}
                    open={open}
                    setOpen={setOpen}
                    dispatch={dispatch}
                    idMap={idMap}
                />
                <div className="tw-flex tw-flex-col tw-flex-1">
                    <div className={`tw-mx-auto tw-p-5 tw-max-w-screen-xl tw-w-full tw-rounded-tr-lg tw-rounded-tl-lg`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="tw-text-lg tw-pb-5 tw-flex tw-flex-col tw-items-center"
                            id='TEMPO'
                        >
                            <p className="tw-text-3xl tw-font-bold">What is TEMPO?</p>
                            TEMPO is NASA's first Earth Venture Instrument project, selected in
                            2012. It was developed at the Smithsonian Astrophysical
                            Observatory (SAO) with management at NASA Langley Research
                            Center (LaRC). TEMPO is the first NASA payload on a commercial
                            spacecraft. After its delivery in 2018, the mission partnered with
                            Maxar in 2019, which provided the satellite, and with Intelsat in
                            2020, which hosted the TEMPO instrument. It was launched on April
                            7, 2023 on Intelsat-40c by a SpaceX Falcon 9 rocket into
                            geostationary orbit. Its first Sun observation was on August 1, 2023,
                            followed by Earth-view on August 2. TEMPO began operations on
                            October 17, 2023.
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                            className="tw-text-lg tw-pb-5 tw-flex tw-flex-col tw-items-center"
                            id='geostationary'
                        >
                            <p className="tw-text-3xl tw-font-bold">Why is TEMPO mounted on a Satellite in a geostationary area on Earth?</p>
                            From its geostationary orbit approximately 35,786 kilometers above
                            Earth's equator, TEMPO provides continuous observations of air quality
                            across North America. A geostationary orbit allows the satellite to remain
                            fixed over a single longitude by revolving at the same rotational speed as
                            the Earth, enabling TEMPO to perform hourly daytime measurements at
                            spatial resolutions of a few square miles, compared to the 100 square
                            miles typical of previous systems. TEMPO employs UV/visible
                            spectroscopic techniques to measure atmospheric pollution, covering
                            regions from Mexico City and Puerto Rico to the Canadian oil sands, and
                            from the Atlantic to the Pacific. This nearly continuous monitoring
                            captures the strong temporal variability of pollutants influenced by
                            emissions, chemical processes, and meteorological conditions, providing
                            unprecedented insight into air quality dynamics across the continent.

                            <video className="tw-w-80 tw-h-80" src={VIDEO1} controls />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                            className="tw-text-lg tw-pb-5 tw-flex tw-flex-col tw-items-center"
                            id='measures'
                        >
                            <p className="tw-text-3xl tw-font-bold">What does TEMPO meausres? </p>
                            TEMPO measures the spectra needed to obtain the main mission
                            data products: total and profile ozone (O₃), nitrogen dioxide (NO₂),
                            formaldehyde (HCHO), and cloud properties (fraction and pressure).
                            It can also detect other pollutants such as sulfur dioxide (SO₂),
                            bromine monoxide (BrO), glyoxal (C₂H₂O₂), water vapor (H₂O),
                            nitrous acid (HNO₂), aerosols, and ultraviolet-B (UVB) radiation.
                            This means TEMPO can monitor the main gases involved in
                            tropospheric ozone chemistry, along with other important
                            atmospheric components. The resulting air quality data are shared
                            with the public through NASA's Atmospheric Science Data Center
                            (ASDC) at Langley Research Center.
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                            className="tw-text-lg tw-pb-5 tw-flex tw-flex-col tw-items-center"
                            id='conclusion'
                        >
                            <p className="tw-text-3xl tw-font-bold">Conclusion: TEMPO is a measurement appraoch</p>
                            TEMPO measures air pollutants in the troposphere from
                            geostationary orbit over North America. The instrument builds on
                            the experience of  6 earlier satellite spectrometers, GOME (Burrows
                            et al., 1999), SCIAMACHY (Bovensmann et al., 1999), OMI (Levelt et
                            al., 2006), GOME-2 (Munro et al., 2016), OMPS (Flynn et al., 2014) and
                            TROPOMI (Veefkind et al., 2012), as well as the GEMS instrument
                            (Kim et al., 2020), launched into GEO in 2020 to measure air
                            pollutants over eastern Asia.These previous missions proved that
                            the technology can achieve the accuracy required for TEMPO. What
                            makes TEMPO unique is its ability to provide hourly observations
                            with finer spatial resolution, capturing smaller pollution patterns
                            that were not possible to observe before. This combination of
                            frequent and detailed measurements establishes TEMPO as an
                            innovative advancement in satellite-based air quality monitoring,
                            providing a valuable dataset for scientific research and practical
                            applications.
                        </motion.div>
                    </div>

                    <div className={`tw-mb-10 tw-mx-auto tw-p-5 tw-max-w-screen-xl tw-w-full tw-rounded-b-lg`}>
                        <p>djuihfwjiofwofjwe</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Documentation;