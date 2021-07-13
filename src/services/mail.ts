import axios from "axios";
const baseUrl = "http://localhost:36656/api/user/verify";

interface IVerificationData {
    verificationCode: string;
}

const handleVerification = (verificationCode: IVerificationData): Promise<string> => 
    axios.post(
        `${baseUrl}`,
        verificationCode
    )
    .then(() => "Verification success")
    .catch(() => "Unable to verify email");

export default { handleVerification };
