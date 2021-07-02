import axios from "axios";
import authStorage from "../utils/authStorage";
const baseUrl = "http://192.168.1.53:36656/api/";

interface ICredentials {
    name?: string;
    password: string;
    email: string;
}

const tryAuth = async (credentials: ICredentials) => {
    const route = credentials.name
        ? "register"
        : "login";
    const response = await axios.post(
        `${baseUrl}${route}`,
        credentials
    );
    if (response.status === 200) void await authStorage.setToken(response.data.token);
    return response;
};

const handleAuthentication = async (credentials: ICredentials): Promise<string> => {
    const registerResult = await tryAuth(credentials);
    return registerResult.status !== 200
        ? "Unable to Successfully Complete Registration ...Try Again"
        : "Registration Succees";
};

export default { handleAuthentication };
