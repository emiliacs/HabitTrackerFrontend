import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import MailService from "../services/mail";
import { IHabit, TAppParamList } from "../types";
import { RouteProp } from "@react-navigation/native";

const styles = StyleSheet.create({
    TextStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 20,
    },
    Button: {
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        color: "white",
    },
});
interface IVerificationData {
    verificationCode: string;
}
export interface IAppNavProps<T extends keyof TAppParamList> {
    navigation: StackNavigationProp<TAppParamList, T>;
    route: RouteProp<TAppParamList, T>;
    habits?: IHabit[];
    setHabits?: React.Dispatch<React.SetStateAction<IHabit[]>>; 
}

const MailVerification:  React.FC<IAppNavProps<"mailverification">> = ({ route }) => {
    const [verifMessage, setVerifMessage] = useState("");
    const handleSubmit = async () => {
        const verfiRespone = await MailService.handleVerification(route.params as unknown as IVerificationData);
        setVerifMessage(verfiRespone);
    };
    return (
        <View>
            <Text style={styles.TextStyle}> Please verify your email</Text>
            <Pressable style={styles.Button} onPress={() => handleSubmit()}>
                <Text style={{ color: "white" }}> Verify email</Text>
            </Pressable>
            <Text style={styles.TextStyle}>{verifMessage}</Text>
        </View>
    );
};

export default MailVerification;
