import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, login } from "../../services/AuthServices";

const LogInForm = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/imageGallery')
    }, [user, loading])

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        login(formData.email, formData.password);
    }

    return(
        <div className="mt-5 container-fluid d-flex flex-column align-items-center">
            <form className="text-center w-25" onSubmit={submitHandler}>
                <h2 className="mb-4"> Log in</h2>
                <div className="my-5">
                    <label htmlFor="exampleInputEmail1" className="form-label h4">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={handleChange} value={formData.email} name="email"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="my-4">
                    <label htmlFor="exampleInputPassword1" className="form-label h4">Password</label>
                    <input type="password" className="form-control" onChange={handleChange} value={formData.password} name="password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-3 text-center">
                <p>Don't have an account yet? 
                    <Link to="../registerForm">
                    <span> Sign up</span>
                    </Link>
                </p>
            </div>
      </div>
    )
}


export default LogInForm
