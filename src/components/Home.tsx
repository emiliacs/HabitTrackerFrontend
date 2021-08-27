import React, { useContext } from "react";
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
    setHabits: React.Dispatch<React.SetStateAction<IHabit[]>>;
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

const Home: React.FC<IAppNavProps<"Home">> = ({ navigation, habits }) => {
    const { user } = useContext(UserContext);
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
