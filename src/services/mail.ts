import { API_URL } from "@env";
import axios from "axios";
const baseUrl = API_URL + "users/verify";

interface IVerificationData {
    verificationCode: string;
}

const handleVerification = ({ verificationCode }: IVerificationData): Promise<string> =>
    axios
        .patch(`${baseUrl}`, null, {
            params: { verificationCode },
        })
        .then(() => "Verification success")
        .catch(() => "Unable to verify email");

export default { handleVerification };
