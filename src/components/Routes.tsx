import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthenticationStack from "./AuthenticationStack";
import { UserContext } from "./UserContext";
import { Text } from "react-native";
import authStorage from "../utils/authStorage";
import loginService from "../services/login";

const Routes = (): JSX.Element => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tryLogin = async () => {
            const token = await authStorage.getToken();
            if (token) setUser(await loginService.loginWithToken(token));
            setLoading(false);
        };
        void tryLogin();
    }, []);

    return (
        <NavigationContainer>
            {loading
                ? <Text>loading</Text>
                : user
                    ? <AppStack />
                    : <AuthenticationStack />
            }
        </NavigationContainer >
    );
};

export default Routes;
