import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import authStorage from "../utils/authStorage";
import AppStack from "./AppStack";
import AuthenticationStack from "./AuthenticationStack";

const Routes = (): JSX.Element => {
    const [token, setToken] = useState<null | string>(null);

    useEffect(() => {
        const checkToken = async () => {
            setToken(await authStorage.getToken());
        };
        void checkToken();
    }, []);
    return (
        <NavigationContainer>
            {token
                ? <AppStack />
                : <AuthenticationStack />
            }
        </NavigationContainer >
    );
};

export default Routes;
