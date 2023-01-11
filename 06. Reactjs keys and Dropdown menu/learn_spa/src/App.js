import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import Homepage from "./cmp/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import {
BrowserRouter as BR,
Routes,
Route
} from "react-router-dom";
import { Container } from "react-bootstrap";

// Create internal components

const App=()=>{

  const design =(
    <>
    <BR>

    <Header/>
    <div>
      <Container>
        {/* In this box we need Routing Result  */}
         <Routes>
               <Route path="/" element={
                <Homepage />
               }/>
                 <Route exact path="/blog" element={
                 <h2> This is Blogging Page </h2>
                }/>
               <Route exact="true" path="/software-engineering" element={
                <h1> This is software-engineering's Page</h1>
               }/>
                <Route exact path="/web-developement" element={
                <h1> This is web developement's Page</h1>
               }/>

                <Route exact path="/contact-us" element={
                <h1> CONTACT US Page</h1>
               }/>

               <Route exact path="/register-now" element={
                <h1> This is register Now Page</h1>
               }/>
               
               </Routes>

      </Container>
    </div>

    <Footer/>
    </BR>
    </>
   );
  return design;
};

export default App;