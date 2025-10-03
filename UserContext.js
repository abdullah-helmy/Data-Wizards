import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [savedSelectedCountry, setSavedSelectedCountry] = useState('');
    const [savedSelectedState, setSavedSelectedState] = useState('');
    const [savedName, setSavedName] = useState('');
    const [savedUsername1, setSavedUsername1] = useState('');
    const [savedPassword1, setSavedPassword1] = useState('');
    const [savedUsername2, setSavedUsername2] = useState('');
    const [savedEmail, setSavedEmail] = useState('');
    const [savedPhone, setSavedPhone] = useState('');
    const [savedPassword2, setSavedPassword2] = useState('');

    return (
        <UserContext.Provider
            value={{
                savedName,
                setSavedName,
                savedSelectedCountry,
                setSavedSelectedCountry,
                savedSelectedState,
                setSavedSelectedState,
                savedUsername1,
                setSavedUsername1,
                savedPassword1,
                setSavedPassword1,
                savedUsername2,
                setSavedUsername2,
                savedEmail,
                setSavedEmail,
                savedPhone,
                setSavedPhone,
                savedPassword2,
                setSavedPassword2
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);