import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Habitcomponent from "../../src/components/HabitComponent";
import { IHabit } from "../../src/types";
import historyService from "../..//src/services/history";

beforeEach(() => {
    jest.clearAllMocks();
});
afterEach(() => {
    jest.clearAllMocks();
});

const mockHabit: IHabit = {
    habitId: 1,
    ownerId: 0,
    name: "Nimi",
    description: "Jotain  mitä tehdä",
    reward: "Palkinto",
    favorite: false,
    publicHabit: false,
};

const mockedHistoryService = historyService as jest.Mocked<typeof historyService>;
const mockedSubmit = jest.spyOn(historyService, "handlePostHistory");

describe("HabitComponent Test", () => {
    it("Text elements has habit text", () => {
        const { getByTestId } = render(<Habitcomponent habit={mockHabit} />);
        const component = getByTestId("noHabitsTxt");
        expect(component).not.toBeNull();
        expect(component.children).toContain(mockHabit.name);
    });

    it("View contains 5 child elements", () => {
        const { getByTestId } = render(<Habitcomponent habit={mockHabit} />);
        const viewComponent = getByTestId("HabitView");
        expect(viewComponent).not.toBeNull();
        expect(viewComponent.children).toHaveLength(5);
    });
    it("Habit done button calls function handle post history from historyService", () => {
        const { getByTestId } = render(<Habitcomponent habit={mockHabit} />);
        const component = getByTestId("habitDoneButton");
        fireEvent.press(component);
        expect(mockedHistoryService.handlePostHistory).toHaveBeenCalled();
        expect(mockedSubmit).toHaveBeenCalledWith(
            expect.objectContaining({
               ownerId: 0,
               habitHistoryResult: true
            }),
        );
    });
});
