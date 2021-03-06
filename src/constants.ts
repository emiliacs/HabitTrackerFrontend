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
export enum HabitDoneMessages{
    Success = "Habit is Done",
    Fail = "Unable to Successfully Mark Habit as Done ...Try Again",
}

export enum ApiRoutes {
    login = "login",
    register = "users",
    usersMe = "users/me",
    verify = "users/verify",
    newHabit = "habits",
    newHistory = "habithistory"
}

export enum VerificationMessages {
    success = "Verification success",
    fail = "Unable to verify",
}

export enum ButtonTexts {
    Logout = "Log out",
    AddNewHabit = "Add habit",
}

export const LoginWithTokenRedirectTime = 2000;
