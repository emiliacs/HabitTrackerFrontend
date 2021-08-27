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
    id: 1,
    ownerId: 0,
    name: "Nimi",
    description: "Jotain  mitä tehdä",
    reward: "Palkinto",
    favorite: false,
    publicHabit: false,
    history: [],
};

const mockHabit2: IHabit = {
    id: 2,
    ownerId: 0,
    name: "MockHabit",
    description: "Mokki",
    reward: "MockReaward",
    favorite: false,
    publicHabit: false,
    history: [],
};
const mockHabit3: IHabit = {
    id: 4,
    ownerId: 0,
    name: "Mocbit",
    description: "Mokdfsaki",
    reward: "MockReasdfaasward",
    favorite: false,
    publicHabit: false,
    history: [],
};

const mockHabitCollection: IHabit[] = [mockHabit1, mockHabit2, mockHabit3];

describe("HabitCollection Test", () => {
    it("ScrollerView is not null ", () => {
        const { getByTestId } = render(<HabitCollection habits={mockHabitCollection}  setHabits={jest.fn}/>);
        const component = getByTestId("CollectionScrollView");

        expect(component).not.toBeNull();
    });

    it("Two child elements when HabitCollection has habits props array", () => {
        const { getByTestId } = render(<HabitCollection habits={mockHabitCollection} setHabits={jest.fn} />);
        const component = getByTestId("CollectionMainView");

        expect(component).not.toBeNull();
        expect(component.children.length).toBe(2);
    });
});
