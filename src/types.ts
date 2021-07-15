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
    username: string;
    userId?: string;
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IRegisterFormValues extends ILoginFormValues {
    name: string;
}
