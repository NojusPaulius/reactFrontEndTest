
import "./modalButtonScss/modalButton.scss"

import validator from "validator"
import { useState, useEffect } from "react"
import * as service from "../../services/imageCrudServices";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";

const ModalButton = () => {

    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate();
    const {id} = useParams()

    const [image, setImage] = useState({
        url:"",
        uid:""
    })

    const handleChange = (e)=>{
        setImage({
            ...image,
            [e.target.name]: e.target.value
        })
        console.log(image)
    }

    const handleSubmit = (e) => {
        if(!validator.isURL(image.url)){
            window.alert("it seems the link is incorrect")
        }else{
        e.preventDefault();
            service.addImage({
                ...image,
                uid:user.uid
        })
        navigate("/imageGallery");
    }
    };

    return(
        <div>
            <button data-bs-toggle="modal" data-bs-target="#modalUse" className="mainButton">
            </button>
            <div className="modal" tabIndex="-1" id="modalUse">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Upload your image</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Image Url</label>
                                <input type="text" className="form-control" onChange={handleChange} value={image.url} name="url"></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                    
                    </div>
                </div>
                </div>

        </div>

    )
}

export default ModalButton