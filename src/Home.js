import { useState } from "react"
import { useEffect } from "react"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Home()
{
  const navigate = useNavigate();
  function getId(pid)
  {
    const data = {name:pid, add:"Indore"}
    navigate("/item",{state:data})
  }
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
          fetch("https://fakestoreapi.com/products").then((resp)=>{
          resp.json().then((data)=>{
           setapidata(data)
          })
         })
    },[])
     return(
        <div style={{backgroundColor:"dodgerblue"}}>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
            apidata.map((item,i)=>
            <MDBCol key={i}>
        <MDBCard>
          <center>
          <MDBCardImage
            src={item.image} width="70px" height="150px"
            alt='...'
            position='top' style={{height:"150px", width:"200px"}}
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
            <MDBCardTitle>{item.category}</MDBCardTitle>
            <MDBCardText>{item.description.slice(0, 100)}</MDBCardText>
            <MDBCardTitle>Rating : {item.rating.rate}</MDBCardTitle>
            <MDBBtn onClick={()=>getId(item.id)}>View Details{item.id}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
            )
        }
    </MDBRow>
    <br></br>
    <Footer></Footer>
        </div>
     )
}
export default Home
//git status
//git add .
//git init
//git commit -a "first commit" //iske place pe apna comment daal sakte hai.
//git config --global user.email "email id name"
//git config --global user.name "your name"
////git commit -a "first commit" 
////git branch -M main
////git remote add origin https://github.com//email show 
////git push -u origin main
