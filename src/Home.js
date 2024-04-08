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
function Home()
{
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
            <br></br>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
            apidata.map((item)=>
            <MDBCol>
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
            <MDBBtn>View Details</MDBBtn>
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
