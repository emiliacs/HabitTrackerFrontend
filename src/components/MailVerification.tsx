import React,{ useState } from "react";
import MailService from "../services/mail";
import { Text, View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
    TextStyle:{
        color: "black",
        fontWeight: "bold",
        textAlign:"center",
        justifyContent:"center",
        paddingTop: 50,
        paddingBottom: 20
    },
    Button: {
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        color: "white"
    }
});

interface IVerificationData{
  verificationCode: string;
}

const MailVerification: React.FC<IVerificationData> = (verificationCode) => {
  const [verifMessage, setVerifMessage] = useState("");
  const handleSubmit = async (verificationCode: IVerificationData) => {
    const verfiRespone = await MailService.handleVerification(verificationCode);
    setVerifMessage(verfiRespone);
  };

  return (
    <View >
      <Text style={styles.TextStyle}> Please verify your email</Text>
      <Pressable style={styles.Button} onPress={() => handleSubmit(verificationCode)}>
                            <Text style={{ color:"white" }} > Verify email</Text>
                        </Pressable>
      <Text style={styles.TextStyle}>{verifMessage}</Text>
    </View>
  );
};

export default MailVerification;
