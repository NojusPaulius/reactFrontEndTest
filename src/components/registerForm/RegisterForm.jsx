import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"


const RegisterForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const [user, loading, error] = useAuthState(auth)

    useEffect(()=>{
        if(loading) return;
        if(user) navigate("/imageGallery")
    }, [user, loading])

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        registerWithEmailAndPassword(formData.name, formData.email, formData.password)
    }

    return(
        <div className="mt-5 mt-5 container-fluid d-flex flex-column align-items-center">
            <form className="text-center w-25" onSubmit={submitHandler}>
                <h2 className="mb-4"> Register</h2>
                <div className="my-5">
                    <label className="form-label h4">Name</label>
                    <input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name"></input>
                </div>
                <div className="my-5">
                    <label className="form-label h4">Email address</label>
                    <input type="email" className="form-control" value={formData.email} onChange={handleChange} name="email" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="my-4">
                    <label className="form-label h4">Password</label>
                    <input type="password" className="form-control" value={formData.password} name="password" onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-3 text-center">
                <p>Already have an account? 
                    <Link to="../">
                    <a href="#">Log in</a>
                    </Link>
                    </p>
            </div>
      </div>
    )
}


export default RegisterForm