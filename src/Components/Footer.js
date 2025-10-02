const Footer = (props) => {
    return (
        <div className={`tw-border-t-2 tw-grid tw-grid-cols-3 max-sm:tw-grid-cols-1 max-sm:tw-text-center tw-gap-2 tw-p-5 tw-w-full ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
            <div>
                <p className='tw-font-bold'>Documentation</p>
                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('docs');
                    setTimeout(() => {
                        const TEMPO = document.getElementById('TEMPO');
                        TEMPO.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>What is TEMPO?</button>
                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('docs');
                    setTimeout(() => {
                        const geostationary = document.getElementById('geostationary');
                        geostationary.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Why is TEMPO mounted on a Satellite in a geostationary area on Earth?</button>
                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('docs');
                    setTimeout(() => {
                        const measures = document.getElementById('measures');
                        measures.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>What does TEMPO meausres?</button>
                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('docs');
                    setTimeout(() => {
                        const conclusion = document.getElementById('conclusion');
                        conclusion.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Conclusion: TEMPO is a measurement appraoch</button>
            </div>
            <div>
                <p className='tw-font-bold'>About Us</p>
                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const who = document.getElementById('who');
                        who.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Who are we?</button>

                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const insight = document.getElementById('insight');
                        insight.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Our insight</button>

                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const aim = document.getElementById('aim');
                        aim.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Our aim</button>

                <button className="tw-block max-sm:tw-mx-auto" onClick={() => {
                    props.setActivePage('about');
                    setTimeout(() => {
                        const team = document.getElementById('team');
                        team.scrollIntoView({ behavior: 'smooth' });
                    }, 500);
                }}>Meet our team</button>
            </div>
            <div>
                <p className='tw-font-bold'>FAQ</p>
            </div>
        </div>
    );
};

export default Footer;