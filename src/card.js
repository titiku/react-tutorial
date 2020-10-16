import React from 'react'
import { Card } from 'react-bootstrap';

const card = ({ id,title, detail ,imageUrl,pathUrl }) => (
    <a href={pathUrl}>
    <Card id={id}  style={{ margin:"10px",width: '18rem',padding:"10dp" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{detail}</Card.Text>
        </Card.Body>
    </Card>
</a>
)

export default card