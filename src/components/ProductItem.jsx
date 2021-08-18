import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Row, Col } from "react-bootstrap";

export const ProductItem = () => {
  const dispatch = useDispatch();
  
    return (
    <div>
      <Card className="carditem">
        <Card.Img variant="top" src="logo192.png"/>
        <Row>
          <Col>
            <Button onClick={()=> dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap"], 
            })}>
              Add to cart
            </Button>
          </Col>
          <Col>
            <Button onClick={()=> dispatch({
                type: "REMOVE_PRODUCT",
                data: [],
            })}>
              Remove
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
