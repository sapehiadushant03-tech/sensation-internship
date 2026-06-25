import Student from "./components/Student";
import Products from "./data/Products";
import Details from "./components/Details";
function App (){
  let arr =["Dushant Sapehia","Keshav Jamwal","Lovepreet","Abhinandan Sharma","Tejshav Singh"];
  
  return (
    <>
    <Student name="Dushant Sapehia" age="19"></Student>
    <Student name=" Lovepreet" age="20"></Student>

    {arr.map((letter) =>{
      return <h1>{letter}</h1>
    })}

    {Products.map((product) =>{
      return(
      <div> 
        <h3>Product_Name : {product.name}</h3>
        <p> Price: {product.price}</p>
        <p> Desc: {product.desc}</p>
      </div>
      );
    })}
    <Details></Details>
    </>
  )
};

export default App;

