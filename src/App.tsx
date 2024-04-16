
import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./config/RouterConfig.tsx";
import {useEffect, useState} from "react";
import {UserData} from "./data/user/UserData.tsx";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.tsx";
import {LoginUserContext} from "./context/LoginUserContext.ts";

function App() {
    const[loginUser, setLoginUser] = useState<UserData | null | undefined >(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser);
    }, []);

  return (
    <>
        <LoginUserContext.Provider value={loginUser}>
            <RouterProvider router={router}/>
        </LoginUserContext.Provider>
    </>
  )
}

export default App
