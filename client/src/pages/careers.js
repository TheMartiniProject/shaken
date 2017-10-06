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
                        Join our top-notch team with!  Positions are available and we are looking for a boat load of full stack web developers.  Our very competitive benefits are out of this world.  While we do not condone drinking alcoholic beverages, our most popular benefit is "Fridays At Four" where you sit with our CEO and talk about your week while she makes you your favorite cocktail.  Cheers and bottoms up!
                        </p>

                        <p>
                        Per kremlin colonel, paralyzer duis harper's bay breeze egestas, tempor tempor; et. Cras quisque vesper martini dapibus general sherman mojito; aliquet lobortis brandy daisy integer? Semper, harvey wallbanger bijou; sazerac hac litora sem lagavulin, the blenheim convallis calvert mai-tai sapien my fair lady. Tellus nec, metaxa donec dalmore: monte alban blair athol. Vat 69 convallis et ipsum smoky martini chicago cocktail posuere, red lotus.
                        </p>

                        <p>
                        Venenatis fringilla at luctus cras mauris potenti eget lagavulin salty dog. Ben nevis tomintoul b & b velit ti punch stinger ullamcorper pulvinar a chartreuse pretium. Rusty nail savoy affair old mr. boston nibh colorado bulldog southern comfort old etonian aliquam ultricies zombie abhainn dearg leo--varius donec: laoreet maecenas consectetur. Bombay, congue vodka mcgovern sem black & white euismod smoky martini mollis ginza mary, "donec pellentesque." Tristique vitae ultrices strathisla creamsicle tanqueray, ultrices dolor nostra mickey slim class vivamus: mattis patron habitasse hac. Cras, aberlour paradise morbi condimentum felis vel craigellachie galliano angel's tit dui paralyzer macuá. Drumguish, volutpat galliano sex on the beach volutpat vel orci. </p>

                        <p className>
                        Glentauchers sociosqu kirsch nulla, "leo amaretto di saronno euismod, ut netus." Vodka sunrise cherry herring ipsum, sapien chartreuse glen scotia, irish flag, bacardi felis tempor, "caipirinha justo." Aenean tempus, toro rojo--glen elgin est black tooth grin. Salty dog cuba libre habitasse; glenmorangie et, ut stolichnaya--maecenas tobermory ornare aliquam, cardhu. Stinger class adipiscing quam congue craigellachie consequat diam; french 75 blandit, condimentum. Glen ord commodo in old fashioned aliquam lemon split mint julep morbi. Imperdiet stolichnaya gimlet polish martini diam enim faucibus; id. </p>


                  </Container>
          </div>
        );
    }
}
export default JoinUs;
