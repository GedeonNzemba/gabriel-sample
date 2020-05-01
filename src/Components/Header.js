import React from 'react';
import '../App.css';
import './Responsive/Responsive.css';

export class Header extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }


    render(){
        return(
            <div className="header">
                {/* NAVBAR */}
                {/* <div className="navigation-bar">
                    {this.props.Ngbar}
                </div> */}
                {/* SVG */}
                <div className="header-svg">
                    <div className="top-right-svg">{this.props.svgF}</div>
                    <div className="bottom-left-svg">{this.props.svgG}</div>
                </div>
                <div className="header-title-wrapper">
                    <div className="header-inner-wrap">
                            <h3 className="header-title_1">
                                {this.props.Ftitle} {" "}
                                {this.props.Stitle} {" "}
                                {this.props.Ttitle} {" "}
                                {this.props.Ttitle} {" "}
                            </h3>
                    </div>
                </div>

                <div className="social-media">
                    <div className="media-wrap">
                        <figure id="insta">{this.props.svgB}</figure>
                        <figure id="facebook">{this.props.svgC}</figure>
                        <figure id="web-logo">{this.props.svgD}</figure>
                    </div>
                    <div className="sub-title" id="fragement_1">
                        <h4 className="ml3">
                            <span class="text-wrapper">
                                <span class="line line1"></span>
                                <span class="letters">
                                    Student Accomodation
                                </span>
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}