import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { TAppParamList } from "../types";
import MailVerification from "./MailVerification";
import LogoutButton from "./LogoutButton";
import CreateNewHabit from "./CreateNewHabit";

const Stack = createStackNavigator<TAppParamList>();
const temp = () => <LogoutButton />;
temp.displayName = "log";
const AppTabs: React.FC = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            options={{
                headerTitle: "Home",
                headerRight: temp,
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
        <Stack.Screen
            options={{
                headerTitle: "NewHabit",
            }}
            name="newhabit"
            component={CreateNewHabit}
        />
    </Stack.Navigator>
);

export default AppTabs;
