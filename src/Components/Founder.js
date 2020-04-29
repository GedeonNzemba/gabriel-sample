import React from 'react';
import '../App.css';
import { founder_Md } from './Founder/Founder_md';
import  Benji_image from '../_assets/benji.png';
import  Casper_image  from '../_assets/image_3.png';
import {right_arrow} from '../_assets/right-arrow.png';
    

export class Founder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            f_heading: 'Meet The People Behind',
            s_heading: 'Proper Living',
            toRight: false,
            fadeIn: false,
            name: false,
            name_1_profile_image: false,
            profile_info: false,
            quote: false,
            profile_name_1: 'Casper Lee',
            profile_name_2: 'Benji Schaffer',
            profile_quote_name_1: <p style={{fontSize: '1.9033674963396778vw'}}>Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>,
            profile_quote_name_2: <p style={{fontSize: '1.7935578330893118vw'}}>Luck? I don't know anything about luck. I've never banked on it and I'm afraid of people who do. Luck to me is something else: Hard work - and realizing what is opportunity and what isn't.</p>,
            name_1_story_paragraph: <div class="para-wrap">
                                        <p class="story_paragraph">
                                        In 2017, Caspar co-founded the <span className="color_p1_text1_a">influencer marketing platform,</span> Influencer.com and took the role of Chief Visionary Officer. That same year he became an <span class="color_p1_text1_b">ambassador</span> to The Queen’s Young Leaders and also hosted the BRIT Awards 2017 Worldwide Live Stream.
                                        </p>
                                        <p class="story_paragraph">
                                        In 2018, he co-founded <span class="color_p1_text2_a">Margravine Management</span> with Joe Sugg. IMG invested and is a strategic partner to the company. He continued to work alongside The Queen’s Young Leaders and was invited to <span class="color_p1_text2_b">meet the Queen</span> for a second year at Buckingham Palace.
                                        </p>
                                        <p class="story_paragraph">
                                        In 2019, he co-founded <span class="color_p1_text3_a">Creative Investment Club</span> which is a syndicate of top creators from around the world investing together in companies at their Pre-Seed, Seed, Series A, and Series B stages. Notable investments include <span class="color_p1_text3_b">Dash Water</span> and <span class="color_p1_text3_c">Faceit</span>.
                                        </p>
                                    </div>,
            name_2_story_paragraph: <div class="para-wrap">
                                        <p class="story_paragraph">
                                        Born and raised in Cape Town, <span class="color_p2_text1_a">South Africa,</span> 23-year-old Benji Schaffer is a forward-thinking entrepreneur and investor who co-founded his first company, <span class="color_p2_text1_b">SchaffSaev Transport Services</span> in 2014.
                                        </p>
                                        <p class="story_paragraph">
                                        It owns and operates fleets of <span class="color_p2_text2_a">vehicles</span> and employs <span class="color_p2_text2_b">drivers</span> to service passengers through Uber. In 2018, he became one of the early investors into Influencer.
                                        </p>
                                        <p class="story_paragraph">
                                        Benji is also a <span class="color_p2_text3_a">volunteer</span> at the City of Cape Town Law Enforcement Officer and a <span class="color_p2_text3_b">qualified paramedic</span>. He enjoys playing an <span class="color_p2_text3_c">active</span> role in the local community and creating safer spaces for members of the public.
                                        </p>
                                    </div>,
              name_2_story_paragraph_1: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
              name_2_story_paragraph_2: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. If you are going to use a passage',
              name_2_story_paragraph_3: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
              name_1_profile_image0: Casper_image,
              name_2_profile_image: Benji_image,
        }
        this.imageHandler = this.imageHandler.bind(this);
    }

    // METHOD: this handler updates/changes the initial boolean "false"states of each state's property name
    // this is done by using the " ! " sign before referring each state property name
    // ' ! ' changes the initial state declaration from it's initial state "false" to "true"
    
    imageHandler(){
        this.setState({
            name_1_profile_image: !this.state.name_1_profile_image,
            toRight: !this.state.toRight,
            fadeIn: !this.state.fadeIn,
            name: !this.state.name,
            profile_info: !this.state.profile_info,
            quote: !this.state.quote
        })
        
    }
    

    render(){
        /*  Declaring the state property and making use of react ternary operator to return one value or another, all depending to it's condition
            This will check: 
                >    if the condition is "True" therefore execute something
                >    if the condition is "False" therefore execute something else
            Eact state property is assigned to a specific variable, which will be used to be refered inside the return() method.
        */

       var image =  this.state.name_1_profile_image ? this.state.name_2_profile_image : this.state.name_1_profile_image0;
       var profileName = this.state.name ? this.state.profile_name_2 : this.state.profile_name_1;
       var profileInfo = this.state.profile_info ? this.state.name_2_story_paragraph : this.state.name_1_story_paragraph;
       var quote = this.state.quote ? this.state.profile_quote_name_2 : this.state.profile_quote_name_1;
        return(
            <section className="founder">
                <div className="founder_container">
                    <header className="founder_heading__title">
                        <h2 className="mg-bottom">{this.state.f_heading}</h2>
                        <h2 className="mg-top">{this.state.s_heading}</h2>
                    </header>
                    <div className="founder_profile__wrap">
                            <div className="profile_image">
                                <picture>
                                    <img src={image} class={this.state.toRight ? "image" : "image"} alt="" onChange={this.imageHandler} />
                                </picture>
                            </div>
                        <aside id="intro_svg_bottom_s3">
                            {this.props.SvgF}
                        </aside>
                        <div className="profile_information">
                            <div className="profile_name">
                                <h5>
                                    {profileName}
                                    <hr />
                                </h5>
                            </div>
                            <div className="profile_quote">
                                <div>
                                    <blockquote>
                                        {quote}
                                        <footer>
                                            <cite style={{fontSize: '1.7935578330893118vw'}}>
                                                {profileName}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="profile_storyline">
                                <p  class={this.state.fadeIn ? "fade-in" : "fade-out"}>{profileInfo}</p>
                            </div>
                        </div>
                        <div className="button" onClick={this.imageHandler}>
                        <div className="click_wrap">
                            <div className="btn_text">
                                {/* will return the name of the current state, by tracking the condition ' ? ',  ' : '*/}
                                View {profileName}
                            </div>
                            <div className="_icon">
                                {/* font-awesome arrow-right */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>





                {/* FOUNDER */}
                <article className="founder-container-md">
                    <section className="founder-header-container-md">
                        <header className="founder-header-md">
                            Meet The People Behind Proper Living
                        </header>
                    </section>
                    <section className="founder-member-p1-md">
                        <aside className="member-p1-image-md">
                            {/* PARALLEX IMAGE */}
                            <div className="content content-img-member-p1-md">
                                <div class="item">
                                    <div class="item__img-wrap img__member-p1-md">
                                        <div class="item__img item__img--t2 member-img-p1-md"></div>
                                    </div>
                                </div>
                            </div>
                            {/* PARALLEX IMAGE */}
                        </aside>
                        <div className="member-p1-info-md">
                            <header className="member-p1-md">
                                <div className="member-p1-name-md">Casper Lee</div>
                                <hr />
                                <blockquote id="blockquote">
                                    Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.
                                    <footer id="blockfooter">
                                        <cite id="cite">
                                            Casper Lee
                                        </cite>
                                    </footer>
                                </blockquote>
                            </header>
                        </div>
                    </section>
                    <section className="founder-member-p2-md">
                        <div className="member-p2-wrap-md">
                            <aside className="member-p2-image-md">
                                {/* PARALLEX IMAGE */}
                                <div className="content content-img-member-p2-md">
                                    <div class="item member-p2-item">
                                        <div class="item__img-wrap img__member-p2-md">
                                            <div class="item__img item__img--t2 member-img-p2-md"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* PARALLEX IMAGE */}
                            </aside>
                            <div className="member-p2-info-md">
                                <header className="member-p2-md">
                                    <div className="member-p2-name-md">Benji Schaffer</div>
                                    <hr />
                                    <blockquote>
                                        Luck? I don't know anything about luck. I've never banked on it and I'm afraid of people who do. Luck to me is something else: Hard work - and realizing what is opportunity and what isn't.
                                        <footer>
                                            <cite>
                                                Benji Schaffer
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </header>
                            </div>
                        </div>
                    </section>
                </article>











            </section>
            
            
        );
    }
}