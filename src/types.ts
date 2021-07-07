// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TAuthParamList = {
    Login: undefined;
    Register: undefined;
};
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type TAppParamList = {
    Home: undefined;
};

export interface ILoginFormValues {
    email: string;
    password: string;
};

export interface IRegisterFormValues extends ILoginFormValues {
    name: string;
};
