import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { IHabit } from "../types";
import habitHistory from "../services/history";
import { HabitDoneMessages } from "../constants";

const styles = StyleSheet.create({
    HabitStyle: {
        backgroundColor: "gray",
        textAlign: "left",
        margin: 10,
        padding: 5,
        paddingLeft: 10,
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

    ButtonText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    ButtonDescription: {
        textAlign: "center",
        fontSize: 12,
    },
    Button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
    ButtonPressed: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "darkgray",
    },
});

interface IHabitPropInterface {
    habit: IHabit;
    setHabits: React.Dispatch<React.SetStateAction<IHabit[]>>;
}

const HabitComponent: React.FC<IHabitPropInterface> = ({ habit, setHabits }) => {
    const [titleText, setTitleText] = useState("");
    const [isPressed, setPressed] = useState(false);

    const setHabitAsDone = async () => {
        const newHabitHistory = {
            habitId: habit.id as number,
            ownerId: habit.ownerId,
            habitHistoryResult: true,
        };
        const result = await habitHistory.handlePostHistory(newHabitHistory);
        const handleResult = () =>
            result && habit
                ? (setTitleText(HabitDoneMessages.Success),
                  setPressed(true),
                  setHabits((oldHabits) =>
                      oldHabits.map((h) =>
                          h.id === habit.id ? { ...habit, history: [...habit.history, result] } : h,
                      ),
                  ))
                : (setTitleText(HabitDoneMessages.Fail), setPressed(false));

        handleResult();
    };

    return (
        <View testID="HabitView" style={styles.HabitStyle}>
            <Text testID="noHabitsTxt" style={styles.HabitName}>
                {habit.name}
            </Text>
            <Text style={styles.HabitDescription}>{habit.description}</Text>
            <Text style={styles.HabitReward}>{habit.reward}</Text>
            <Pressable
                testID="habitDoneButton"
                style={isPressed ? styles.ButtonPressed : styles.Button}
                onPress={() => setHabitAsDone()}
            >
                <Text style={styles.ButtonText}>Done</Text>
            </Pressable>
            <Text style={styles.ButtonDescription}>{titleText}</Text>
        </View>
    );
};

export default HabitComponent;
