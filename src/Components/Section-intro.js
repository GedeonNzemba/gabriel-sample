import React from "react";
import "../App.css";
import location_svg from '../_assets/weaver_brand.png';


export class SectionIntro extends React.Component {
  render() {
    return (
      <section id="intro-wrapper">
          <div className="intro_container">
            <div className="intro_inner_container">
              {/* left content */}
              <div className="info_content">
                <h2>{this.props.introHeading}</h2>
                <p className="intro-top-parag paragraph">
                  At Proper Living we believe that we can make a significant
                  improvement to the lives of thousands of young people through{" "}
                  <span>{this.props.modern}</span> design and by creating
                  communities.
                </p>
                <br />
                <p className="intro-mid-parag paragraph">
                  We invite people from all walks of life to join us live their
                  modern lives properly. Our inspiration comes from a very{" "}
                  <span>{this.props.special}</span> South African bird called
                  the Sociable weaver.
                </p>
                <br />
                <p className="intro-bottom-parag paragraph">
                  They build large compound community nests, a rarity among
                  birds. These nests are perhaps the most spectacular structure
                  built by any bird. Please feel free to{" "}
                  <span>{this.props.flyDown}</span>{" "}
                  the page and find out more about this incredible bird and
                  information a key aspect to why people loves us, our security.
                </p>
              </div>
              {/* right content */}
              <div className="image_content">
                <div className="content">
                  <div className="item">
                    <div className="item__img-wrap modern_life__image">
                      <div className="item__img item__img--t1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <aside id="intro_svg_top">
                {this.props.SvgF}
              </aside>
              <aside id="intro_svg_bottom">
                {this.props.SvgF}
              </aside>
            </div>
          </div>

          {/* Inspiration quote */}
          <div className="inspiration__quote">
            <div className="quote_wrap">
              <q>
                {this.props.quote}<br />
                Weaver
              </q>
            </div>
          </div>

          {/* Intro section TWO  */}
          <div className="intro_container">
            <div className="intro_inner_container" id="intro_weaver">
              {/* left content */}
              <div className="info_content">
                <h2>{this.props.introHeadingWeaver}</h2>
                <p className="intro-top-parag paragraph">
                  This beautiful bird {" "} <span>{this.props.inspired}</span> our logo and
                  impacted many elements of our brand. They're a
                  species of bird in the weaver family that is endemic to {" "} <span>{this.props.SA}</span>. It's found in South
                  Africa, Namibia and Botswana, but their range is cantered within the Northern Cape Province of 
                  South Africa.
                </p>
                <br />
                <br />
                <p className="intro-bottom-parag paragraph">
                  Sociable Weavers use and maintain their nests
                  throughout the year. They nest in colonies as small as 10 individuals and up to 400-500 birds.
                  Their nests are {" "} <span>{this.props.trust}</span>, {" "} massive
                  and resembling huge apartment blocks.
                </p>
                <br />
              </div>
              {/* right content */}
              <div className="image_content">
                <div className="content">
                  <div className="item">
                  <div className="item__img-wrap sociable_weaver__image">
                    <div className="item__img item__img--t1" />
                  </div>
                  </div>
                </div>
              </div>
              <aside id="intro_svg_top_s2">
                {this.props.SvgF}
              </aside>
              <aside id="intro_svg_bottom_s2">
                {this.props.SvgF}
              </aside>
            </div>
          </div>

          <aside className="weaver_context_container">
            <div className="location_svg_container">
              <div className="location_svg">
                  <picture>
                    <img src={location_svg} alt=""></img>
                  </picture>
              </div>
            </div>
            <div className="weaver_explanation_container">
              <div className="weaver_explanation_text">
                “{this.props.weaverQuote}”
              </div>
            </div>
          </aside>
      </section>
    );
  }
}
