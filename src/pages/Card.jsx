import CardUi from "../layout/CardUi";
import data from "../layout/data";

const Card =()=>{
    return(
        <>
           <div className="container-fluid py-5 bg-light">
            <h1 className="text-center text-capitalize">about us</h1>
             <div className="row py-5">
                {
                    data.map((ele)=>{
                        return(
                              <div className="col-lg-3">
                                <CardUi tit = {ele.title} des={ele.desc} />
                              </div>
                        )
                    })
                }
                </div>
                <div className="container">
                    <div className="d-flex justify-content-lg-evenly fs-5 text-secondary text-uppercase flex-wrap lh-lg" >
                        <div className="col-lg-4 ">
                            <img src="https://picsum.photos/100/300"   width={400} height={300} alt="" />
                            <p>shop for men</p>
                        </div>
                        <div className="col-lg-4 ">
                            <img src="https://picsum.photos/200/300"  width={400} height={300} alt="" />
                            <p>shop for men</p>
                        </div>
                        <div className="col-lg-4 ">
                            <img src="https://picsum.photos/300/300"  width={400} height={300} alt="" />
                            <p>shop for men</p>
                        </div>
                    </div>
                </div>
             </div>
        </>
    )
}

export default Card;