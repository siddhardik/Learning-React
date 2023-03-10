import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {
BrowserRouter as BR,
Routes,
Route
} from "react-router-dom";
import { Container } from "react-bootstrap";

// Create internal components
const HomePage=(data)=>{
  const design =( 
    <>
    <h1> This Is home page created as internal Component</h1>
    <p> Full Details - {JSON.stringify(data)}</p>
    <p>Coach name is - {data.name} And his age is {data.age} </p>
    </>
  );
  return design;
}

const Blog=(data)=>{
  const design =(
    <>
    <img src={data.imageurl} alt ={data.desc} width ="40px"/>
    <p>{data.desc}</p>
    </>
  );
  return design;
}

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
                <HomePage name ="sid" age ="21"/>
               }/>
                 <Route exact path="/blog" element={
                 <Blog desc="Coach's Photo"
                  imageurl="https://scontent.frdp2-1.fna.fbcdn.net/v/t39.30808-6/312049677_801672547805501_8224805139868488322_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DhBdFsHQfiMAX8ShsDW&_nc_ht=scontent.frdp2-1.fna&oh=00_AfDsv26uSsyQLVj_o0T2Os86Za0mL9QOOOICFAyKZ53aRA&oe=63BCB54C"/>
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