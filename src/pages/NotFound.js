import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const NotFound = () => {
  return (
    //<div>NotFound Welcome to the ERROR PAGE!!</div>
    <Card
    className="my-2"
    color="danger"
    inverse
    style={{
      width: '46rem'
    }}
  >
    <CardHeader>
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      Welcome to the ERROR PAGE!!
      </CardTitle>
      <CardText>
        Please, kindly type a correct address...
      </CardText>
    </CardBody>
  </Card>
  )
}

export default NotFound