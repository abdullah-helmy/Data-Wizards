import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import IMAGE2 from '../Images/IMAGE2.jpg'
import IMAGE3 from '../Images/IMAGE3.jpg';
import IMAGE4 from '../Images/IMAGE4.jpg';
import IMAGE6 from '../Images/IMAGE6.jpg'

const About = (props) => {
    const div = useRef(null);

    useEffect(() => {
        if (props.isDark) {
            div.current.classList.add('border-white');
            div.current.classList.remove('border-black');
        } else {
            div.current.classList.remove('border-white');
            div.current.classList.add('border-black');
        }
    }, [props.isDark])

    return (
        <div ref={div} className="my-16 mx-[300px] p-5 border-2 rounded-lg">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-lg pb-5"
            >
                <p className="text-3xl font-bold">About us</p>
                We are a team gathered by a common goal to innovate and improve public health by providing an advanced air quality monitoring and management solution. Our project is the first user-friendly, end-to-end air quality forecasting solution that incorporates modern Artificial Intelligence (AI) and data analytics technology to provide accurate predictions and forecasts for air quality in North America in real time.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                className="text-lg pb-5"
            >
                <p className="text-3xl font-bold">Our insight</p>
                We endeavor to improve public health by helping people understand air quality forecasts in great detail and providing examples of preventive responses. Our solution is useful to users across many scenarios, for example, advising when to wear a mask and advising restrictions on outdoor activities. Our solution supports users with actionable responses to enable protection of themselves and their communities.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="text-lg pb-5"
            >
                <p className="text-3xl font-bold">Who are we?</p>
                Our team consists of a group of scholars, researchers, data and analytics experts, and user experience professionals working collaboratively within an emergent skillset to offer credible, real-world assessments of technology applications toward solving real-world problems. We believe we will deliver a user-friendly solution that is timely and empowers our users to take action toward improving their own and others' health via a cleaner and healthier environment.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                className="text-lg pb-5"
            >
                <p className="text-3xl font-bold">Our aim</p>
                Through this project, we hope to achieve global sustainability goals to achieve a day when everyone can breathe.
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="text-3xl font-bold"
            >
                Our team
            </motion.p>

            <div className="grid grid-cols-3 gap-6 pt-2">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="flex flex-col justify-center border border-gray-600 rounded-lg bg-slate-900 p-14"
                >
                    <img className="rounded-[100%] h-[200px] w-[200px] mx-auto" src={IMAGE6} alt="Something went wrong" />
                    <p className="text-xl mx-auto">Abdullah M. Helmy</p>
                    <p className="mx-auto">Researcher & front-end developer</p>
                    <a className="mx-auto text-blue-500 text-4xl" href="">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="flex flex-col justify-center border border-gray-600 rounded-lg bg-slate-900 p-14"
                >
                    <img />
                    <p className="text-xl mx-auto">Aya Mohammed</p>
                    <p className="mx-auto">Researcher</p>
                    <a className="mx-auto text-blue-500 text-4xl" href="">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="flex flex-col justify-center border border-gray-600 rounded-lg bg-slate-900 p-14"
                >
                    <img className="rounded-[100%] h-[200px] w-[200px] mx-auto" src={IMAGE3} alt="Something went wrong" />
                    <p className="text-xl mx-auto">Habiba</p>
                    <p className="mx-auto">Researcher</p>
                    <a className="mx-auto text-blue-500 text-4xl" href="">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="flex flex-col justify-center border border-gray-600 rounded-lg bg-slate-900 p-14"
                >
                    <img className="rounded-[100%] h-[200px] w-[200px] mx-auto" src={IMAGE4} alt="Something went wrong" />
                    <p className="text-xl mx-auto">Asaad Zein</p>
                    <p className="mx-auto">Front-end developer, AI & data analysis</p>
                    <a className="mx-auto text-blue-500 text-4xl" href="">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="flex flex-col justify-center border border-gray-600 rounded-lg bg-slate-900 p-14"
                >
                    <img />
                    <p className="text-xl mx-auto">Alya Elwan</p>
                    <a className="mx-auto text-blue-500 text-4xl" href="">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="flex flex-col justify-center border border-gray-600 rounded-lg bg-slate-900 p-14"
                >
                    <img className="rounded-[100%] h-[200px] w-[200px] mx-auto" src={IMAGE2} alt="Something went wrong" />
                    <p className="text-xl mx-auto">Hager Gomaa</p>
                    <p className="mx-auto">Front-end developer</p>
                    <a className="mx-auto text-blue-500 text-4xl" href="">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;