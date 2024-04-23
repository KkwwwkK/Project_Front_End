import NavList from "../../component/NavList/NavList.tsx";
import LoginForm from "../../component/Login/LoginForm.tsx";
import StickyFooter from "../../../util/Footer.tsx";
import {useEffect} from "react";
export default function LoginPage() {
    useEffect(() => {
        document.title = "Welcome Smart Home"
    }, []);
    return(
        <div className="shopping-cart-container">
            <NavList/>
            <LoginForm/>
            <StickyFooter/>
        </div>

    )
}