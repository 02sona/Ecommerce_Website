import React from 'react'
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
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
function Electronics() {
  const navigate = useNavigate();
  function getId(pid)
  {
    const data = {name:pid, add:"Indore"}
    navigate("/item",{state:data})
  }
    const [apidata,setapidata]=useState([])
    useEffect(()=>{
          fetch("https://fakestoreapi.com/products/category/electronics").then((resp)=>{
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

export default Electronics