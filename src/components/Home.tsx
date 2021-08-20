import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HabitCollection from "./HabitCollection";
import { IHabit, TAppParamList } from "../types";
import habit from "../services/habit";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { ButtonTexts } from "../constants";
export interface IAppNavProps<T extends keyof TAppParamList> {
    navigation: StackNavigationProp<TAppParamList, T>;
    route: RouteProp<TAppParamList, T>;
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

const Home: React.FC<IAppNavProps<"Home">> = ({ navigation }) => {
    const { user } = useContext(UserContext);
    const [habits, setHabits] = useState([] as IHabit[]);
    useEffect(() => {
        async function fetchData() {
            const newHabits = await habit.handleHabits();
            if (newHabits) setHabits(newHabits);
        }
        void fetchData();
    }, []);
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.titleText}>Hello, {user?.name}</Text>
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

            {habits ? (
                <HabitCollection habits={habits} />
            ) : (
                <Text style={styles.baseText}>No habits found</Text>
            )}
        </View>
    );
};

export default Home;
