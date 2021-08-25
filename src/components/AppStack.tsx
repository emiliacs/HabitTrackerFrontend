import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { TAppParamList } from "../types";
import MailVerification from "./MailVerification";
import LogoutButton from "./LogoutButton";
import CreateNewHabit from "./CreateNewHabit";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";

const Stack = createStackNavigator<TAppParamList>();
const logout = () => <LogoutButton />;
const editProfile = () => <EditProfile />;
logout.displayName = "log";
editProfile.displayName = "edit";
const AppTabs: React.FC = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            options={{
                headerTitle: "Home",
                headerRight: logout,
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
        <Stack.Screen
            options={{
                headerTitle: "Profile",
                headerRight: editProfile,
            }}
            name="profile"
            component={UserProfile}
        />
    </Stack.Navigator>
);

export default AppTabs;
