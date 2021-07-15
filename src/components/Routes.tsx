import React, { useContext, useEffect, useState, useCallback } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as Linking from "expo-linking";
import { UserContext } from "./UserContext";
import AppStack from "./AppStack";
import AuthenticationStack from "./AuthenticationStack";
import authStorage from "../utils/authStorage";
import loginService from "../services/login";

const prefix = Linking.makeUrl("/");
const linking: LinkingOptions = {
    prefixes: [prefix],
    config: {
        screens: {
            mailverification: "mailverification",
        },
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

const Routes: React.FC = () => {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tryLogin = async () => {
            await SplashScreen.preventAutoHideAsync();
            const token = await authStorage.getToken();
            if (token) setUser(await loginService.loginWithToken(token));
            setLoading(false);
        };
        void tryLogin();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (!loading) await SplashScreen.hideAsync();
    }, [loading]);

    return (
        <NavigationContainer linking={linking} onReady={onLayoutRootView}>
            {loading ? (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#808080" />
                </View>
            ) : user ? (
                <AppStack />
            ) : (
                <AuthenticationStack />
            )}
        </NavigationContainer>
    );
};

export default Routes;
