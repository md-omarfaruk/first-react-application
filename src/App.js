import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const myName = ["Md. ", "Omar", "Faruk"];

  const product = [
                    {name:"Md. Omar Faruk", uniqe:"Abnormal"},
                    {learning: "Programming", language: "JS"}
  ];

  const friends = ["Md. Omar Faruk", " Md. Fahim", "Md. Himu", "Md. Sujon", "Md. Nadim"];

  const allProducts = [
    {name: "Asus Computer", price: "$2000", ram: "16GB", hardDisk: "4TB", processor: "i7 9gen", monitor: '22"'},
    {name: "Samsum Computer", price: "$1500", ram: "12GB", hardDisk: "3TB", processor: "i7 2gen", monitor: '22"'},
    {name: "Dell Computer", price: "$1000", ram: "10GB", hardDisk: "2TB", processor: "i5 3gen", monitor: '22 "'},
    {name: "HP Computer", price: "$800", ram: "8GB", hardDisk: "1.5TB", processor: "i3 4gen", monitor: '22"'},
    {name: "LG Computer", price: "$500", ram: "6GB", hardDisk: "1TB", processor: "i3 2gen", monitor: '22"'}
  ]






  const myIdentity = {
    name: "Md. Omar Faruk",
    profession: "Programmer",
    age: 24
  }

  const styleCss = {
    color: "hotpink",
    backgroundColor: "cyan",
    padding: "10px",
    borderRadius: "40px"
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

        <Parents motherName = "Shajeda Begume" fatherName = "Md. Toyab Ali" myName = {myName[0] + myName[1] + myName[2]}></Parents>
        

          <Product1 mySelf = {product[0].uniqe} myJob = {product[1]}></Product1>


        <h1 style= {styleCss}>Md. Omar Faruk</h1>
        <br/>
        <h3 style = {{color: "pink", backgroundColor: "aqua", padding: "10px", borderRadius: "40px"}}>New Programmer</h3>
        <h5>Age: {myIdentity.age}</h5>

  
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <p> Md. Omar Faruk is now Ract.js learning</p>

          <ShakilVai></ShakilVai>
          <ShakilVai></ShakilVai>


          <ul>
            {
              friends.map(friend => <li>{friend}</li>)
            }
          </ul>


          <ul>
            {
              allProducts.map(product => <li>{product.name}</li>)
            }
          </ul>



          <ul>
            {
              allProducts.map(product => <AllProducts product = {product}></AllProducts>)
            }
          </ul>



            <StateCount></StateCount>


            <ApiPosts></ApiPosts>


      </header>
    </div>
  );
}


















function Parents(props){
  const mother = {
    color: "greenyellow",
    // backgroundColor: "deepink",
    // width: "200px",
    padding: "20px",
    margin: "30px",
    borderRadius: "40px"
  }

  const father = {
    color: "aquamarine",
    // backgroundColor: "greenyellow",
    // width: "200px",
    padding: "20px",
    margin: "30px",
    borderRadius: "40px"
  }
  return(
    <div>
      <h1 style={mother}>Mother's Name: {props.motherName}</h1>
      <h1 style={father}>Father's Name: {props.fatherName}</h1>
      <h3 style={mother}>{props.myName}</h3>
    </div>
  )
}


function ShakilVai(){

  const ShakilStyle = {
    backgroundColor: "hotpink",
    color: "cyan",
    borderRadius: "50%",
    padding: "10px",
    textAlign: "center"
  }

  return (
    <div style={{backgroundColor: "hotpink", color: "aqua", borderRadius: "40px", padding: "10px", margin:"20px"}}>
      <h1>Md. Shakil Hasan</h1>
    <h3>He is a IT master</h3>
    <button style={ShakilStyle}>Contact Me</button>

    </div>
    
  )
    
}




function Product1 (props){
  const productStyle = {
    color: "gray",
    backgroundColor: "greenyellow",
    width: "300px",
    border: "3px solid pink",
    borderRadius: "10px",
    padding: "15px"
}
  const {learning, language} = props.myJob;
  return(
    <div style={productStyle}>
      <h1>{props.mySelf}</h1>
      <h3>{props.myJob.learning}</h3>
      <h2>{language}</h2>
      <button>Buy Now</button>
    </div>
  )


}





function AllProducts(props){

  const productsStyle = {
    backgroundColor: "cyan",
    color: "deeppink",
    padding: "10px",
    margin: "50px",
    border: "2px slid gray",
    borderRadius: "15px",
    boxShadow: "5px 5px 10px white"
  }

  return (
      <div style={productsStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h5><span>{props.product.ram}</span> , <span>{props.product.processor}</span> , <span>{props.product.monitor}</span></h5>
      <br></br>
      <button>Buy Now</button>
      </div>
  )
}



function StateCount (){
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
        setCount(newCount);
  }

  const handleDecrease = () => setCount(count - 1);
  return (
       <div>
          <button onClick={handleDecrease}>Decrease</button>
         <button onMouseMove={handleDecrease}>Decrease1</button>
         <h1>Count: {count}</h1>
         <button onClick={handleIncrease}>Increase1</button>
         <button onClick={ () => setCount(count + 1)}>Increase2</button>
       </div>
  )
}


function ApiPosts (){
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Api Call Data</h3>

      <ul>
        {
          users.map(user => <li>{user.website}</li>)
        }
      </ul>


    </div>
  )
}



export default App;
