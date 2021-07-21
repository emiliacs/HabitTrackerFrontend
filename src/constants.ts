export enum StatusCodes {
    Code200 = 200,
}

export enum LoginMessages {
    RegistrationSuccees = "Registration Succees",
    RegistrationFail = "Unable to Successfully Complete Registration ...Try Again",
}

export enum Routes {
    login = "login",
    register = "users",
    usersMe = "users/me",
    verify = "users/verify",
}

export enum VerificationMessages {
    success = "Verification success",
    fail = "Unable to verify",
}

export const LoginWithTokenRedirectTime = 2000;
