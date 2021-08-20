import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import LogoutButton from "../../src/components/LogoutButton";
import authStorage from "../../src/utils/authStorage";

jest.mock("../../src/utils/authStorage");
const mockedAuthStorage = authStorage as jest.Mocked<typeof authStorage>;

describe("Test Logout button", () => {
    it("Test if logout button renders", async () => {
        const { getByTestId } = render(<LogoutButton />);
        const comp = getByTestId("logoutButton");
        expect(comp).not.toBeNull();
    });

    it("Test OnPress event calls function removetoken from authStorage", () => {
        const { getByTestId } = render(<LogoutButton />);
        const comp = getByTestId("logoutButton");
        fireEvent.press(comp);
        expect(mockedAuthStorage.removeToken).toHaveBeenCalledTimes(1);
    });
});
