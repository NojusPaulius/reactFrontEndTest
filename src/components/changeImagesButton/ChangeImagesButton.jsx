import "./changeImagesButtonScss/changeImagesButton.scss"
import layout1 from "../../images/layout1.png"
import layout2 from "../../images/layout2.png"
import layout3 from "../../images/layout3.png"
import layout4 from "../../images/layout4.png"
import layout5 from "../../images/layout5.png"
import layout6 from "../../images/layout6.png"
import layout7 from "../../images/layout7.png"
import layout8 from "../../images/layout8.png"
import layout9 from "../../images/layout9fail.png"


const ChangeImagesButton = ({ onLayoutChange }) =>{


    const handleButtonClick = (newLayout) => {
        onLayoutChange(newLayout);
      };




    return (

        <div>
        <button data-bs-toggle="modal" data-bs-target="#modalLayout" className="btn btn-primary layoutButton">
            Change image layout
        </button>
        <div className="modal" tabIndex="-1" id="modalLayout">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Change layout</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <button type="button" onClick={()=> handleButtonClick("layout-1")}>
                            <div className="image-container"><img src={layout1} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-2")}>
                            <div className="image-container"><img src={layout2} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-3")}>
                            <div className="image-container"><img src={layout3} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-4")}>
                            <div className="image-container"><img src={layout4} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-5")}>
                            <div className="image-container"><img src={layout5} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-6")}>
                            <div className="image-container"><img src={layout6} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-7")}>
                            <div className="image-container"><img src={layout7} alt="image"/></div>
                        </button>
                        <button type="button" onClick={()=> handleButtonClick("layout-8")}>
                            <div className="image-container"><img src={layout8} alt="image"/></div>
                        </button>

                        {/* This does not work, i didin't think the structure through from the start */}
                        <button type="disabled"> 
                            <div className="image-container"><img src={layout9} alt="not working image"/></div>
                        </button>

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

export default ChangeImagesButton