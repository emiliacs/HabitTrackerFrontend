import axios, { AxiosError } from "axios";
import authStorage from "../utils/authStorage";
import { IHabit } from "../types";
import { API_URL } from "@env";
import { StatusCodes, ApiRoutes } from "../constants";

const baseUrl = API_URL;

const tryNewHabit = async (newHabit: IHabit) => {
    const token = (await authStorage.getToken()) as string;
    const response = await axios
        .post(`${baseUrl}${ApiRoutes.newHabit}`, newHabit, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .catch((error: AxiosError | Error) => axios.isAxiosError(error) && error.response);
    return response;
};

const handleNewHabit = async (newHabit: IHabit): Promise<IHabit | null> => {
    const newHabitResult = await tryNewHabit(newHabit);
    return newHabitResult && newHabitResult.status === StatusCodes.Code201 && newHabitResult.data
        ? (newHabitResult.data as IHabit)
        : null;
};

const tryGetHabits = async () => {
    const token = (await authStorage.getToken()) as string;
    const response = await axios
        .get(`${baseUrl}${ApiRoutes.newHabit}`, { headers: { Authorization: `Bearer ${token}` } })
        .catch((error: AxiosError | Error) => axios.isAxiosError(error) && error.response);
    return response;
};

const handleHabits = async (): Promise<IHabit[] | null> => {
    const newHabitCollection = await tryGetHabits();
    return newHabitCollection &&
        newHabitCollection.status === StatusCodes.Code200 &&
        newHabitCollection.data
        ? (newHabitCollection.data as IHabit[])
        : null;
};

export default { handleNewHabit, handleHabits };
