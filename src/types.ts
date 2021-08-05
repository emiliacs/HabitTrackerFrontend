// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TAuthParamList = {
    Login: undefined;
    Register: undefined;
    mailverification: undefined;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TAppParamList = {
    Home: undefined;
    mailverification: undefined;
};

export interface IUser {
    name: string;
    userId?: string;
    Verified?: boolean;
    Picture?: string;
    PublicProfile?: boolean;
}

export interface IHabit {
    habitId?: number;
    ownerId: number;
    name: string;
    description?: string;
    reward?: string;
    favorite?: boolean;
    publicHabit?: boolean;
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IRegisterFormValues extends ILoginFormValues {
    name: string;
}
