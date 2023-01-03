import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Header = () => {
  return (
    
    
   // <div>Zoowologiee Match</div>
    <Card
    className="my-2"
    color="primary"
    inverse
    style={{
      width: '46rem'
    }}
  >
    <CardHeader>
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
      Zoowologiee Match
      </CardTitle>
      <CardText>
        Finally, a dating website for all carbon lifeforms...
      </CardText>
    </CardBody>
  </Card>
  )
}

export default Header