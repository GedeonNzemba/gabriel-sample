import React from "react";
import "../App.css";
import './Responsive/Responsive.css';
import Slide from './Slide/Slide';

export class Main extends React.Component {

  //The lifecycle willmount component to be used to pass ref. ( Since the autoFocus is not supported in react)
  

  render() {
    return (
      <main id="main_wrapper">
        <section className="security_container">
          <div className="security_inner_container">
            {/* right content */}
            <div className="security_info_content">
              <h2>{this.props.securityHeading}</h2>
              <p className="security_top_parag paragraph">
                We take <span>{this.props._security}</span> very{" "}
                <span>{this.props._seriously}</span>. That’s why we provide 24/7
                guards, biometric fingerprint scanners, state of the art
                surveillance and have partnerships with leading{" "}
                <span>{this.props._rapid_response}</span> companies.
              </p>
              <br />
              <p className="security_bottom_parag paragraph" id="security_bottom_parag">
                Whether you're <span>{this.props._moving_out}</span> for the
                first time or have decided to join us slightly later, we know
                how big of a deal leaving your home can be. Rest assured, we’ve
                put in everything we can do make sure your time with us is{" "}
                <span>{this.props._safe}</span>. This is what we pride ourselves
                on.
              </p>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item">
                  <div className="item__img-wrap encrupted_security__image size" id="encrupted_security__image">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider_1">
        <Slide />
        </div>

          {/* Inspiration quote */}
          <div className="security_inspiration_quote">
            <div className="quote_wrap">
              <q>{this.props.security_quote}</q>
              <br />
            </div>
          </div>
          <aside id="intro_svg_top_s4">
            {this.props.SvgF}
          </aside>
          <aside id="intro_svg_bottom_s4">
            {this.props.SvgF}
          </aside>
        </section>

        <section className="cctv_camera_container">
          <div className="cctv_camera_inner_container">
            {/* right content */}
            <div className="cctv_camera_info_content">
              <h2>{this.props.cctv_title}</h2>
              <p className="cctv_camera_bottom_parag paragraph">
                Common and external spaces within and nearby the premises are {" "}
                <span>{this.props._protected}</span> {" "} by state of the art{" "}
                <span>{this.props._surveillance}</span> cameras. We’ve gone a
                step further by ensuring streams are{" "}
                <span>{this.props._monitored}</span> by a{" "}
                <span>{this.props._specialist}</span> {" "}
                monitoring team who will immediately dispatch resources if any
                suspicious activity occurs.
              </p>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item">
                  <div className="item__img-wrap inhouse_security__image size">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
            <aside id="intro_svg_top_s5">
            {this.props.SvgF}
          </aside>
          <aside id="intro_svg_bottom_s5">
            {this.props.SvgF}
          </aside>
          </div>

          {/* Inspiration quote */}
          <div className="cctv_camera_inspiration_quote">
            <div className="cctv_camera_quote_wrap">
              <q>{this.props.cctv_quote}</q>
              <br />
            </div>
          </div>
        </section>

        <section className="rational_guards_container">
          <div className="rational_guards_inner_container">
            {/* right content */}
            <div className="rational_guards_info_content">
              <h2>{this.props.rational_guards_title}</h2>
              <p className="rational_guards_bottom_parag paragraph">
                We’ve hired an <span>{this.props._exceptional_security}</span>{" "}
                team and demand the highest standards. All guards must have{" "}
                <span>{this.props._high_level}</span> qualifications in line
                with PSIRA registration policies. The guards are on{" "}
                <span>{this.props._24h7} </span>
                {" "} rotation and are well connected to the rest of our security
                infrastructure.
              </p>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item">
                  <div className="item__img-wrap psira_guards__image size">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration quote */}
          <div className="rational_guards_inspiration_quote">
            <div className="rational_guards_quote_wrap">
              <q>{this.props._guards_quote}</q>
              <br />
            </div>
          </div>
        </section>

        <section className="biometric_system_container">
          <div className="biometric_system_inner_container">
            {/* right content */}
            <div className="biometric_system_info_content">
              <h2>{this.props.biometric_title}</h2>
              <p className="biometric_system_bottom_parag paragraph">
                We’ve brought in a proper <span>{this.props._biometric}</span>{" "}
                system which allows residents to use their{" "}
                <span>{this.props._fingerprints}</span> as keys to their rooms.{" "}
                <span>{this.props._no_more}</span> worrying about lost or stolen{" "}
                <span>{this.props._keys}</span>. Obviously, this helps in terms
                of security but we mainly did this because our co-founder Caspar
                Lee <span>{this.props._always}</span> loses his keys!
              </p>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item">
                  <div className="item__img-wrap biometric_system__image size">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
            
          <aside id="intro_svg_bottom_s6">
            {this.props.SvgF}
          </aside>
          </div>

          {/* Inspiration quote */}
          <div className="biometric_system_inspiration_quote">
            <div className="biometric_system_quote_wrap">
              <q>{this.props.biometric_quote}</q>
              <br />
            </div>
          </div>
        </section>

        <section className="digital_guest">
          <div className="digital_guest_inner_container">
            {/* right content */}
            <div className="digital_guest_info_content">
              <h2>{this.props.digital_name}</h2>
              <p className="digital_guest_bottom_parag paragraph">
                In order to track your guests, we’ve placed tablets with proper{" "}
                <span>{this.props._sign_in}</span> software in our reception
                area. When your guest comes to <span>{this.props._visit}</span>{" "}
                , as they sign in, you’ll receive an email{" "}
                <span>{this.props._informing}</span> that they’ve arrived. The
                software also allows us to <span>{this.props._track}</span>{" "}
                everyone in the building in case of an evacuation.
              </p>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item">
                  <div className="item__img-wrap digital_guest__image size">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration quote */}
          <div className="digital_guest_inspiration_quote">
            <div className="digital_guest_quote_wrap">
              <q>{this.props.digital_quote}</q>
              <br />
            </div>
          </div>
        </section>

        <section className="secure_generator_container">
          <div className="secure_generator_inner_container">
            {/* right content */}
            <div className="secure_generator_info_content">
              <h2>{this.props.secure_generator_title}</h2>
              <p className="secure_generator_bottom_parag paragraph">
                We’ve ensured that there is a <span>{this.props._secure}</span>{" "}
                to power <span>{this.props._secure}</span>during any power
                outage including our security system.
              </p>
              <br />
              <div className="secure_generator_svg">
                <div className="secure_svg"></div>
              </div>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item">
                  <div className="item__img-wrap secure_generator__image size">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
            <aside id="intro_svg_bottom_s7">
            {this.props.SvgF}
          </aside>
          </div>

          {/* Inspiration quote */}
          <div className="secure_generator_inspiration_quote">
            <div className="secure_generator_quote_wrap">
              <q>{this.props.secure_generator_quote}</q>
              <br />
            </div>
          </div>
        </section>

        <section className="swift_app_container">
          <div className="swift_app_inner_container">
            {/* right content */}
            <div className="swift_app_info_content">
              <h2>{this.props.swift_app_title}</h2>
              {/* Inspiration quote */}
              <div className="swift_app_inspiration_quote">
                <div className="swift_app_quote_wrap">
                  <h1>{this.props.swift_app_quote}</h1>
                  <br />
                </div>
              </div>

              <article className="swift_app_frame">
                <div className="frame">
                  <ul id="overflow">
                    <li className="article_item item_swif_info_on1">
                      <div className="item_header">{this.props.incident}</div>
                      <div className="item_content">
                        {this.props.incident_reporting}
                      </div>
                    </li>
                    <br />
                    <li className="article_item item_swif_info_on2">
                      <div className="item_header">{this.props.function}</div>
                      <div className="item_content">
                        {this.props.watchMe_function}
                      </div>
                    </li>
                    <br />
                    <li className="article_item item_swif_info_on3">
                      <div className="item_header">{this.props.SOS}</div>
                      <div className="item_content">{this.props.emergency}</div>
                    </li>
                    <br />
                    <li className="article_item item_swif_info_on3">
                      <div className="item_header">{this.props.Message}</div>
                      <div className="item_content">
                        {this.props.message_management}
                      </div>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* left content */}
            <div className="image_content">
              <div className="content">
                <div className="item swift_item">
                  <div className="item__img-wrap swift_app__image size" id="swift_app__image">
                    <div className="item__img item__img--t1"></div>
                  </div>
                </div>
              </div>
            </div>
            <aside id="intro_svg_top_s8">
            {this.props.SvgF}
          </aside>
          <aside id="intro_svg_bottom_s8">
            {this.props.SvgF}
          </aside>
          </div>
        </section>

        
      </main>
    );
  }
}

export default Main;
