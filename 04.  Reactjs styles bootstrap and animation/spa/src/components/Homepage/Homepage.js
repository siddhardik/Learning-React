
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import {
Alert,
Button,
Container,
Navbar ,
NavDropdown,
Nav,
Breadcrumb,
Modal


} from "react-bootstrap";
const Homepage=()=>{
    const h1Des={
        fontSize:"50px",
        color:"blue",
        backgroundColor:"black",

    }
    let name= "Sid";
    const arr=[23,56,78,34,56];
    const data={
        stream:"ECE",
        Sem:"8"
    }

    const fun=(a,b)=>{
             return a+b;
    }

    const test=()=>{
        alert("I am Clicked/Hover");
    }

    const design =(
        // All Code Should be under one Parent element , React Fragment <> </>
        <>

            <h1 style={h1Des} className="animate__animated animate__shakeX animate__infinite">It Is Homepage good </h1>
            <p> name: {name}</p>
            <p>{arr} 3 rd Element = {arr[2]}</p>
            {/* <p>{data}</p>  // Error Can't pass direct   */}
            <p>{JSON.stringify(data)}</p>
            <p>{JSON.stringify(new Date())}</p>
            <p>{data.stream} at Sem No= {data.Sem} </p>
            <p>{fun(34,56)}</p>
            <button onClick={test}>Click Here</button>
            <button onMouseOver={test}>Click Here</button>
            <Alert varient="danger"> I am Alert</Alert>
            <Button onClick={test} varient="success">Click Here</Button>


{/* Bellow All Are Copy Paste  */}
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>


    <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>

        </>
    );
    return design;
}

export default Homepage;