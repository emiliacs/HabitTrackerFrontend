import { API_URL } from "@env";
import axios, { AxiosError } from "axios";
import { ApiRoutes, StatusCodes } from "../constants";
import { IHabit, IHabitHistory } from "../types";
import authStorage from "../utils/authStorage";

const baseUrl = API_URL;

const tryPostHistory = async (newHabit: IHabitHistory) => {
    const token = (await authStorage.getToken()) as string;
    const response = await axios
        .post(`${baseUrl}${ApiRoutes.newHistory}`, newHabit, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .catch((error: AxiosError | Error) => axios.isAxiosError(error) && error.response);
    return response;
};

const handlePostHistory = async (newHabit: IHabitHistory): Promise<IHabit | null> => {
    const newHabitResult = await tryPostHistory(newHabit);
    return newHabitResult && newHabitResult.status === StatusCodes.Code201 && newHabitResult.data
        ? (newHabitResult.data as IHabit)
        : null;
};

export default { handlePostHistory };
