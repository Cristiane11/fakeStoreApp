import {useState} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


function AddProduct() {
  const [product, setProduct] = useState()
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    category:'',
    price:'',
    image:'',
  });
 {/** Handle changes to form inputs */}
 const handleChange =(e)=>{
  const {name, value} = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
 }
  {/** Handle the form submission */}
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/products", formData);
      console.log(response.data);
      setProduct(response.data);
      setSubmitted(true);
      setError(null);
    }catch(error){
      setError(`Error submitting form. Please try again:${error.message}`);
      setSubmitted(false);
    }
  }

  return (
    <>
      
    <Container className="mt-5">
      <h2 className="mt-5">Products on The Cart</h2>
    {submitted && <Alert variant ="success" dismissible>{product.title}created successfully!</Alert>}
    {error && <Alert variant ="danger" dismissible>{error}</Alert>}
    <Form onSubmit={handleSubmit}>
      {/**Title */}
      <Form.Group classame="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placehold="Enter a title" name="title" value={formData.title} onChange={handleChange} required></Form.Control>
      </Form.Group>
      {/**Description */}
      <Form.Group classame="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placehold="Enter a Description" name="description" value={formData.description} onChange={handleChange} required></Form.Control>
      </Form.Group>
      {/**Category */}
      <Form.Group classame="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placehold="Enter a Category" name="category" value={formData.category} onChange={handleChange} required></Form.Control>
      </Form.Group>
      {/**Price */}
      <Form.Group classame="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placehold="Enter a Price" name="pr" value={formData.price} onChange={handleChange} required></Form.Control>
      </Form.Group>

    </Form>
    </Container>
    </>
  )
}

export default AddProduct;