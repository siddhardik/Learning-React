import {
    Navbar,
    Container,
    NavDropdown,
    Nav

} from "react-bootstrap";
import {Link} from "react-router-dom";
import Menu from "../../json-file/Menu";
import Company_Info from "../../json-file/CompanyInfo";  
// - hyphen  not Allowed  Company-info  produce error

const Header=()=>{

    const design =(
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="./">{Company_Info.name}</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end w-100">
             {/* <Link to ="/" className="nav-link">Home🏠</Link>
             <Link to ="/blog" className="nav-link">Blog</Link>
             <Link to ="/software-engineering" className="nav-link">SoftWare Engineering</Link>
             <Link to ="/web-developement" className="nav-link">Web3</Link> */}
             {
              Menu.map((data)=>{
                    return <Link to ={data.url} className="nav-link" >{data.label}</Link>
              })
              // Never Semicolon under Template Literals 
             }

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
     );
    return design;
};

export default Header;