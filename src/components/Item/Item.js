import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Item = ({item}) => {
  const history = useHistory()
  const handleOrder = (productName) => {
      history.push(`/checkout/${productName}`);
  }

  return (
    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.imageURL} style={{height:'240px', width:'280px', padding: '30px'}} />
        <Card.Body>
          <Card.Title>{item.productName}</Card.Title>
          <div style={{display:'flex', justifyContent:'space-between'}}>
                 <h5>${item.price}</h5>   
                <Button onClick={() => handleOrder(item.productName)} variant="secondary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
