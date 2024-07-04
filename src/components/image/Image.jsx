import "./imageScss/image.scss"

import * as services from "../../services/imageCrudServices"


const Image = (props) =>{

    const handleDelete = () => {
        services.deleteImage(props.url.id);
    };

    return (
        <>
            <img src={props.url.url} className={props.class} alt="Preview"></img> 
            <button onClick={handleDelete} className="delete-button">🗑️</button>
        </>
    )
}

export default Image