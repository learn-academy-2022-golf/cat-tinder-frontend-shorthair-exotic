import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Header = () => {
  return (
    
    
   
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
      <CardTitle tag="h2">
      Zoowologiee Match
      </CardTitle>
       <CardText>
        Finally, a dating website for all carbon lifeforms...
       </CardText>

          <NavItem>
            <NavLink to="/catindex" className="nav-link">
       <CardText>
        View the Animals
       </CardText>
            </NavLink>
          </NavItem>

       <NavItem>  
       <NavLink to="/catnew" className="nav-link">
      <CardText>
        Create a Profile
      </CardText>
      </NavLink>
      </NavItem>

      <NavItem>  
       <NavLink to="/catedit" className="nav-link">
      <CardText>
        Edit your Profile
      </CardText>
      </NavLink>
      </NavItem>
    </CardBody>
    
  </Card>
  )
}

export default Header