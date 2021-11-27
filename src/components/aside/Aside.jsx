import { NavLink } from "react-router-dom";

export default function Aside({user}) {


    return <aside>
        <div id="sidebar" className="nav-collapse ">
            
            <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered">
                <a href="profile.html">
                    <img src={ user ? user.avatar : "/img/ui-sam.jpg" } className="img-circle" width="80" />
                </a>
            </p>
            <h5 className="centered">{ user ? user.displayName : "User" }</h5>

            <li className="mt">
                <NavLink to="/" activeClassName="active">
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                </NavLink>
            </li>
            <li className="sub-menu">
                <NavLink to="/users" activeClassName="active">
                    <i className="fa fa-users"></i>
                    <span>All users</span>
                </NavLink>
            </li>

            {/* <li className="sub-menu">
                <a href="javascript:;">
                <i className="fa fa-desktop"></i>
                <span>UI Elements</span>
                </a>
                <ul className="sub">
                <li><a href="general.html">General</a></li>
                <li><a href="buttons.html">Buttons</a></li>
                <li><a href="panels.html">Panels</a></li>
                <li><a href="font_awesome.html">Font Awesome</a></li>
                </ul>
            </li> */}
            </ul>
        </div>
    </aside>;
}