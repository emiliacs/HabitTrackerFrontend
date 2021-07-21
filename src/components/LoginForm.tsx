import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import loginService from "../services/login";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthParamList, ILoginFormValues } from "../types";
import authStorage from "../utils/authStorage";
import { UserContext } from "./UserContext";
import { LoginWithTokenRedirectTime } from "../constants";

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
    ButtonDis: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "gray",
    },
});

const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});

const LoginForm = ({ navigation }: IAuthNavProps<"Login">): JSX.Element => {
    const initialValues: ILoginFormValues = { email: "", password: "" };
    const [loginMessage, setloginMessage] = useState("");
    const { setUser } = useContext(UserContext);

    const tryLoginWithToken = async () => {
        const token = await authStorage.getToken();
        if (token) setUser(await loginService.loginWithToken(token));
    };

    const submitLogin = async (values: ILoginFormValues) => {
        const loginResponse = await loginService.handleAuthentication(values);
        setloginMessage(loginResponse);
        setTimeout(() => {
            setloginMessage("");
            void tryLoginWithToken();
        }, LoginWithTokenRedirectTime);
    };

    return (
        <View>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={submitLogin}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                    values,
                    isSubmitting,
                }) => (
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
                        <Pressable
                            style={isSubmitting ? styles.ButtonDis : styles.Button}
                            disabled={isSubmitting}
                            onPress={() => handleSubmit()}
                        >
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

export default LoginForm;
