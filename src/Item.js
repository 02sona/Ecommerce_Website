import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
function Item()
{
    const location = useLocation();
    const data = location.state;
    const [apidata,setapidata]=useState({});
    useEffect(() => {
       fetch("https://fakestoreapi.com/products/"+data.name).then((result) => {
        result.json().then((data1) => {
            setapidata(data1)
        })
       })
    }, [])
    return(
        <div>
            <br></br>
            <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Title: {apidata.title}</MDBCardTitle>
        <MDBCardText>Category: {apidata.category}</MDBCardText>
        <MDBCardText>Description: {apidata.description}</MDBCardText>
        <MDBCardText>Price: {apidata.price*80}Rs</MDBCardText>
        {/* <MDBCardText>Rating: {apidata.rate}</MDBCardText>
        <MDBCardText>Count: {apidata.count}</MDBCardText> */}
        <MDBBtn href='#'>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
    )
}
export default Item;