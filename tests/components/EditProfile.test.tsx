import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import EditProfileButton from "../../src/components/EditProfileButton";

describe("Test edit user button", () => {
    it("Test if edit user button renders", async () => {
        const { getByTestId } = render(<EditProfileButton/>);
        const comp = getByTestId("editProfile");
        expect(comp).not.toBeNull();
    });
});

