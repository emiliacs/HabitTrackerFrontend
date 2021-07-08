import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Text, View } from "react-native";

const Home = (): JSX.Element => {
    const { user } = useContext(UserContext);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Text>Hello {user?.username}</Text>
        </View>
    );
};

export default Home;
