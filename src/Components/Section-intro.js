import React from "react";
import "../App.css";
import location_svg from '../_assets/weaver_brand.png';


export class SectionIntro extends React.Component {
  render() {
    return (
      <div className="intro">
      <section id="intro-wrapper">
          <div className="intro_container">
            <div className="intro_inner_container">
              {/* right content */}
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
              {/* left content */}
              <div className="image_content">
                <div className="content">
                  <div className="item">
                    <div className="item__img-wrap modern_life__image">
                      <div className="item__img item__img--t1"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* svg */}
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
                {this.props.quote}
                {" "} Weaver
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
            <div className="location_svg_container-tablet">
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
              <div className="weaver_explanation_text-tablet">
                “{this.props.weaverQuote}”
              </div>
            </div>
          </aside>
      </section>










                  <article className="intro-container-md">
                    <section className="intro-inner-content-md intro-wrap-p1-md">
                        <aside className="intro-image-content-p1-md">
                            {/* PARALLEX IMAGE */}
                            <div className="content content-intro-p1-md">
                                <div class="item">
                                    <div class="item__img-wrap img__intro-p1-md">
                                        <div class="item__img item__img--t2 intro-img-p1-md"></div>
                                    </div>
                                </div>
                            </div>
                            {/* PARALLEX IMAGE */}
                        </aside>
                        <div className="intro-header-content-p1-md">
                            <header className="intro-header-md">
                                <h3 className="hide">Modern Communities, Designed<br /> For Young Adults.</h3>
                                <h3 className="hide-sm">Modern Communities, Designed For Young Adults.</h3>
                            </header>
                        </div>
                    </section>
                    <section className="intro-inner-content-md intro-wrap-p2-md">
                        <aside className="intro-image-content-p2-md">
                            {/* PARALLEX IMAGE */}
                            <div className="content content-intro-p2-md">
                                <div class="item">
                                    <div class="item__img-wrap img__intro-p2-md">
                                        <div class="item__img item__img--t2 intro-img-p2-md"></div>
                                    </div>
                                </div>
                            </div>
                            {/* PARALLEX IMAGE */}
                        </aside>
                        <div className="intro-header-content-p2-md">
                            <div className="intro-modernlife-p2-md">
                                <h2 className="hide">Modern Life, Lived Proper.</h2>
                                <h2 className="hide-sm">Modern Life, Lived<br /> Proper.</h2>
                                <div className="modernlife-text-md">
                                    <p>
                                        At Proper Living we believe that we can make a 
                                        significant improvement to the lives of thousands of
                                        young people through <span>modern</span> design 
                                        and by creating communities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="intro-inner-content-md intro-wrap-p3-md">
                        <aside className="intro-image-content-p3-md">
                            {/* PARALLEX IMAGE */}
                            <div className="content content-intro-p3-md">
                                <div class="item">
                                    <div class="item__img-wrap img__intro-p3-md">
                                        <div class="item__img item__img--t2 intro-img-p3-md"></div>
                                    </div>
                                </div>
                            </div>
                            {/* PARALLEX IMAGE */}
                        </aside>
                        <div className="intro-header-content-p3-md">
                            <div className="intro-weaver-p3-md">
                                <h2>The Sociable Weaver.</h2>
                                <div className="weaver-text-md">
                                    <p> This beautiful bird <span>inspired</span> our logo and impacted 
                                        many elements of our brand. They're a species of bird
                                        in the weaver family that is endemic to <span>Southern</span> {" "}
                                        <span>Africa</span>.
                                        it's found in South Africa, Namibia and
                                        Botswana, but their range is cantered within the.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
    </div>
    );
  }
}
