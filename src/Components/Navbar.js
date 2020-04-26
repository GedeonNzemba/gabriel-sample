import React from 'react';
import '../App.css';
import './Responsive/Responsive.css';

export class Navbar extends React.Component {
    



    render(){
        return(
                <div className="navbar-wrap">
                    <figure className="logo-wrap">
                        <div>{this.props.svgD}</div>
                    </figure>
                    <div className="navbar">
                        <nav>
                            <ul>
                                <li id="link"><a  href="#">{this.props.contact}</a></li>
                                <li id="link"><a  href="#">{this.props.vision}</a></li>
                                <li id="link"><a  href="#">{this.props.space}</a></li>
                                <li id="link"><a  href="#">{this.props.location}</a></li>
                                <li id="link"><a  className="" href="../public/index.html">{this.props.home}</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
        );
    }
}