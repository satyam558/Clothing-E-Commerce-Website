const Footer = ()=>{
    return(
        <>
          <div className="container-fluid p-5 bg-light">
            <div className="row ">
                <div className="col-lg-3">
                    <a className="navbar-brand fs-2" href="#">KAIRA</a>
                    <p className="text-secondary">Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
                </div>
                <div className="col-lg-3 lh-1">
                    <h3>Quick Links</h3>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>SERVICES</p>
                    <p>SINGLE ITEM</p>
                    <p>CONTACT</p>
                </div>
                <div className="col-lg-3 lh-1">
                    <h3>Help & Info</h3>
                    <p>Track Your Order</p>
                    <p>Returns + Exchanges</p>
                    <p>Shipping + Delivery</p>
                    <p>Contact Us</p>
                    <p>Find us easy</p>
                    <p>Faqs</p>
                </div>
                <div className="col-lg-3">
                    <h3>Contact Us</h3>
                    <p className="text-secondary">Do you have any questions or suggestions?</p>
                    <p>contact@yourcompany.com</p>
                    <p className="text-secondary">Do you need support? Give us a call.</p>
                    <p>+43 720 11 52 78</p>
                </div>
            </div>
          </div>
        </>
    )
}

export default Footer;