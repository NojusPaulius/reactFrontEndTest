import "./headerLinks.scss"

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as userServices from "../../services/userServices";
import { auth, logout } from "../../services/AuthServices";



const Header = () => {

    const [userData, setUserData] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return;
        if(!user) navigate('../');
        userServices.getUserData(user, setUserData)
    }, [loading, user])

    const notLoggedInalertClick = () =>{
        window.alert("you are not logged in, please do before clicking me!")
    }

    const windowAlertOnClick = () => {
        window.alert("this does nothing, currently")
    }

    return( //gali isvesti tik viena elementa
    <header className="bg-secondary" style={{ height: "20vh"}}>
        <nav className="navbar">
            {user? 
                <Link to="imageGallery">
                    <h1 className="m-2 display-3 md-display-1  header-link">Holiday photos</h1>
                </Link>:
                <h1 className=" m-2 display-3 md-display-1 header-link" onClick={notLoggedInalertClick}>Holiday photos</h1>
            }
            
            {user?
            <ul className="m-2 d-flex list-unstyled">
                <li className="md-mx-4 display-4 md-display-3 header-link" onClick={windowAlertOnClick}>{userData.name}</li>
                <li className="md-mx-4 display-4 md-display-3 header-link" onClick={logout}>Atsijungti</li>
            </ul>:
            <ul className="m-2 d-flex list-unstyled">
                <Link to="/">
                    <li className="md-mx-4 display-4 md-display-3 header-link">Login</li>
                </Link>
                <Link to="registerForm">
                    <li className="md-mx-4 display-4 md-display-3 header-link">Register</li>
                </Link>
            </ul>
            }
           
        </nav>
    </header>
    )
}

export default Header