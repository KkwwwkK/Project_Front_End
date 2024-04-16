import {createContext} from "react";
import {UserData} from "../data/user/UserData.tsx";

export const LoginUserContext
    = createContext<UserData | null | undefined>(undefined);

