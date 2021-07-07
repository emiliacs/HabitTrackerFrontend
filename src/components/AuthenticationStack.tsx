import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { TAuthParamList } from "../types";

const Stack = createStackNavigator<TAuthParamList>();

const AuthenticationStack = (): JSX.Element => (
    <Stack.Navigator
        initialRouteName="Login"
    >
        <Stack.Screen
            options={{
                headerTitle: "Login"
            }}
            name="Login"
            component={LoginForm}
        />
        <Stack.Screen
            options={{
                headerTitle: "Register"
            }}
            name="Register"
            component={RegisterForm}
        />
    </Stack.Navigator>
);
export default AuthenticationStack;
