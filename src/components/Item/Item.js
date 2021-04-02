import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Item = ({item}) => {
  const history = useHistory()
  const handleOrder = (name) => {
      history.push(`/checkout/${name}`);
  }

  return (
    <Col md={4}>
      <Card style={{ width: "18rem", marginBottom:"5px" }}>
        <Card.Img variant="top" src={item.imageURL} style={{height:'240px', width:'280px', padding: '30px'}} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <div style={{display:'flex', justifyContent:'space-between'}}>
                 <h5>${item.price}</h5>   
                <Button onClick={() => handleOrder(item.name)} variant="secondary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
