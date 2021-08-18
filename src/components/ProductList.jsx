import React from 'react';
import { ProductItem } from './ProductItem';
import { Row, Col, Card } from 'react-bootstrap';

export const ProductList = () => {
    return (
        <Card className="cardlist">
            <Row>
                <Col>
                <ProductItem />
                </Col>
                <Col><ProductItem /></Col>
                <Col><ProductItem /></Col>
                <Col><ProductItem /></Col>
            </Row>
        </Card>
            
        
    );
};

