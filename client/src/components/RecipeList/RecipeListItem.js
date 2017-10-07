import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>Ingredients: {props.ingredients.map(ingredient => (
            <div>{ingredient}</div>
          ))}</p>
          <p>Directions:
          <br />{props.instructions}</p>
        </Col>
      </Row>
    </Container>
  </li>
);
