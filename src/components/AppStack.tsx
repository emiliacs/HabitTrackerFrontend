import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { TAppParamList } from "../types";
import MailVerification from "./MailVerification";

const Stack = createStackNavigator<TAppParamList>();

const AppTabs = (): JSX.Element => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            options={{
                headerTitle: "Home",
            }}
            name="Home"
            component={Home}
        />
        <Stack.Screen
            options={{
                headerTitle: "MailVerification",
            }}
            name="mailverification"
            component={MailVerification}
        />
    </Stack.Navigator>
);

export default AppTabs;
