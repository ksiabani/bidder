import React from 'react'
import {Link} from 'react-router-dom';

const Menu = () => (

        <div className="side-menu-layout__menu expanded">
            {/* Header */}
            <header>
                {/* Menu responsive button (with animation)*/}
                <button className="side-menu-layout__menu__mobile-trigger"><i/></button>
                {/* Link to main page */}
                <a href="./link/to/root">
                    <img width={120}
                         src="https://s3.amazonaws.com/avocarrot-style-guide/4.0/images/avocarrot-skin/logo/full-light.png"
                         alt="Logo"/>
                </a>
            </header>
            {/* Navigation Content */}
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <i className="icon location_world"/>
                            <span>INVENTORY</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon files_single-content-03"/>
                            <span>REPORTING</span>
                        </a>
                    </li>
                    <li>
                        <Link to='/bidders'>
                            <i className="icon design_code"/>
                            <span>BIDDERS</span>
                        </Link>
                    </li>
                </ul>
                {/* Optional Seperator */}
                <hr/>
                <ul>
                    {/* Secondary link */}
                    <li className="side-menu-layout__secondary-link">
                        <a href="#">
                            <i className="icon icon ui-1_settings-gear-63"/>
                            <span>INTEGRATION</span>
                        </a>
                    </li>
                    <li className="side-menu-layout__secondary-link">
                        <a href="#">
                            <i className="icon icon travel_info"/>
                            <span>TUTORIALS</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Footer */}
            <footer>
                Glispa Connect 2018. All rights reserved
            </footer>
        </div>

)

export default Menu