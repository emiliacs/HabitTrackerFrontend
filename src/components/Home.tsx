import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { StyleSheet, Text, View } from "react-native";
import HabitCollection from "./HabitCollection";
import { IHabit } from "../types";
import habit from "../services/habit";

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
});

const Home: React.FC = () => {
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.titleText}>Hello, {user?.name}</Text>
            {habits ? (
                <HabitCollection habits={habits} />
            ) : (
                <Text style={styles.baseText}>No habits found</Text>
            )}
        </View>
    );
};

export default Home;
