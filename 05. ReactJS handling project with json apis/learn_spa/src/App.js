import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {
BrowserRouter as BR,
Routes,
Route
} from "react-router-dom";
import { Container } from "react-bootstrap";

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
                <h1> This is HomePage</h1>
               }/>
                 <Route exact path="/blog" element={
                 <h1> This is blog's Page</h1>
                }/>
               <Route exact="true" path="/software-engineering" element={
                <h1> This is software-engineering's Page</h1>
               }/>
                <Route exact path="/web-developement" element={
                <h1> This is web developement's Page</h1>
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