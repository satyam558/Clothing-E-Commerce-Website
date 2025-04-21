import Footer from "./layout/Footer";
import Header from "./layout/Header"
import Card from "./pages/Card";
import FormValidation from "./pages/ContactUs";
import Slider from "./pages/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
    return(
        <>
          <Header/>
          <Slider/>
          <Card/>
          <FormValidation/>
          <Footer/>
        </>
    );
}

export default App;