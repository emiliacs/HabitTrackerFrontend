import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import UserProfile from "../../src/components/UserProfile";
import { UserContext } from "../../src/components/UserContext";

const mockInitialState = {
    user: {
        name: "testi",
        email: "testi@testi.com",
    },
    setUser: () => {
        /**/
    },
};

describe("Test user profile ", () => {
    it("Test that user profile returns user", async () => {
        const screen = render(
            <UserContext.Provider value={mockInitialState}>
                <UserProfile />
            </UserContext.Provider>,
        );
        screen.getByText("testi");
        screen.getByText("testi@testi.com");
    });
});
