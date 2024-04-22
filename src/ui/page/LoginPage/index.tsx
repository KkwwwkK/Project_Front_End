import NavList from "../../component/NavList/NavList.tsx";
import LoginForm from "../../component/Login/LoginForm.tsx";
import StickyFooter from "../../../util/Footer.tsx";
export default function LoginPage() {
    return(
        <div className="shopping-cart-container">
            <NavList/>
            <LoginForm/>
            <StickyFooter/>
        </div>

    )
}