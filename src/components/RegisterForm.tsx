import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import loginService from "../services/login";
import { IRegisterFormValues } from "../types";

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
    name: Yup.string()
        .min(4, "Minimum length is 4")
        .max(50, "Maximum length is 50")
        .required("Required"),
    password: Yup.string()
        .required("Required")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character",
        ),
    email: Yup.string().email("Invalid email").required("Required"),
});

const RegisterForm = (): JSX.Element => {
    const initialValues: IRegisterFormValues = { name: "", email: "", password: "" };
    const [registerMessage, setregisterMessage] = useState("");

    const submitRegister = async (values: IRegisterFormValues) => {
        const registerRespone = await loginService.handleAuthentication(values);
        setregisterMessage(registerRespone);
        setTimeout(() => {
            setregisterMessage("");
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
                            placeholder="Name"
                            onChangeText={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={values.name}
                            onSubmitEditing={() => handleSubmit()}
                        />
                        {errors.name && touched.name ? (
                            <Text style={styles.ErrorText}>{errors.name}</Text>
                        ) : null}
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
                        <Text>{registerMessage}</Text>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default RegisterForm;
