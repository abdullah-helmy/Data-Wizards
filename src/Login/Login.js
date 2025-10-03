import { useEffect, useRef, useState } from "react";
import Galaxy from "../Components/Galaxy";
import { signIn, signUp, onAuthStateChange } from "../Components/Firebase";


const Login = (props) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const button = useRef(null);
    const form = useRef(null);

    useEffect(() => {
        // Check if user is already logged in
        const unsubscribe = onAuthStateChange((user) => {
            if (user) {
                // Redirect to home or dashboard
                console.log("you loged in using ", user.email);
                alert("you loged in using ", user.email)
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!form.current) return;
        
        const inputs = form.current.querySelectorAll('input');
        const formElement = form.current;

        inputs.forEach(input => {
            if (props.isDark) {
                input.classList.add('tw-bg-black', 'tw-border-white', 'tw-shadow-white');
                input.classList.remove('tw-bg-white', 'tw-border-black', 'tw-shadow-black');
            } else {
                input.classList.remove('tw-bg-black', 'tw-border-white', 'tw-shadow-white');
                input.classList.add('tw-bg-white', 'tw-border-black', 'tw-shadow-black');
            }
        });

        if (props.isDark) {
            formElement.classList.add('tw-border-white');
            formElement.classList.remove('tw-border-black');
        } else {
            formElement.classList.remove('tw-border-white');
            formElement.classList.add('tw-border-black');
        }
    }, [props.isDark, isSignIn]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignIn) {
                // Sign in
                await signIn(formData.email, formData.password);
                console.log("you signed in using ", formData.email);
            } else {
                // Sign up
                if (formData.password !== formData.confirmPassword) {
                    throw new Error("Passwords don't match!");
                }
                await signUp(formData.email, formData.password);
                // Additional user data can be saved to Firestore here
                console.log("you signed up using ", formData.email);
            }
        } catch (err) {
            setError(err.message || 'Failed to authenticate');
            console.error('Authentication error:', err);
        } finally {
            setLoading(false);
        }
    };

    const toggleAuthMode = () => {
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
            phone: ''
        });
        setError('');
        setIsSignIn(prev => !prev);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center align-center m-auto w-[800px] h-[750px]">
            {isSignIn ? (
                <div>
                    <Galaxy mouseInteraction={false} mouseRepulsion={false}>
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="tw-flex tw-flex-col tw-shadow-lg tw-justify-center tw-content-center tw-border-2 tw-rounded-lg tw-p-5 tw-w-full tw-max-w-md tw-mx-auto"
                        >
                            <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-center">Sign In</h2>
                            
                            {error && (
                                <div className="tw-mb-4 tw-p-2 tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-rounded">
                                    {error}
                                </div>
                            )}
                            
                            <label className="tw-mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`tw-h-10 tw-px-3 tw-mb-4 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Enter your email"
                            />
                            
                            <label className="tw-mb-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength="6"
                                className={`tw-h-10 tw-px-3 tw-mb-6 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Enter your password"
                            />

                            <button
                                ref={button}
                                type="submit"
                                disabled={loading}
                                className={`tw-h-12 tw-w-full tw-m-auto tw-my-2 tw-border-2 tw-bg-purple-500 hover:tw-bg-purple-600 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-full tw-transition-colors ${
                                    loading ? 'tw-opacity-70 tw-cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? 'Signing in...' : 'Sign In'}
                            </button>

                            <p className="tw-text-center tw-mt-4">
                                Don't have an account?{' '}
                                <button 
                                    type="button" 
                                    onClick={toggleAuthMode}
                                    className="tw-text-blue-500 hover:tw-underline focus:tw-outline-none"
                                >
                                    Sign up
                                </button>
                            </p>
                        </form>
                    </Galaxy>
                </div>
            ) : (
                <div>
                    <Galaxy mouseInteraction={false} mouseRepulsion={false}>
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="tw-flex tw-flex-col tw-shadow-lg tw-justify-center tw-content-center tw-border-2 tw-rounded-lg tw-p-5 tw-w-full tw-max-w-md tw-mx-auto"
                        >
                            <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-center">Create Account</h2>
                            
                            {error && (
                                <div className="tw-mb-4 tw-p-2 tw-bg-red-100 tw-border tw-border-red-400 tw-text-red-700 tw-rounded">
                                    {error}
                                </div>
                            )}
                            
                            <label className="tw-mb-1">Username</label>
                            <input
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className={`tw-h-10 tw-px-3 tw-mb-4 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Choose a username"
                            />
                            
                            <label className="tw-mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`tw-h-10 tw-px-3 tw-mb-4 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Enter your email"
                            />
                            
                            <label className="tw-mb-1">Phone Number (Optional)</label>
                            <input
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`tw-h-10 tw-px-3 tw-mb-4 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Enter your phone number"
                            />
                            
                            <label className="tw-mb-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength="6"
                                className={`tw-h-10 tw-px-3 tw-mb-2 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Create a password (min 6 characters)"
                            />
                            
                            <label className="tw-mb-1">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                minLength="6"
                                className={`tw-h-10 tw-px-3 tw-mb-6 tw-border-2 tw-rounded-md ${
                                    props.isDark
                                        ? 'tw-bg-black tw-border-white tw-shadow-white tw-text-white'
                                        : 'tw-bg-white tw-border-black tw-shadow-black tw-text-black'
                                }`}
                                placeholder="Confirm your password"
                            />

                            <button
                                ref={button}
                                type="submit"
                                disabled={loading}
                                className={`tw-h-12 tw-w-full tw-m-auto tw-my-2 tw-border-2 tw-bg-purple-500 hover:tw-bg-purple-600 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-full tw-transition-colors ${
                                    loading ? 'tw-opacity-70 tw-cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>

                            <p className="tw-text-center tw-mt-4">
                                Already have an account?{' '}
                                <button 
                                    type="button" 
                                    onClick={toggleAuthMode}
                                    className="tw-text-blue-500 hover:tw-underline focus:tw-outline-none"
                                >
                                    Sign in
                                </button>
                            </p>
                        </form>
                    </Galaxy>
                </div>
            )}
        </div>
    );
};

export default Login;