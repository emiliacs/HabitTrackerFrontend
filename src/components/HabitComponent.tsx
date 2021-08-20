import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IHabit } from "../types";

const styles = StyleSheet.create({
    HabitStyle: {
        backgroundColor: "gray",
        textAlign: "left",
        margin: 10,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 5,
    },

    HabitName: {
        backgroundColor: "darkgray",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        paddingTop: 2,
        paddingBottom: 2,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "darkgray",
    },

    HabitDescription: {
        paddingTop: 15,
        fontSize: 13,
    },

    HabitReward: {
        paddingTop: 10,
        paddingBottom: 3,
        fontSize: 14,
        letterSpacing: 0.3,
    },
});

interface IHabitPropInterface {
    habit: IHabit;
}

const HabitComponent: React.FC<IHabitPropInterface> = ({ habit }) => (
    <View testID="HabitView" style={styles.HabitStyle}>
        <Text testID="noHabitsTxt" style={styles.HabitName}>
            {habit.name}
        </Text>
        <Text style={styles.HabitDescription}>{habit.description}</Text>
        <Text style={styles.HabitReward}>{habit.reward}</Text>
    </View>
);

export default HabitComponent;
