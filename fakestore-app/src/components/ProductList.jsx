import {useState, useEffect} from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router";


function ProductList() {
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [ count, setCount] = useState(0);

  const incrementCount = () => {
    setCount (count + 1) ;
  }
  return (
    <>
      <h1 className="mt-5">Products Lists</h1>
      <p>Count: {count}</p>
      <button onClick = {incrementCount}>Click Me</button>
    </>
  )
}

export default ProductList;