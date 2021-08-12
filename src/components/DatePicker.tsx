import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
interface IDatePicker {
    formikFiledValue: string;
    testID: string;
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<boolean>>;
    setFieldValue: (field: string, value: Date, shouldValidate?: boolean | undefined) => void;
}
const WebDatePicker: React.FC<IDatePicker> = ({
    formikFiledValue,
    testID,
    date,
    setDate,
    setFieldValue,
}) => (
    <div>
        <DatePicker
            inline
            id={testID}
            selected={date}
            onChange={(date) => {
                setDate(false);
                if (date instanceof Date) setFieldValue(formikFiledValue, date);
            }}
        />
    </div>
);

export default WebDatePicker;
