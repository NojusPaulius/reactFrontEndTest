import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ImageGallery from "../imageGallery/ImageGallery"
import Main from "../main/Main"
import Header from "../header/Header"
import LogInForm from "../logInForm/LogInForm"
import RegisterForm from "../registerForm/RegisterForm"


const App = () => {

    return(
        <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<LogInForm/>}/>
                <Route path="/registerForm" element={<RegisterForm/>}/>
                <Route path="/imageGallery" element={<ImageGallery/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App