import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import loginService from "../services/login";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthParamList, ILoginFormValues } from "../types";

export interface IAuthNavProps<T extends keyof TAuthParamList> {
    navigation: StackNavigationProp<TAuthParamList, T>;
    route: RouteProp<TAuthParamList, T>;
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    TextInput: {
        backgroundColor: "#f5f6f7",
        padding: 10,
        margin: 10,
    },
    ErrorText: {
        paddingHorizontal: 32,
        color: "red",
    },
    Button: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
    ButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
});

const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});

const RegisterForm = ({ navigation }: IAuthNavProps<"Login">): JSX.Element => {
    const initialValues: ILoginFormValues = { email: "", password: "" };
    const [loginMessage, setloginMessage] = useState("");

    const submitRegister = async (values: ILoginFormValues) => {
        const loginResponse = await loginService.handleAuthentication(values);
        setloginMessage(loginResponse);
        setTimeout(() => {
            setloginMessage("");
        }, 3000);
    };

    return (
        <View>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={submitRegister}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                    <View>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            onSubmitEditing={() => handleSubmit()}
                        />
                        {errors.email && touched.email ? (
                            <Text style={styles.ErrorText}>{errors.email}</Text>
                        ) : null}

                        <TextInput
                            style={styles.TextInput}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            onSubmitEditing={() => handleSubmit()}
                        />
                        {errors.password && touched.password ? (
                            <Text style={styles.ErrorText}>{errors.password}</Text>
                        ) : null}
                        <Pressable style={styles.Button} onPress={() => handleSubmit()}>
                            <Text style={styles.ButtonText}> Submit</Text>
                        </Pressable>
                        <Text>{loginMessage}</Text>
                    </View>
                )}
            </Formik>
            <Pressable
                style={styles.TextInput}
                onPress={() => {
                    navigation.navigate("Register");
                }}
            >
                <Text>No account? Create one here.</Text>
            </Pressable>
        </View>
    );
};

export default RegisterForm;
