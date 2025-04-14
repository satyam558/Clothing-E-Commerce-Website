import CardUi from "../layout/CardUi";
import data from "../layout/data";

const Card =()=>{
    return(
        <>
           <div className="container-fluid py-5 bg-light">
             <div className="row">
                {
                    data.map((ele)=>{
                        return(
                            <>
                              <div className="col-lg-3">
                                <CardUi tit = {ele.title} des={ele.desc} />
                              </div>
                            </>
                        )
                    })
                }
                </div>
                <div className="container">
                    <div className="row g-3 py-5 d-flex justify-content-between" >
                        <div className="col-lg-4">
                            <img src="https://picsum.photos/2000/300" width={500} height={300} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img src="https://picsum.photos/3000/300" width={500} height={300} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <img src="https://picsum.photos/4000/300" width={500} height={300} alt="" />
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}

export default Card;