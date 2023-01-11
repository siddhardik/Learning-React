import "./Header.css";
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



const NormalMenu =(object)=>{
  const textColor={
    color:object.color
  }
  
  // console.log("Under Normal Menu" + object);
  const design =(
    <>
    <Link to ={object.menuInfo.url} style={textColor}  className={object.menuInfo.button?"nav-link btn btn-primary text-white":"nav-link"} >{object.menuInfo.label}</Link>
  
    </>
  );
  return design;
}

const DropdownMenu =(object)=>{
  const design =(
    <>
    <NavDropdown title={object.menuInfo.label} id="dropdown-container">
      <i className="fa fa-caret-up arrow-up"></i>
      {
            object.menuInfo.DropDown_List.map((item)=>{
              return <NormalMenu  color ="red" menuInfo={item} key ={item.id} />
              
             })
      }
            </NavDropdown>
    </>
  );
  return design;
}

const Header=()=>{

    const design =(
        <>
        <Navbar  expand="lg" className="border-bottom">
        <Container>
          <Link className="navbar-brand" to="./">
            <img src={Company_Info.logo} alt ="Company Logo" width ="40px" />
            {Company_Info.name}
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end w-100">
            
             {
              Menu.map((data)=>{
                console.log(data);
                if(data.dropdown){
                  return <DropdownMenu menuInfo={data} key ={data.id}/>
                }
                    return <NormalMenu color="blue" menuInfo={data} key ={data.id} />
              })
              // Never Semicolon under Template{} Literals 
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