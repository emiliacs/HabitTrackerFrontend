import React from "react";
import { UserProvider } from "./UserContext";
import Routes from "./Routes";

const Main = (): JSX.Element => (
    <UserProvider>
        <Routes />
    </UserProvider>
);

export default Main;
