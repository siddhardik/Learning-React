import { buildQueries } from "@testing-library/react";
import "./Homepage.css";
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

            <h1 style={h1Des}>It Is Homepage good </h1>
            <p> name: {name}</p>
            <p>{arr} 3 rd Element = {arr[2]}</p>
            {/* <p>{data}</p>  // Error Can't pass direct   */}
            <p>{JSON.stringify(data)}</p>
            <p>{JSON.stringify(new Date())}</p>
            <p>{data.stream} at Sem No= {data.Sem} </p>
            <p>{fun(34,56)}</p>
            <button onClick={test}>Click Here</button>
            <button onMouseOver={test}>Click Here</button>

        </>
    );
    return design;
}

export default Homepage;