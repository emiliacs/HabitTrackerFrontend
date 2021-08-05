import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { IHabit } from "../types";
import Habitcomponent from "./HabitComponent";

const styles = StyleSheet.create({
    HabitStyle: {
        color: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        margin: 5,
    },
    Item: {
        backgroundColor: "gray",
        color: "white",
        margin: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 5,
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
});

interface IHabitPropInterface {
    habits: IHabit[];
}

const HabitCollection: React.FC<IHabitPropInterface> = ({ habits }) => {
    const habitData = habits
        ? habits.map((habit: IHabit) => (
              <View key={habit.habitId}>
                  <Habitcomponent habit={habit} />
              </View>
          ))
        : null;

    return (
        <View testID="CollectionMainView" style={styles.HabitStyle}>
            <Text style={styles.Header}> Habits </Text>
            {habits ? <ScrollView testID="CollectionScrollView">{habitData}</ScrollView> : null}
        </View>
    );
};

export default HabitCollection;
