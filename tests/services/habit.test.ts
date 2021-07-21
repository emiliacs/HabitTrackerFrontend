import habit from "../../src/services/habit";
import { ApiRoutes } from "../../src/constants";
import axios from "axios";
import { API_URL } from "@env";
import authStorage from "../../src/utils/authStorage";
jest.mock("axios");
jest.mock("../../src/utils/authStorage");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const baseUrl = API_URL;
const mockedAuthStorage = authStorage as jest.Mocked<typeof authStorage>;

const testNewHabit = {
    OwnerId: 1,
    Name: "testuser",
    Description: "test habit",
    Reward: "test reward",
    Favorite: true,
    PublicHabit: true,
};
const mockNewHabitResponse = {
    HabitId: 12,
    OwnerId: 1,
    Name: "testuser",
    Description: "test habit",
    Reward: "test reward",
    Favorite: true,
    PublicHabit: true,
};
const testToken = "testToken123";

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
        expect(mockedAxiosPost).toHaveBeenCalledWith(
            `${baseUrl}${ApiRoutes.newHabit}`,
            testNewHabit,
            {
                headers: { Authorization: `Bearer ${testToken}` },
            },
        );
    });
});
