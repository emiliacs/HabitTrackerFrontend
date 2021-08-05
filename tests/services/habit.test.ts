import habit from "../../src/services/habit";
import { ApiRoutes } from "../../src/constants";
import axios from "axios";
import { API_URL } from "@env";
import authStorage from "../../src/utils/authStorage";
import { IHabit } from "../../src/types";

jest.mock("axios");
jest.mock("../../src/utils/authStorage");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const baseUrl = API_URL;
const mockedAuthStorage = authStorage as jest.Mocked<typeof authStorage>;

const testNewHabit: IHabit = {
    ownerId: 1,
    name: "testuser",
    description: "test habit",
    reward: "test reward",
    favorite: true,
    publicHabit: true,
};
const mockNewHabitResponse: IHabit = {
    habitId: 12,
    ownerId: 1,
    name: "testuser",
    description: "test habit",
    reward: "test reward",
    favorite: true,
    publicHabit: true,
};
const testToken = "testToken123";

beforeEach(() => {
    jest.clearAllMocks();
});
afterEach(() => {
    jest.clearAllMocks();
});

describe("Create habit service", () => {
    it("Correct response with status 201", async () => {
        mockedAxios.post.mockResolvedValue({
            status: 201,
            data: mockNewHabitResponse,
        });
        const response = await habit.handleNewHabit(testNewHabit);
        expect(response).toBe(mockNewHabitResponse);
    });
    it("Return fail message with status 200", async () => {
        mockedAxios.post.mockResolvedValue({
            status: 200,
        });
        const response = await habit.handleNewHabit(testNewHabit);
        expect(response).toBe(null);
    });
    it("Reject return fail message", async () => {
        mockedAxios.post.mockRejectedValue({
            status: 404,
        });
        const response = await habit.handleNewHabit(testNewHabit);
        expect(response).toBe(null);
    });
    it("Axios request is correct", async () => {
        const mockedAxiosPost = jest.spyOn(axios, "post");
        mockedAuthStorage.getToken.mockResolvedValue(testToken);
        mockedAxios.post.mockResolvedValue({
            status: 201,
        });
        void (await habit.handleNewHabit(testNewHabit));
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
        expect(mockedAxiosPost).toHaveBeenCalledWith(
            `${baseUrl}${ApiRoutes.newHabit}`,
            testNewHabit,
            {
                headers: { Authorization: `Bearer ${testToken}` },
            },
        );
    });
});
describe("GetHabitList", () => {
    it("Get Habit list promise resolve", async () => {
        const data = {
            data: {
                hits: [
                    {
                        HabitId: 12,
                        OwnerId: 1,
                        Name: "testuser",
                        Description: "test habit",
                        Reward: "test reward",
                        Favorite: true,
                        PublicHabit: true,
                    },
                    {
                        HabitId: 33,
                        OwnerId: 1,
                        Name: "TESTHABIT",
                        Description: "test habit with get",
                        Reward: "test reward in get",
                        Favorite: false,
                        PublicHabit: false,
                    },
                    {
                        HabitId: 55,
                        OwnerId: 1,
                        Name: "WHAT",
                        Description: "MEANING",
                        Reward: "WHAT",
                        Favorite: true,
                        PublicHabit: false,
                    },
                ],
            },
        };
        const mockAxiosGet = jest.spyOn(axios, "get");
        mockedAuthStorage.getToken.mockResolvedValue(testToken);
        mockAxiosGet.mockResolvedValue({
            status: 200,
        });
        await habit.handleHabits();
        mockAxiosGet.mockImplementationOnce(() => Promise.resolve(data));
        expect(mockAxiosGet).toHaveBeenCalledTimes(1);
        expect(mockAxiosGet).toHaveBeenCalledWith(`${baseUrl}${ApiRoutes.newHabit}`, {
            headers: { Authorization: `Bearer ${testToken}` },
        });
    });
    it("Get habit list promise error", async () => {
        const errorMsg = "Error message";
        const mockAxiosGet = jest.spyOn(axios, "get");
        mockedAuthStorage.getToken.mockResolvedValue(testToken);
        mockedAxios.get.mockRejectedValueOnce(() => Promise.reject(new Error(errorMsg)));

        await habit.handleHabits();
        expect(mockAxiosGet).toHaveBeenCalledTimes(1);
        expect(mockAxiosGet).toHaveBeenCalledWith(`${baseUrl}${ApiRoutes.newHabit}`, {
            headers: { Authorization: `Bearer ${testToken}` },
        });
    });
});
