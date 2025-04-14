const CardUi = ({tit,des})=>{
    return(
        <>
          <div className="card shadow text-center ">
            <div className="card-body lh-md text-capitalize">
               <i className="fa-solid fa-calendar-check fs-1 text-secondary mb-3"></i>
               <h3>{tit || "dummy"}</h3>
               <p className="text-secondary fs-6">{des || "dummy data"}</p>
            </div>
          </div>
        </>
    )
}

export default CardUi;