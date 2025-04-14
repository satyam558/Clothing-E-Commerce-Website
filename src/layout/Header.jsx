const Header = ()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom: "1px solid rgba(133, 133, 129, 0.32)"}}>
              <div className="container-fluid d-flex justify-content-around ">
                <a className="navbar-brand fs-2" href="#">KAIRA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 " style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", gap:"60px" }}>
                   <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         HOME 
                       </a>
                       <ul className="dropdown-menu">
                         <li><a className="dropdown-item" href="#">ABOUT</a></li>
                         <li><a className="dropdown-item" href="#">CART</a></li>
                         {/* <li><hr className="dropdown-divider"/></li> */}
                         <li><a className="dropdown-item" href="#">CHECKOUT</a></li>
                         <li><a className="dropdown-item" href="#">COMING SOON</a></li>
                         <li><a className="dropdown-item" href="#">CONTACT</a></li>
                         <li><a className="dropdown-item" href="#">ERROR PAGE</a></li>
                         <li><a className="dropdown-item" href="#">FAQS</a></li>
                         <li><a className="dropdown-item" href="#">MY ACCOUNT</a></li>
                         <li><a className="dropdown-item" href="#">ORDER TRACKING</a></li>
                         <li><a className="dropdown-item" href="#">WISHLIST</a></li>
                       </ul>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         SHOP
                       </a>
                       <ul className="dropdown-menu">
                         <li><a className="dropdown-item" href="#">ABOUT</a></li>
                         <li><a className="dropdown-item" href="#">CART</a></li>
                         {/* <li><hr className="dropdown-divider"/></li> */}
                         <li><a className="dropdown-item" href="#">CHECKOUT</a></li>
                         <li><a className="dropdown-item" href="#">COMING SOON</a></li>
                         <li><a className="dropdown-item" href="#">CONTACT</a></li>
                         <li><a className="dropdown-item" href="#">ERROR PAGE</a></li>
                         <li><a className="dropdown-item" href="#">FAQS</a></li>
                         <li><a className="dropdown-item" href="#">MY ACCOUNT</a></li>
                         <li><a className="dropdown-item" href="#">ORDER TRACKING</a></li>
                         <li><a className="dropdown-item" href="#">WISHLIST</a></li>
                       </ul>
                     </li>
                     <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         BLOG
                       </a>
                       <ul className="dropdown-menu">
                         <li><a className="dropdown-item" href="#">ABOUT</a></li>
                         <li><a className="dropdown-item" href="#">CART</a></li>
                         {/* <li><hr className="dropdown-divider"/></li> */}
                         <li><a className="dropdown-item" href="#">CHECKOUT</a></li>
                         <li><a className="dropdown-item" href="#">COMING SOON</a></li>
                         <li><a className="dropdown-item" href="#">CONTACT</a></li>
                         <li><a className="dropdown-item" href="#">ERROR PAGE</a></li>
                         <li><a className="dropdown-item" href="#">FAQS</a></li>
                         <li><a className="dropdown-item" href="#">MY ACCOUNT</a></li>
                         <li><a className="dropdown-item" href="#">ORDER TRACKING</a></li>
                         <li><a className="dropdown-item" href="#">WISHLIST</a></li>
                       </ul>
                     </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PAGES
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">ABOUT</a></li>
                        <li><a className="dropdown-item" href="#">CART</a></li>
                        {/* <li><hr className="dropdown-divider"/></li> */}
                        <li><a className="dropdown-item" href="#">CHECKOUT</a></li>
                        <li><a className="dropdown-item" href="#">COMING SOON</a></li>
                        <li><a className="dropdown-item" href="#">CONTACT</a></li>
                        <li><a className="dropdown-item" href="#">ERROR PAGE</a></li>
                        <li><a className="dropdown-item" href="#">FAQS</a></li>
                        <li><a className="dropdown-item" href="#">MY ACCOUNT</a></li>
                        <li><a className="dropdown-item" href="#">ORDER TRACKING</a></li>
                        <li><a className="dropdown-item" href="#">WISHLIST</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">CONTACT</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
              <hr />
            </nav>
        </>
    )
}

export default Header;


