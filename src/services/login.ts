import axios from "axios";
import authStorage from "../utils/authStorage";
import { IUser } from "../types";
import { API_URL } from "@env";

const baseUrl = API_URL;

interface ICredentials {
    name?: string;
    password: string;
    email: string;
}

const tryValidateToken = async (token: string) => {
    const response = await axios.post(
        `${baseUrl}me`,
        { token }
    );
    if (response.status !== 200) await authStorage.removeToken();
    return response;
};

const loginWithToken = async (token: string): Promise<null | IUser> => {
    const tokenValidationResult = await tryValidateToken(token);
    return tokenValidationResult.status === 200
        ? tokenValidationResult.data as IUser
        : null;
};

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

export default { handleAuthentication, loginWithToken };
