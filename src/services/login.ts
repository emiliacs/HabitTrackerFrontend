import axios from "axios";
const baseUrl = "http://192.168.1.53:36656/api/";

interface IRegisterCredentials {
    name: string;
    password: string;
    email: string;
}

interface ILoginCredentials {
    password: string;
    email: string;
}

const tryRegister = async ({ name, password, email }: IRegisterCredentials) => {
    const credentials = { name, password, email };
    try {
        const response = await axios.post(
            `${baseUrl}register`,
            credentials
        );
        return response;
    } catch (error) {
        const axiosError = error as Error;
        return axiosError;
    }
};

const handleRegister = async ({ name, password, email }: IRegisterCredentials): Promise<string> => {
    const registerResult = await tryRegister({ name, password, email });
    return registerResult instanceof Error || registerResult.status !== 200
        ? "Unable to Successfully Complete Registration ...Try Again"
        : "Registration Succees";
};

const tryLogin = async ({ password, email }: ILoginCredentials) => {
    const credentials = { password, email };
    try {
        const response = await axios.post(
            `${baseUrl}login`,
            credentials
        );
        return response;
    } catch (error) {
        const axiosError = error as Error;
        return axiosError;
    }
};

const handleLogin = async ({ password, email }: ILoginCredentials): Promise<string> => {
    const registerResult = await tryLogin({ password, email });
    return registerResult instanceof Error || registerResult.status !== 200
        ? "Unable to Successfully Complete Login ...Try Again"
        : "Login Succees";
};

export default { handleRegister, handleLogin };
