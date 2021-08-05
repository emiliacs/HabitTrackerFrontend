import React from "react";
import { render } from "@testing-library/react-native";
import { IHabit } from "../../src/types";
import HabitCollection from "../../src/components/HabitCollection";

beforeEach(() => {
    jest.clearAllMocks();
});
afterEach(() => {
    jest.clearAllMocks();
});

const mockHabit1: IHabit = {
    habitId: 1,
    ownerId: 0,
    name: "Nimi",
    description: "Jotain  mitä tehdä",
    reward: "Palkinto",
    favorite: false,
    publicHabit: false,
};

const mockHabit2: IHabit = {
    habitId: 2,
    ownerId: 0,
    name: "MockHabit",
    description: "Mokki",
    reward: "MockReaward",
    favorite: false,
    publicHabit: false,
};
const mockHabit3: IHabit = {
    habitId: 4,
    ownerId: 0,
    name: "Mocbit",
    description: "Mokdfsaki",
    reward: "MockReasdfaasward",
    favorite: false,
    publicHabit: false,
};

const mockHabitCollection: IHabit[] = [mockHabit1, mockHabit2, mockHabit3];

describe("HabitCollection Test", () => {
    it("ScrollerView is not null ", () => {
        const { getByTestId } = render(<HabitCollection habits={mockHabitCollection} />);
        const component = getByTestId("CollectionScrollView");

        expect(component).not.toBeNull();
    });

    it("Two child elements when HabitCollection has habits props array", () => {
        const { getByTestId } = render(<HabitCollection habits={mockHabitCollection} />);
        const component = getByTestId("CollectionMainView");

        expect(component).not.toBeNull();
        expect(component.children.length).toBe(2);
    });
});
