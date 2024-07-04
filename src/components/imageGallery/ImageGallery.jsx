import "./imageGalleryScss/imageGallery.scss"

import { useEffect, useState } from "react"
import ModalButton from "../modalButton/ModalButton"
import ChangeImagesButton from "../changeImagesButton/ChangeImagesButton"
import Image from "../image/Image.jsx"
import * as service from "../../services/imageCrudServices"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../services/AuthServices"

const ImageGallery = () => {

    const [user, loading, error] =useAuthState(auth)
    const [images, setImages] = useState([])

    useEffect(()=>{
        if(loading) return;
        if(user){
        service.getAllImages(works =>{
            setImages(works)
        }, user)
    }
        },[user, loading])


    const [layout, setLayout] = useState('layout-3');
          
    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
        console.log(layout, "this is coming from immage gallery")
    };


    return(
        <>
              {/* on this button click it sends a value to this component and based on that value we apply a css class to image */}
            <ChangeImagesButton onLayoutChange={handleLayoutChange}/>
            <ModalButton/>


            <div className={`image-gallery ${layout}-test`}>
                {images.map((image) =>(
                    <Image url={image} class={layout}/>
                ))}
            </div>

            
                
        
        </>

    )
}


export default ImageGallery