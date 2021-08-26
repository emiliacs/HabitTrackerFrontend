<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { useContext, useEffect } from "react";
>>>>>>> a9cd52e (refactor code and add automatic habit list updating)
=======
import React, { useContext } from "react";
>>>>>>> 8aacd69 (edit appstack)
import { UserContext } from "./UserContext";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HabitCollection from "./HabitCollection";
import { IHabit, TAppParamList } from "../types";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ButtonTexts } from "../constants";
export interface IAppNavProps<T extends keyof TAppParamList> {
    navigation: StackNavigationProp<TAppParamList, T>;
    route: RouteProp<TAppParamList, T>;
    habits: IHabit[];
<<<<<<< HEAD
<<<<<<< HEAD
    setHabits: React.Dispatch<React.SetStateAction<IHabit[]>>;
=======
    setHabits: React.Dispatch<React.SetStateAction<IHabit[]>>; 
>>>>>>> a9cd52e (refactor code and add automatic habit list updating)
=======
    setHabits: React.Dispatch<React.SetStateAction<IHabit[]>>;
>>>>>>> 8aacd69 (edit appstack)
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    ButtonRect: {
        textAlign: "center",
        backgroundColor: "darkgray",
        width: 200,
        height: 50,
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    ButtonRound: {
        textAlign: "center",
        backgroundColor: "black",
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});

<<<<<<< HEAD
<<<<<<< HEAD
const Home: React.FC<IAppNavProps<"Home">> = ({ navigation, habits }) => {
    const { user } = useContext(UserContext);
=======
const Home: React.FC<IAppNavProps<"Home">> = ({ navigation , habits, setHabits }) => {
    const { user } = useContext(UserContext);
    useEffect(() => {
        async function fetchData() {
            const newHabits = await habit.handleHabits();
            if (newHabits) setHabits(newHabits);
        }
        void fetchData();
    }, []);
>>>>>>> a9cd52e (refactor code and add automatic habit list updating)
=======
const Home: React.FC<IAppNavProps<"Home">> = ({ navigation, habits }) => {
    const { user } = useContext(UserContext);
>>>>>>> 8aacd69 (edit appstack)
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.titleText}>Hello, {user?.name}</Text>
            <View style={{ flexDirection: "row" }}>
                <Pressable
                    testID="addhabitbutton"
                    onPress={() => {
                        navigation.navigate("newhabit");
                    }}
                >
                    <View style={styles.ButtonRect}>
                        <Text style={styles.ButtonText}>{ButtonTexts.AddNewHabit}</Text>
                    </View>
                </Pressable>
                <Pressable
                    testID="profilebutton"
                    onPress={() => {
                        navigation.navigate("profile");
                    }}
                >
                    <View style={styles.ButtonRect}>
                        <Text style={styles.ButtonText}>Profile</Text>
                    </View>
                </Pressable>
            </View>

            {habits ? (
                <HabitCollection habits={habits} />
            ) : (
                <Text style={styles.baseText}>No habits found</Text>
            )}
        </View>
    );
};

export default Home;
