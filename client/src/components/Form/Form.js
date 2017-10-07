import React, { Component } from 'react';
import API from '../../utils/API';
import Button from "../Button";
import './Form.css';
import { Container, Row, Col } from "../../components/Grid";

class Form extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {
      name: "",
      ingredients: [],
      descriptionPlain: "",
      videos: "",
    };
    // Binding the event listeners which we will pass as props
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Handles the form values and updates the database.
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.name && 
        this.state.ingredients && 
        this.state.descriptionPlain && 
        this.state.videos) {

        let vid = this.state.videos
        let vidStore = vid.replace("https://www.youtube.com/watch?v=", "");

      API.saveRecipe({
        name: this.state.name,
        ingredients: this.state.ingredients,
        descriptionPlain: this.state.descriptionPlain,
        videos: vidStore
      })
        .then(res =>
        window.location.pathname = res.data)
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <div className = "form_container">
    <Col size="md-12">
          <input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            type="text"
            placeholder="Recipe Name"
          />
          <textarea
            value={this.state.ingredients}
            onChange={this.handleInputChange}
            name="ingredients"
            type="text"
            placeholder="1 Part Ingredient A, 3 Parts Ingredient B"
          />
          <textarea
            value={this.state.descriptionPlain}
            onChange={this.handleInputChange}
            name="descriptionPlain"
            type="text"
            placeholder="Directions"
          />
          <input
            value={this.state.videos}
            onChange={this.handleInputChange}
            name="videos"
            type="text"
            placeholder="YouTube video"
          />
          <Button onClick={this.handleFormSubmit}>
            Add New Recipe
          </Button>    
    </Col>  


        </div>
    );
  }
}

export default Form;
