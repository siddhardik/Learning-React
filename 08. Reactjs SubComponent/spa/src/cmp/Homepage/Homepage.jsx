import Bigadd from "./Bigadd/Bigadd";   // import subcomponent into component
import Category from   "./Category/Category";
import Benifits from "./Benifits/Benifits";
const Homepage = ()=>{
  const design = (
    <>
    <Bigadd/>
    <Benifits/>
    <Category/>
      
    </>
  );
  return design;
}

export default Homepage;
