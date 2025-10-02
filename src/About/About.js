import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import IMAGE2 from '../Images/IMAGE2.jpg';
import IMAGE3 from '../Images/IMAGE3.jpg';
import IMAGE4 from '../Images/IMAGE4.jpg';
import IMAGE6 from '../Images/IMAGE6.jpg';
import IMAGE7 from '../Images/IMAGE7.jpg';
import IMAGE8 from '../Images/IMAGE8.jpg';

const About = (props) => {
    return (
        <div className={`tw-my-16 tw-mx-[300px] max-lg:tw-mx-[100px] max-md:tw-mx-[50px] max-sm:tw-mx-[20px] tw-p-5 tw-border-2 tw-rounded-lg ${props.isDark ? 'tw-border-gray-600' : 'tw-border-slate-200'}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="tw-text-lg tw-pb-5"
            >
                <p className="tw-text-3xl tw-font-bold">About us</p>
                We are a team gathered by a common goal to innovate and improve public health by providing an advanced air quality monitoring and management solution. Our project is the first user-friendly, end-to-end air quality forecasting solution that incorporates modern Artificial Intelligence (AI) and data analytics technology to provide accurate predictions and forecasts for air quality in North America in real time.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                className="tw-text-lg tw-pb-5"
                id="insight"
            >
                <p className="tw-text-3xl tw-font-bold">Our insight</p>
                We endeavor to improve public health by helping people understand air quality forecasts in great detail and providing examples of preventive responses. Our solution is useful to users across many scenarios, for example, advising when to wear a mask and advising restrictions on outdoor activities. Our solution supports users with actionable responses to enable protection of themselves and their communities.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                className="tw-text-lg tw-pb-5"
                id="who"
            >
                <p className="tw-text-3xl tw-font-bold">Who are we?</p>
                Our team consists of a group of scholars, researchers, data and analytics experts, and user experience professionals working collaboratively within an emergent skillset to offer credible, real-world assessments of technology applications toward solving real-world problems. We believe we will deliver a user-friendly solution that is timely and empowers our users to take action toward improving their own and others' health via a cleaner and healthier environment.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                className="tw-text-lg tw-pb-5"
                id="aim"
            >
                <p className="tw-text-3xl tw-font-bold">Our aim</p>
                Through this project, we hope to achieve global sustainability goals to achieve a day when everyone can breathe.
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                className="tw-text-3xl tw-font-bold"
                id="team"
            >
                Our team
            </motion.p>

            <div className="tw-grid tw-grid-cols-3 max-lg:tw-grid-cols-2 tw-gap-6 max-md:tw-gap-3 max-sm:tw-grid-cols-1 tw-pt-2">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-p-14 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}
                >
                    <img className="tw-rounded-[100%] tw-h-[200px] tw-w-[200px] tw-mx-auto" src={IMAGE6} alt="Something went wrong" />
                    <p className="tw-text-xl tw-mx-auto">Abdullah M. Helmy</p>
                    <p className="tw-mx-auto">Researcher & front-end developer</p>
                    <div className="tw-flex tw-flex-row">
                        <a className="tw-mx-auto tw-text-blue-500 tw-text-4xl" href="https://www.linkedin.com/in/abdullah-helmy-2a2575281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FontAwesomeIcon icon={faSquareLinkedin} />
                        </a>
                        <a className="tw-mx-auto tw-text-4xl" href="https://github.com/abdullah-helmy">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-p-14 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}
                >
                    <img className="tw-rounded-[100%] tw-h-[200px] tw-w-[200px] tw-mx-auto" src={IMAGE8} alt="Something went wrong" />
                    <p className="tw-text-xl tw-mx-auto">Aya Mohammed</p>
                    <p className="tw-mx-auto">Researcher</p>
                    <a className="tw-mx-auto tw-text-blue-500 tw-text-4xl" href="https://www.linkedin.com/in/aya-mohamed-87a069371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-p-14 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}
                >
                    <img className="tw-rounded-[100%] tw-h-[200px] tw-w-[200px] tw-mx-auto" src={IMAGE3} alt="Something went wrong" />
                    <p className="tw-text-xl tw-mx-auto">Habiba Ayman</p>
                    <p className="tw-mx-auto">Researcher</p>
                    <a className="tw-mx-auto tw-text-blue-500 tw-text-4xl" href="https://www.linkedin.com/in/habiba-ayman-b08abb332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-p-14 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}
                >
                    <img className="tw-rounded-[100%] tw-h-[200px] tw-w-[200px] tw-mx-auto" src={IMAGE4} alt="Something went wrong" />
                    <p className="tw-text-xl tw-mx-auto">Asaad Zein</p>
                    <p className="tw-mx-auto">Front-end developer, AI & data analysis</p>
                    <div className="tw-flex tw-flex-row">
                        <a className="tw-mx-auto tw-text-blue-500 tw-text-4xl" href="https://www.linkedin.com/in/asaad-zx?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bwtmd0jDsR2WHLYr3WnJJ0g%3D%3D">
                            <FontAwesomeIcon icon={faSquareLinkedin} />
                        </a>
                        <a className="tw-mx-auto tw-text-4xl" href="https://github.com/asaadzx">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-p-14 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}
                >
                    <img className="tw-rounded-[100%] tw-h-[200px] tw-w-[200px] tw-mx-auto" src={IMAGE7} alt="Something went wrong" />
                    <p className="tw-text-xl tw-mx-auto">Alya Elwan</p>
                    <a className="tw-mx-auto tw-text-blue-500 tw-text-4xl" href="https://www.linkedin.com/in/alya-elwan-612a4a341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 2 }}
                    className={`tw-flex tw-flex-col tw-justify-center tw-border tw-rounded-lg tw-p-14 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}
                >
                    <img className="tw-rounded-[100%] tw-h-[200px] tw-w-[200px] tw-mx-auto" src={IMAGE2} alt="Something went wrong" />
                    <p className="tw-text-xl tw-mx-auto">Hager Gomaa</p>
                    <p className="tw-mx-auto">Front-end developer</p>
                    <a className="tw-mx-auto tw-text-blue-500 tw-text-4xl" href="/">
                        <FontAwesomeIcon icon={faSquareLinkedin} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default About;