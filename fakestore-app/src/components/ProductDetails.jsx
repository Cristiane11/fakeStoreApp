import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ProductDetails = ()=> {
 const {id} = useParams();
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
},[id]);
if (loading) return <p>Loading Products...</p>;
if (error) return <p>{error}</p>;

   return (
    <>
      <Container>
        <Card>
          <Card.Img variant="top" src={product.image} alt={product.title}/>
          <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description} | <span> {product.category}</span></Card.Text>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </Container>

    </>
  )
}

export default ProductDetails;