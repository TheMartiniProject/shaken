import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Button from "../components/Button";
import SearchQueryPic from "../components/SearchQueryPic";
import query from "./query.css";


class Query extends React.Component {
  constructor(){
   super();
   this.state = {

   }
 }

 goSearchForDrink = (e) => {
   e.preventDefault();
   window.location.pathname = "/search";
 }

 submitNewRecipe = (e) => {
   e.preventDefault();
   window.location.pathname = "/submit";
 }

  render() {
    return (
      <div>
        <SearchQueryPic/>
        <h1 className="text-center">Please make a Selection</h1>
        <div className="center-button">
              <Button
                onClick={this. goSearchForDrink }
                type="warning"
                className="input-lg btn-custom"
                >  Search By Name
               </Button>

              <Button
                onClick={this.submitNewRecipe}
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
