import React from 'react';
import './SiderDrawer.css'
// import '../App.css';

export const Siderdrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'; //className for the nav
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Serces</a></li>
            </ul>
        </nav>
    );
}
export default Siderdrawer;