import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Layout extends Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/tutorials"} className="navbar-x">
                        bezKoder
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/tutorials"} className="nav-link">
                                Tutorials
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add
                            </Link>
                        </li>
                    </div>
                </nav>
                <Outlet />
            </div>
        );
    }
}