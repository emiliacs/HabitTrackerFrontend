import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import CreateNewHabit from "../../src/components/CreateNewHabit";
import habitService from "../../src/services/habit";
import "@testing-library/jest-native/extend-expect";

jest.setTimeout(30000);
jest.mock("../../src/services/habit");
const mockedhabitService = habitService as jest.Mocked<typeof habitService>;
const mockNewHabit = {
    name: "testuser",
    description: "test habit",
    reward: "test reward",
};
describe("Create New Habit", () => {
    it("calls habitService after pressing the submit button", async () => {
        const navigate = jest.fn();
        const mockedSubmit = jest.spyOn(habitService, "handleNewHabit");
        const { getByTestId } = render(<CreateNewHabit navigation={{ navigate }} />);

        fireEvent.changeText(getByTestId("HabitNameField"), mockNewHabit.name);
        fireEvent.changeText(getByTestId("HabitDescriptionField"), mockNewHabit.description);
        fireEvent.changeText(getByTestId("HabitRewardField"), mockNewHabit.reward);
        fireEvent.press(getByTestId("HabitFavoriteField"));
        fireEvent.press(getByTestId("HabitPublicHabitField"));
        fireEvent.press(getByTestId("SubmitButton"));

        const submitButton = getByTestId("SubmitButton");

        await waitFor(() => void expect(submitButton).not.toBeDisabled());

        expect(mockedhabitService.handleNewHabit).toHaveBeenCalledTimes(1);
        expect(mockedSubmit).toHaveBeenCalledWith(
            expect.objectContaining({
                name: "testuser",
                description: "test habit",
                reward: "test reward",
                favorite: true,
                publicHabit: true,
            }),
        );
    });
});
