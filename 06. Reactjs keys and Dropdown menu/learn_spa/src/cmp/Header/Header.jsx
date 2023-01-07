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
  
  // console.log("Under Normal Menu" + object);
  const design =(
    <>
    <Link to ={object.menuInfo.url} className="nav-link" >{object.menuInfo.label}</Link>
  
    </>
  );
  return design;
}

const DropdownMenu =(object)=>{
  const design =(
    <>
    <NavDropdown title={object.menuInfo.label} id="basic-nav-dropdown">
      {

            object.menuInfo.DropDown_List.map((item)=>{
              return <NormalMenu menuInfo={item}/>
              
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
        <Navbar bg="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="./">{Company_Info.name}</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end w-100">
            
             {
              Menu.map((data)=>{
                console.log(data);
                if(data.dropdown){
                  return <DropdownMenu menuInfo={data}/>
                }
                    return <NormalMenu menuInfo={data}/>
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