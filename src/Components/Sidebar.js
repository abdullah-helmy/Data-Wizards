const Sidebar = (props) => {
    const docsItems = [
        'What is TEMPO?',
        'Why is TEMPO mounted on a Satellite in a geostationary area on Earth?',
        'What does TEMPO meausres?',
        'Conclusion: TEMPO is a measurement appraoch',
    ];

    return (
        <div>
            <div className={`tw-min-h-screen tw-max-w-72 tw-border tw-border-t-0 tw-border-b-0 tw-flex-shrink-0 tw-duration-300 ${!props.open ? 'max-sm:tw-hidden' : ''} ${props.open ? 'tw-w-60 tw-p-2' : 'tw-w-0 tw-p-0 tw-hidden'} ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
                <p className={`tw-text-left tw-font-bold ${!props.open && 'tw-w-0 tw-p-0 tw-translate-x-24'} tw-duration-500 tw-overflow-hidden`}>Documentation</p>
                <ul>
                    {docsItems.map((item, index) => {
                        const matchedSection = props.idMap.find((section) => section.description === item);
                        return (
                            <li key={index} className="tw-px-3 tw-py-2 tw-rounded-md">
                                <button
                                    className={`tw-text-left ${!props.open && 'tw-w-0 tw-p-0 tw-translate-x-24'} tw-duration-500 tw-overflow-hidden`}
                                    onClick={() => {
                                        props.setText(item);
                                        if (matchedSection) {
                                            props.dispatch({ type: 'SET_SECTION', payload: matchedSection });
                                            props.setOpen(false);
                                        }
                                    }}
                                >{item}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;