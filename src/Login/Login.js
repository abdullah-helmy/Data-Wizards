import { useEffect, useState } from "react";

const Login = (props) => {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
        const inputs = document.querySelectorAll('input');

        inputs.forEach(input => {
            if (props.isDark) {
                input.classList.add('tw-bg-black', 'tw-border-white', 'tw-shadow-white');
                input.classList.remove('tw-bg-white', 'tw-border-black', 'tw-shadow-black');
            } else {
                input.classList.remove('tw-bg-black', 'tw-border-white', 'tw-shadow-white');
                input.classList.add('tw-bg-white', 'tw-border-black', 'tw-shadow-black');
            }
        });
    }, [props.isDark]);

    const changeSignIn = () => setSignIn(prev => !prev);

    return (
        <div className="tw-min-h-screen tw-flex tw-flex-col tw-justify-center tw-align-center tw-m-auto tw-w-[800px] tw-h-[750px] max-md:tw-w-[600px] max-sm:tw-w-[400px]">
            {signIn ? (
                <div>
                    <form className={`tw-flex tw-flex-col tw-shadow-lg tw-justify-center tw-content-center tw-border-2 tw-rounded-lg tw-p-5 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
                        <label>Username</label>
                        <input
                            type="text"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />

                        <button
                            type="submit"
                            className='tw-h-10 tw-w-[300px] tw-m-auto tw-my-5 tw-border-2 tw-bg-purple-500 tw-border-none tw-rounded-full'
                        >
                            Sign in
                        </button>

                        <p>
                            If you don't have an account, <button className="tw-text-blue-400" onClick={changeSignIn}>Register</button>
                        </p>
                    </form>
                </div>
            ) : (
                <div>
                    <form className={`tw-flex tw-flex-col tw-shadow-lg tw-justify-center tw-content-center tw-border-2 tw-rounded-lg tw-p-5 ${props.isDark ? 'tw-border-gray-600 tw-bg-slate-800' : 'tw-border-slate-200 tw-bg-slate-100'}`}>
                        <label>Username</label>
                        <input
                            type="text"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className={`tw-h-8 tw-border-2 tw-border-solid tw-border-black tw-rounded-md ${props.isDark ? 'tw-bg-black tw-border-white tw-shadow-white' : 'tw-bg-white tw-border-black tw-shadow-black'}`}
                        />

                        <button
                            type="submit"
                            className='tw-h-10 tw-w-[300px] tw-m-auto tw-my-5 tw-border-2 tw-bg-purple-500 tw-border-none tw-rounded-full'
                        >
                            Sign up
                        </button>

                        <p>
                            If you have already an account, <button className="tw-text-blue-400" onClick={changeSignIn}>Sign in</button>
                        </p>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;