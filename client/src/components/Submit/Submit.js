import React, { Component } from 'react';
import './Form/Form.css';

class Submit extends Component {
  constructor() {
    super();
    // Setting initial state to store the input values
    this.state = {

    };
    // Binding the event listeners which we will pass as props
  }

  render() {
    return (
      <div className = "container">
        <input
          name="name"
          type="text"
          placeholder="band name"
        />
        <textarea
          name="bio"
          type="text"
          placeholder="band bio"
        />
        <input
          name="photo"
          type="text"
          placeholder="photo url"
        />
        <input
          name="genre"
          type="text"
          placeholder="band genre"
        />
        <input
          name="location"
          type="text"
          placeholder="location"
        />
        <input
          name="soundcloud"
          type="text"
          placeholder="soundcloud url"
        />
        <input
          name="facebook"
          type="text"
          placeholder="facebook url"
        />
        <input
          name="youtube"
          type="text"
          placeholder="youtube url"
        />
      </div>
    );
  }
}

export default Submit;
