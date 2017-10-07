import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Careers from "../components/Careers";
// import homePage from "./homePage.css";

class JoinUs extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null,
        };
    }
    render() {
        return (
          <div>
            <Careers />
              <h1 className = "text-center" > Join Us</h1>

                <br/>
                <br/>
                      <Container>
                        <p>
                        Our missiont statement is to elevate world peace one drink at a time.  Join our top-notch team!  Positions are available and we are looking for a boat load of full stack web developers.  Our very competitive benefits are out of this world.  While we do not condone drinking alcoholic beverages, our most popular benefit is "Fridays@4" where you sit with our CEO and talk about your week while she makes your favorite cocktail.  Cheers and bottoms up!
                        </p>
                        <p>
                        <a href="https://join.slack.com/t/four17/shared_invite/enQtMjUyMjA2ODQ4ODMyLTBiYThhZjVmOWEzZmNjNmEzYTk1MzYyMjNhYWI1ZmQ0MDgxZjU2NzJlMWQ1Mjg1YjJiMzZiMTM2YTI2ZTE2MzA">https://four17.slack.com/</a>
                        </p>


                  </Container>
          </div>
        );
    }
}
export default JoinUs;
