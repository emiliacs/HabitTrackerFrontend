import axios, { AxiosError } from "axios";
import authStorage from "../utils/authStorage";
import { IUser } from "../types";
import { API_URL } from "@env";
import { LoginMessages, StatusCodes, Routes } from "../constants";

const baseUrl = API_URL;

interface ICredentials {
    name?: string;
    password: string;
    email: string;
}

const tryValidateToken = async (token: string) => {
    const response = await axios
        .get(`${baseUrl}${Routes.usersMe}`, { headers: { Authorization: `Bearer ${token}` } })
        .catch((error: AxiosError | Error) => axios.isAxiosError(error) && error.response);
    if (!response || response.status !== StatusCodes.Code200) await authStorage.removeToken();
    return response;
};

const loginWithToken = async (token: string): Promise<null | IUser> => {
    const tokenValidationResult = await tryValidateToken(token);
    return tokenValidationResult && tokenValidationResult.status === StatusCodes.Code200
        ? (tokenValidationResult.data as IUser)
        : null;
};

const tryAuth = async (credentials: ICredentials) => {
    const route = credentials.name ? Routes.register : Routes.login;
    const response = await axios
        .post(`${baseUrl}${route}`, credentials)
        .catch((error: AxiosError | Error) => axios.isAxiosError(error) && error.response);
    if (response && response.status === StatusCodes.Code200)
        void (await authStorage.setToken(response.data.token));
    return response;
};

const handleAuthentication = async (credentials: ICredentials): Promise<string> => {
    const registerResult = await tryAuth(credentials);
    return registerResult && registerResult.status === StatusCodes.Code200
        ? LoginMessages.RegistrationSuccees
        : LoginMessages.RegistrationFail;
};

export default { handleAuthentication, loginWithToken };
