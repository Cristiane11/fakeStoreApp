import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";



function ProductDetails() {
 const{id}= useParams();
 const[product, setProduct] = useState(null);
 const[loading, setLoading]= useState(true);
 const[error,setError]= useState(null);

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then((response)=>{
    setProduct(response.data);
    setLoading(false);
  })
  .catch((error)=>{
    setError("Failed to Fetch Products");
    setLoading(false);
  })
},[id])
   return (
    <>
      <h1 className="mt-5">Products Details</h1>
    </>
  )
}

export default ProductDetails;