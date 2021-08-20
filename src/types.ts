// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TAuthParamList = {
    Login: undefined;
    Register: undefined;
    mailverification: undefined;
    Logout: undefined;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TAppParamList = {
    Home: undefined;
    mailverification: undefined;
    newhabit: undefined;
};

export interface IUser {
    name: string;
    id?: number;
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

export interface INewHabit {
    ownerId?: number;
    name: string;
    description?: string;
    reward?: string;
    favorite?: boolean;
    publicHabit?: boolean;
    startDate: Date;
    endDate: Date;
    timesTodo: number;
}
