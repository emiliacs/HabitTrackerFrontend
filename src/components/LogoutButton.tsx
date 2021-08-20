import React, { useContext } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import authStorage from "../utils/authStorage";
import { UserContext } from "./UserContext";
import { ButtonTexts } from "../constants";

const styles = StyleSheet.create({
    Button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "dimgray",
        margin: 10,
    },
    ButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});

const LogoutButton: React.FC = () => {
    const { setUser } = useContext(UserContext);

    const Logout = () => {
        setUser(null);
        void authStorage.removeToken();
    };

    return (
        <Pressable testID="logoutButton" onPress={() => Logout()}>
            <View style={styles.Button}>
                <Text style={styles.ButtonText}>{ButtonTexts.Logout}</Text>
            </View>
        </Pressable>
    );
};

LogoutButton.displayName = "LogoutButton";

export default LogoutButton;
