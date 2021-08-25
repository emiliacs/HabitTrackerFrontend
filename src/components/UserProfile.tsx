import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./UserContext";

const styles = StyleSheet.create({
    Style: {
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

    ProfileText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        paddingTop: 2,
        paddingBottom: 2,
    },
});

const UserProfile: React.FC = () => {
    const { user } = useContext(UserContext);

    return (
        <View>
            <View style={styles.Style}>
                <Text testID="profileName" style={styles.ProfileText}>
                    {user?.name}
                </Text>
                <Text testID="profileEmail" style={styles.ProfileText}>{user?.email}</Text>
            </View>
        </View>
    );
};

export default UserProfile; // todo add user picture
