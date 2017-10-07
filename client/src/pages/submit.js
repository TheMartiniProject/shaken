import React, { Component } from 'react';
import Form from "../components/Form/Form";
import { Container, Row, Col } from "../components/Grid";
import SearchPic from "../components/SearchPic";
import "./submit.css";

class NewRecipe extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
      <SearchPic />
        <Container>
           <Row>
              <Col size="md-12">
        {/* <div className="col-lg-9" id="heading"> */}
        {/* <a href="/admin"
            id="admin_redirect">Go back to admin page</a>
          {<h2>Add a new band here!</h2>} */}
          <Form/>
        {/* </div> */}
              </Col>
           </Row>
        </Container>
      </div>
    )
  }
}



export default NewRecipe;
