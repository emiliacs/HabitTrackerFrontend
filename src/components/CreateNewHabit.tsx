import { Formik } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, View, CheckBox, TextInput } from "react-native";
import { IHabit, INewHabit, TAppParamList } from "../types";
import { UserContext } from "./UserContext";
import habitService from "../services/habit";
import { NewHabitMessages } from "../constants";
import DatePicker from "./DatePicker";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

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
        marginTop: 2,
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
    CheckboxView: {
        flexDirection: "row",
        alignItems: "center",
    },
    Label: {
        fontSize: 13,
        marginLeft: 10,
    },
    Paragraph: {
        fontSize: 15,
    },
    Checkbox: {
        margin: 8,
    },
});

const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    timesTodo: Yup.number().typeError("Times To Do must be number").required("Required"),
});

export interface IAppNavProps<T extends keyof TAppParamList> {
    navigation: StackNavigationProp<TAppParamList, T>;
    route: RouteProp<TAppParamList, T>;
    habits?: IHabit[];
    setHabits?: React.Dispatch<React.SetStateAction<IHabit[]>>;
}

const CreateNewHabit: React.FC<IAppNavProps<"newhabit">> = ({ setHabits }) => {
    const endDateInitial = new Date();
    endDateInitial.setDate(endDateInitial.getDate() + 30);
    const initialValues: INewHabit = {
        name: "",
        description: "",
        reward: "",
        favorite: false,
        publicHabit: false,
        startDate: new Date(),
        endDate: endDateInitial,
        timesTodo: 30,
    };
    const [createNewHabitMessage, setCreateNewHabitMessage] = useState("");
    const { user } = useContext(UserContext);
    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false);

    const submitLogin = async (values: INewHabit) => {
        const newHabit = await habitService.handleNewHabit({
            ...values,
            ownerId: user?.id as number,
            timesTodo: Number(values.timesTodo),
        });
        const handleNewHabit = () =>
            newHabit && user
                ? (setCreateNewHabitMessage(NewHabitMessages.Succees),
                  setHabits && setHabits((oldHabits) => oldHabits && [...oldHabits, newHabit]))
                : setCreateNewHabitMessage(NewHabitMessages.Fail);
        handleNewHabit();
    };
    return (
        <View style={styles.Container}>
            <Text>{user?.name}</Text>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={submitLogin}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    errors,
                    touched,
                    values,
                    isSubmitting,
                }) => (
                    <View>
                        <Text style={styles.Label}>Name</Text>
                        <TextInput
                            testID="HabitNameField"
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
                        <Text style={styles.Label}>Description</Text>
                        <TextInput
                            testID="HabitDescriptionField"
                            style={styles.TextInput}
                            placeholder="Description"
                            onChangeText={handleChange("description")}
                            onBlur={handleBlur("description")}
                            value={values.description}
                            onSubmitEditing={() => handleSubmit()}
                        />
                        {errors.description && touched.description ? (
                            <Text style={styles.ErrorText}>{errors.description}</Text>
                        ) : null}
                        <Text style={styles.Label}>Reward</Text>
                        <TextInput
                            testID="HabitRewardField"
                            style={styles.TextInput}
                            placeholder="Reward"
                            onChangeText={handleChange("reward")}
                            onBlur={handleBlur("reward")}
                            value={values.reward}
                            onSubmitEditing={() => handleSubmit()}
                        />
                        {errors.reward && touched.reward ? (
                            <Text style={styles.ErrorText}>{errors.reward}</Text>
                        ) : null}
                        <Text style={styles.Label}>Times To Do</Text>
                        <TextInput
                            testID="HabitTimesTodoField"
                            style={styles.TextInput}
                            placeholder="Times To Do"
                            onChangeText={handleChange("timesTodo")}
                            onBlur={handleBlur("timesTodo")}
                            keyboardType={"numeric"}
                            value={String(values.timesTodo)}
                            onSubmitEditing={() => handleSubmit()}
                        />
                        {errors.timesTodo && touched.timesTodo ? (
                            <Text style={styles.ErrorText}>{errors.timesTodo}</Text>
                        ) : null}
                        <Text style={styles.Label}>Start Date</Text>
                        <Text
                            style={styles.TextInput}
                            onPress={() => setShowStartDate((currentValue) => !currentValue)}
                        >
                            {values.startDate.toDateString()}
                        </Text>
                        {showStartDate && (
                            <DatePicker
                                testID="StartDateTimePicker"
                                date={values.startDate}
                                setDate={setShowStartDate}
                                setFieldValue={setFieldValue}
                                formikFiledValue="startDate"
                            />
                        )}
                        <Text style={styles.Label}>End Date</Text>
                        <Text
                            style={styles.TextInput}
                            onPress={() => setShowEndDate((currentValue) => !currentValue)}
                        >
                            {values.endDate.toDateString()}
                        </Text>
                        {showEndDate && (
                            <DatePicker
                                testID="StartEndTimePicker"
                                date={values.endDate}
                                setDate={setShowEndDate}
                                setFieldValue={setFieldValue}
                                formikFiledValue="endDate"
                            />
                        )}

                        <Pressable
                            testID="HabitFavoriteField"
                            onPress={() => setFieldValue("favorite", !values.favorite)}
                        >
                            <View style={styles.CheckboxView}>
                                <CheckBox style={styles.Checkbox} value={values.favorite} />
                                <Text style={styles.Paragraph}>Favorite</Text>
                            </View>
                        </Pressable>
                        <Pressable
                            testID="HabitPublicHabitField"
                            onPress={() => setFieldValue("publicHabit", !values.publicHabit)}
                        >
                            <View style={styles.CheckboxView}>
                                <CheckBox style={styles.Checkbox} value={values.publicHabit} />
                                <Text style={styles.Paragraph}>PublicHabit</Text>
                            </View>
                        </Pressable>
                        <Pressable
                            testID="SubmitButton"
                            style={isSubmitting ? styles.ButtonDis : styles.Button}
                            disabled={isSubmitting}
                            onPress={() => handleSubmit()}
                        >
                            <Text style={styles.ButtonText}> Submit</Text>
                        </Pressable>
                        <Text>{createNewHabitMessage}</Text>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default CreateNewHabit;
