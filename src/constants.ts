export enum StatusCodes {
    Code200 = 200,
    Code201 = 201,
}

export enum LoginMessages {
    RegistrationSuccees = "Registration Succees",
    RegistrationFail = "Unable to Successfully Complete Registration ...Try Again",
}
export enum NewHabitMessages {
    Succees = "New habit created",
    Fail = "Unable to create new habit ...Try Again",
}

export enum ApiRoutes {
    login = "login",
    register = "users",
    usersMe = "users/me",
    verify = "users/verify",
    newHabit = "habits",
}

export enum VerificationMessages {
    success = "Verification success",
    fail = "Unable to verify",
}

export const LoginWithTokenRedirectTime = 2000;
