import {useState, useEffect} from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router";


function ProductList() {
  const[products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 {/** useEffect only runs once on the initial component render, at least if you have an empty dependency array. If we add other variables into the dependency array, then we list them as dependencies. 
  And if the value of any dependency changes, then useEffect() runs again.  https://fakestoreapi.com/docs#tag/Products/operating/getAllProducts*/}

useEffect(()=>{
  axios
  .get('https://fakestoreapi.com/products')
  .then((response) =>{
    setProducts(response.data);
    setLoading(false);
  })
  .catch((error) =>{
    setError("Failed to Fetch Products");
    setLoading(false);
  })
},[]);

if (loading === true) return <p>Loading Products...</p>;
if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="mt-5">Products Lists</h1>
   <Container>
    <Row>
      {products.map((product)=>(
        <Col key={product.id} md={4} className="mb-3">
          
            <Card.Img variant="top" src={product.image} alt ={product.title}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      
        </Col>
      ))}
    </Row>

   </Container>
  
    </>
  )
}

export default ProductList;