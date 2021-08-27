import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { IHabit } from "../types";
import Habitcomponent from "./HabitComponent";

const styles = StyleSheet.create({
    HabitStyle: {
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        flexWrap: "wrap",
    },
    HabitScroller: {
        padding: 10,
        marginBottom: 20,
    },
    Header: {
        backgroundColor: "darkgray",
        color: "white",
        alignSelf: "stretch",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        margin: 2,
        padding: 5,
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

interface IHabitPropInterface {
    habits: IHabit[];
    setHabits: React.Dispatch<React.SetStateAction<IHabit[]>>;
}

const HabitCollection: React.FC<IHabitPropInterface> = ({ habits, setHabits }) => {
    const habitData = habits
        ? habits.map((habit: IHabit) => (
              <View key={habit.id}>
                  <Habitcomponent habit={habit}  setHabits={setHabits}/>
              </View>
          ))
        : null;

    return (
        <View testID="CollectionMainView" style={styles.HabitStyle}>
            <Text style={styles.Header}> Habits </Text>

            {habits ? (
                <ScrollView style={styles.HabitScroller} testID="CollectionScrollView">
                    {habitData}
                </ScrollView>
            ) : null}
        </View>
    );
};

export default HabitCollection;
