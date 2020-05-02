import React from 'react';
import '../App.css';
import './Responsive/Responsive.css';


export class Contact extends React.Component {

    render(){
        return(
            <section className="contact_us">
          <div className="contact_text">
            <h5>Contact Us</h5>
          </div>

          <div className="contact_form_container">
              <div className="form_wrap">
                <div className="form_left">
                  <h1>Have Q's? We have the A's!</h1>
                  <form method="get" action="./form.php" encType={FormData} target="_blank" >
                    <section className="getNames">
                      <input
                        type="text"
                        name="firstname"
                        id="firstName"
                        placeholder="First Name"
                        autoComplete='true'
                        required
                      ></input>
                      <input
                        type="text"
                        name="lastname"
                        id="secondName"
                        placeholder="Last Name"
                        autoComplete='true'
                        required
                      ></input>
                    </section>
                    <section className="getEmail">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        id="email"
                        required
                      ></input>
                    </section>
                    <section className="textarea">
                      <textarea
                        type="textarea"
                        name="message"
                        placeholder="Your Message"
                        id="textarea"
                        required
                      ></textarea>
                    </section>
                    <section className="submit_button">
                      <button type="submit" name="submit"  id="submit_button" formAction="contactForm" formTarget="_blank">
                        Send
                      </button>
                    </section>
                  </form>
                </div>
                <aside id="intro_svg_top_s9">
            {this.props.SvF_contact}
          </aside>
          <aside id="intro_svg_bottom_s9">
            {this.props.SvF_contact}
          </aside>
                <div className="map">
                  <div className="mapLayout"></div>
                </div>
              </div>
              <div className="footer_container">
              <footer>
                <div className="contact_social">
                  <div className="instagram">{this.props.instagram}</div>
                  <div className="facebook">{this.props.facebook}</div>
                </div>
                <div className="footer_email">
                  <div className="phone_number">
                    0839488442
                  </div>
                  <div className="mail_message">
                    <span><img src={require('../_assets/mail.png')} alt="email" className="mail"/></span>
                    info@properlivingproperty.com
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
        );
    }
}

export default Contact;