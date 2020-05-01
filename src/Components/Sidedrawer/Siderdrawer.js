import React from 'react';
import './SiderDrawer.css'
// import '../App.css';

export const Siderdrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'; //className for the nav
    }
    return(
        <nav className={drawerClasses} id="side-drawer___contentposition">
            <ul>
                <li><a href="../public/index.html">Home</a></li>
                <li><a href="../public/location.html">Location</a></li>
                <li><a href="../public/location.html">Spaces</a></li>
                <li><a href="../public/location.html">Vision</a></li>
                <li><a href="../public/location.html">Contact</a></li>
            </ul>
            <div className="footer-social">   <br /><br /><br /><br />
                <center><hr id="side-drawer__hr" /></center>
                <footer className="social-footer">
                    <div className="_instagram">Instagram</div>
                    <div className="_facebook">Facebook</div>
                </footer>
            </div>
        </nav>
    );
}
export default Siderdrawer;