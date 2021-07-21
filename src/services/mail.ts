import { API_URL } from "@env";
import axios from "axios";
import { VerificationMessages, ApiRoutes } from "../constants";

const baseUrl = API_URL;

interface IVerificationData {
    verificationCode: string;
}

const handleVerification = ({ verificationCode }: IVerificationData): Promise<string> =>
    axios
        .patch(`${baseUrl}${ApiRoutes.verify}`, null, {
            params: { verificationCode },
        })
        .then(() => VerificationMessages.success)
        .catch(() => VerificationMessages.fail);

export default { handleVerification };
