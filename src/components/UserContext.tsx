import React, { createContext, useState } from "react";
import { IUser } from "../types";

interface IUserContextInitialState {
    user: null | IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const initialState = {
    user: null,
    setUser: () => { /**/ },
};

export const UserContext = createContext<IUserContextInitialState>(initialState);

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
