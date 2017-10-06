import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from "../components/Button";
import SearchQueryPic from "../components/SearchQueryPic";
import query from "./query.css";


class Query extends React.Component {
  
  render() {
    return (
      <div>
        <SearchQueryPic/>
        <h1 className="text-center">Please make a Selection</h1>
        <div className="center-button">
          
              <Button
                onClick={this.handleFormSubmit}
                type="warning"
                className="input-lg btn-custom"
                id="searchRecipe"
                >  <a href="/search">Search By Name</a>
               </Button>

              <Button
                onClick={this.handleFormSubmit}
                type="warning"
                className="input-lg btn-custom"
                >  Add New Recipe
              </Button>

        </div>
    </div>
    );
  }
}
export default Query;
