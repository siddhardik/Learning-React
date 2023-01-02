import "./App.css";
import {
BrowserRouter as BR,
// BrowserRouter is big name to short it as your custom name use as keyword 
Routes,
Route
} from "react-router-dom";
import Navbar from"./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.js";

const App=()=>{
    const design =(
            <BR>
            <Navbar/>
        <div className ="page">
            <div class="container">
            {/* use className instead of class its raect rule . no problem in class ,
            does't matter.
            .you will se  error on browser console  */}
               <Routes>
                {/* Routes will be use there where content will be changing according to click  */}
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

           </div>
        </div>
           <Footer/>
               </BR> 
    );
    return design;
}

export default App;

