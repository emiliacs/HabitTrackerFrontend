import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import Home from "../../src/components/Home";

describe("Test home buttons", () => {
    it("Test if add habit button renders", async () => {
        const navigate = jest.fn();
        const { getByTestId } = render(<Home navigation={{ navigate }} />);
        const comp = getByTestId("addhabitbutton");
        expect(comp).not.toBeNull();
        fireEvent.press(comp);
        expect(navigate).toHaveBeenCalledWith("newhabit");
    });
});
