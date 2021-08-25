import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import EditProfile from "../../src/components/EditProfile";

describe("Test edit user button", () => {
    it("Test if edit user button renders", async () => {
        const { getByTestId } = render(<EditProfile/>);
        const comp = getByTestId("editProfile");
        expect(comp).not.toBeNull();
    });
});

