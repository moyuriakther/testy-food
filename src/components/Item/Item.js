// import { Button } from "bootstrap";
import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Item = ({item}) => {
  return (
    <Col md={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.imgUrl} style={{height:'240px', width:'280px', padding: '30px'}} />
        <Card.Body>
          <Card.Title>{item.description}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <div style={{display:'flex', justifyContent:'space-between'}}>
                 <h5>{item.price}</h5>   
                <Button variant="secondary">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
