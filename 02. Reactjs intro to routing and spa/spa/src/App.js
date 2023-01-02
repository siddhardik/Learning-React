import "./App.css";
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

const App=()=>{
    const design =(
        <div class ="page">
            <div class ="container">
            <BrowserRouter>
               <Routes>
               <Route path="/" element={
                <h1> This is HomePage</h1>
               }/>
               <Route path="/images" element={
                <h1> This is images' Page</h1>
               }/>
               <Route path="/videos" element={
                <h1> This is Videos' Page</h1>
               }/>
               <Route path="/contact-us" element={
                <h1> contact -us Page</h1>
               }/>
               <Route path="/about-us" element={
                <h1> About Us</h1>
               }/>
               </Routes>
               </BrowserRouter> 

           </div>
        </div>
    );
    return design;
}

export default App;

