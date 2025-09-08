import { useEffect, useRef, useState } from "react";

const Login = (props) => {
    const [signIn, setSignIn] = useState(false);

    const button = useRef(null);
    const form = useRef(null);

    useEffect(() => {
        const inputs = document.querySelectorAll('input');

        inputs.forEach(input => {
            if (props.isDark) {
                input.classList.add('bg-black', 'border-white', 'shadow-white');
                input.classList.remove('bg-white', 'border-black', 'shadow-black');
            } else {
               input.classList.remove('bg-black', 'border-white', 'shadow-white');
                input.classList.add('bg-white', 'border-black', 'shadow-black'); 
            }
        });

        if (props.isDark) {
            form.current.classList.add('border-white');
            form.current.classList.remove('border-black');

            button.current.classList.add('border-white');
            button.current.classList.remove('border-black');
        } else {
            form.current.classList.remove('border-white');
            form.current.classList.add('border-black');

            button.current.classList.remove('border-white');
            button.current.classList.add('border-black');
        }
    }, [props.isDark]);

    const changeSignIn = () => setSignIn(prev => !prev);
    
    return (
        <div className="min-h-screen flex flex-col justify-center align-center m-auto w-[800px] h-[750px]">
            {signIn ? (
                <>
                    <form
                        ref={form}
                        className="flex flex-col shadow-lg justify-center content-center border-2 rounded-lg p-5"
                    >
                        <label>Username</label>
                        <input
                            type="text"
                            className={`h-8 border border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            className={`h-8  border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />

                        <button
                            ref={button}
                            type="submit"
                            className={`h-10 w-[300px] m-auto my-5 border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        >
                            Sign in
                        </button>

                        <p>
                            If you have an account, <button className="text-blue-400" onClick={changeSignIn}>Login in your account</button>
                        </p>
                    </form>
                </>
            ) : (
                <>
                    <form
                        ref={form} 
                        className="flex flex-col shadow-lg justify-center content-center border-2 rounded-lg p-5"
                    >
                        <label>Username</label>
                        <input
                            type="text"
                            className={`h-8 border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            className={`h-8 border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />
                        <label>Phone Number</label>
                        <input
                            type="tel" 
                            className={`h-8 border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />
                        <label>Password</label>
                        <input
                            type="password" 
                            className={`h-8 border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className={`h-8 border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        />

                        <button
                            ref={button}
                            type="submit" 
                            className={`h-10 w-[300px] m-auto my-5 p-auto border-2 border-solid border-black rounded-md ${
                                props.isDark ? 'bg-black border-white shadow-white' : 'bg-white border-black shadow-black'
                            }`}
                        >
                            Sign up
                        </button>

                        <p>
                            If you have already an account, <button className="text-blue-400" onClick={changeSignIn}>Sign in</button>
                        </p>
                    </form>
                </>
            )}
        </div>
    );
};

export default Login;