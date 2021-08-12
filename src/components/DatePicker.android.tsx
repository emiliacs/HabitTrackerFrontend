import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
interface IDatePicker {
    formikFiledValue: string;
    testID: string;
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<boolean>>;
    setFieldValue: (field: string, value: Date, shouldValidate?: boolean | undefined) => void;
}
const AndroidDatePicker: React.FC<IDatePicker> = ({
    formikFiledValue,
    testID,
    date,
    setDate,
    setFieldValue,
}) => (
    <DateTimePicker
        testID={testID}
        value={date}
        mode={"date"}
        is24Hour={true}
        display="default"
        onChange={(event: unknown, selectedDate: Date | undefined) => {
            setDate(false);
            if (selectedDate instanceof Date) setFieldValue(formikFiledValue, selectedDate);
        }}
    />
);

export default AndroidDatePicker;
