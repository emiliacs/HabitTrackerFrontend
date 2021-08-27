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
    profile: undefined;
};

export interface IUser {
    name: string;
    id?: number;
    email?: string;
    Verified?: boolean;
    Picture?: string;
    PublicProfile?: boolean;
}

export interface IHabit {
    id?: number;
    ownerId: number;
    name: string;
    description?: string;
    reward?: string;
    favorite?: boolean;
    publicHabit?: boolean;
    history: IHabitHistory[];
}
export interface IHabitHistory {
    habitHistoryDate?: Date;
    habitHistoryNum?: number;
    habitHistoryResult?: boolean;    
    habitId: number;
    id?: number;
    ownerId?: number;
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
