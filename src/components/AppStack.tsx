<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> a9cd52e (refactor code and add automatic habit list updating)
=======
import React, { useEffect, useState } from "react";
>>>>>>> 8aacd69 (edit appstack)
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { IHabit, TAppParamList } from "../types";
import MailVerification from "./MailVerification";
import LogoutButton from "./LogoutButton";
import CreateNewHabit from "./CreateNewHabit";
import UserProfile from "./UserProfile";
import EditProfileButton from "./EditProfileButton";
<<<<<<< HEAD
<<<<<<< HEAD
import habit from "../services/habit";
=======
>>>>>>> a9cd52e (refactor code and add automatic habit list updating)
=======
import habit from "../services/habit";
>>>>>>> 8aacd69 (edit appstack)

const Stack = createStackNavigator<TAppParamList>();
const logoutButton = () => <LogoutButton />;
const editProfileButton = () => <EditProfileButton />;
logoutButton.displayName = "log";
editProfileButton.displayName = "edit";
const AppTabs: React.FC = () => {
    const [habits, setHabits] = useState([] as IHabit[]);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8aacd69 (edit appstack)
    useEffect(() => {
        async function fetchData() {
            const newHabits = await habit.handleHabits();
            if (newHabits) setHabits(newHabits);
        }
        void fetchData();
    }, []);
<<<<<<< HEAD
=======
>>>>>>> a9cd52e (refactor code and add automatic habit list updating)
=======
>>>>>>> 8aacd69 (edit appstack)
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                options={{
                    headerTitle: "Home",
                    headerRight: logoutButton,
                }}
            >
                {(props) => <Home {...props} habits={habits} setHabits={setHabits} />}
            </Stack.Screen>
            <Stack.Screen
                name="mailverification"
                options={{
                    headerTitle: "MailVerification",
                }}
            >
                {(props) => <MailVerification {...props}/>}
            </Stack.Screen>
            <Stack.Screen
                name="newhabit"
                options={{
                    headerTitle: "NewHabit",
                }}
            >
                {(props) => <CreateNewHabit {...props} setHabits={setHabits} />}
            </Stack.Screen>
            <Stack.Screen
                name="profile"
                options={{
                    headerTitle: "Profile",
                    headerRight: editProfileButton,
                }}
            >
                {(props) => <UserProfile {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AppTabs;
