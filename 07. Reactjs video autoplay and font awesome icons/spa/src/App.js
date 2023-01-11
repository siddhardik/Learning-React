import Header from "./cmp/Header/Header";
import Footer from "./cmp/Footer/Footer";
import Homepage from "./cmp/Homepage/Homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = ()=>{
  const design = (
    <>
      <Router>
        <Header />
          <div>
              <Routes>
                <Route path="/" element={

                  <Homepage />
                }/>
                
                <Route exact path="/blog" element={
                  <h1> Welcome To Blog Page</h1>
                }
                />
               
                <Route exact path="/software-engineering" element={

                  <h1>Welcome to se</h1>
                }
                />
                <Route exact path="/web-development" element={

                  <h1>Welcome to wd</h1>
                }
                />
                <Route exact path="/robotics" element={

                  <h1>Welcome to robotics</h1>
                }
                />
                <Route exact path="/contact-us" element={

                  <h1>Welcome to contact us</h1>
                }
                />
              </Routes>
          </div>
      </Router>
    </>
  );
  return design;
}

export default App;
