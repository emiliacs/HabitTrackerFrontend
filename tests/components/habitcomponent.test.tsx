import React from "react";
import { render } from "@testing-library/react-native";
import Habitcomponent from "../../src/components/HabitComponent";
import { IHabit } from "../../src/types";

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

describe("HabitComponent Test", () => {
    it("Text elements has habit text", () => {
        const { getByTestId } = render(<Habitcomponent habit={mockHabit} />);
        const component = getByTestId("noHabitsTxt");
        expect(component).not.toBeNull();
        expect(component.children).toContain(mockHabit.name);
    });

    it("View contains 3 child elements", () => {
        const { getByTestId } = render(<Habitcomponent habit={mockHabit} />);
        const viewComponent = getByTestId("HabitView");
        expect(viewComponent).not.toBeNull();
        expect(viewComponent.children).toHaveLength(3);
    });
});
