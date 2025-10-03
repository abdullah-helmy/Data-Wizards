import { useUser } from "./UserContext";

const Data = () => {
    const {
        savedName,
        savedSelectedCountry,
        savedSelectedState,
        savedUsername1,
        savedPassword1,
        savedUsername2,
        savedEmail,
        savedPhone,
        savedPassword2
    } = useUser();

    const UserData = {
        name: savedName,
        country: savedSelectedCountry,
        state: savedSelectedState,
        username1: savedUsername1,
        password1: savedPassword1,
        username2: savedUsername2,
        email: savedEmail,
        phone: savedPhone,
        password2: savedPassword2
    };

    return null;
};

export default Data;