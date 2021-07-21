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
    HabitId?: number;
    OwnerId: number;
    Name: string;
    Description?: string;
    Reward?: string;
    Favorite?: boolean;
    PublicHabit?: boolean;
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IRegisterFormValues extends ILoginFormValues {
    name: string;
}
