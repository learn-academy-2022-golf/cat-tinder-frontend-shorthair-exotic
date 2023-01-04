import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Footer = () => {
  return (
   // <div>Footer</div>
   <Card
    className="my-2"
    color="success"
    inverse
    style={{
      width: '46rem'
    }}
  >
    <CardHeader>
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      
      </CardTitle>
      <CardText>
Andre and Tyler 2023      </CardText>
    </CardBody>
  </Card>
  )
}

export default Footer