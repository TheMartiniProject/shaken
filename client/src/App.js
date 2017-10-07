import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Careers from "./pages/careers";
import Search from "./pages/search";
import Submit from "./pages/submit";
import Query from "./pages/query";
import Video from "./pages/video";
import VideoSearch from "./pages/videoSearch";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home } />
        <Route exact path="/home" component={Home} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/query" component={Query} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Submit" component={Submit} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/videoSearch" component={VideoSearch} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;


export default App;
