import React from "react";
import { DrawerTroggleButton } from '../Sidedrawer/DrawerTroggleButton';
import './Toolbar.css';

export class Toolbar extends React.Component {
   

    render(){
        return (
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="humberg">
                        <DrawerTroggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    
                    {/* creates spaces between the <DrawerTroggleButton and the logo */}
                    <div className="spacer"/> 

                    <div className="toolbar_navigation__item">
                        <ul>
                            <li>
                                <a href="/">Product</a>
                            </li>
                            <li>
                                <a href="/">Servicesb</a>
                            </li>
                        </ul>
                    </div>
                    <div className="toolbar__logo">
                        <a href="../../public/index.html">
                            <picture>
                                {this.props.svgD}
                            </picture>
                        </a>
                    </div>
                </nav>
            </header>
        );
    }
};
export default Toolbar;
