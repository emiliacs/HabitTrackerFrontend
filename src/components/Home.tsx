import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Text, View } from "react-native";

import HabitCollection from "./HabitCollection";
import { IHabit } from "../types";
import habit from "../services/habit";

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
            <Text>
                <h1>Hello, {user?.name}</h1>
            </Text>
            {habits ? <HabitCollection habits={habits} /> : <Text>No habits found</Text>}
        </View>
    );
};

export default Home;
