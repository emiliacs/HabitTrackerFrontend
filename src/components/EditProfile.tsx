import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

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

const EditProfile: React.FC = () => {
    const buttonText = "Edit";

    return (
        <Pressable testID="editProfile">
            <View style={styles.Button}>
                <Text style={styles.ButtonText}>{buttonText}</Text>
            </View>
        </Pressable>
    );
};

export default EditProfile; // todo functionality
