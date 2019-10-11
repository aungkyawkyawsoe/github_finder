import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Navbar extends Component {

    // Class Base Component default props Declaration
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };

    // Class Base Component Prop Types Declaration
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {

        const {title} = this.props;

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><i style={{fontSize: '26px'}}
                                                         className={this.props.icon}/> {title}</Link>
                <span className="border-0 navbar-toggler navbar-toggler-icon" data-toggle="collapse" data-target="#navbarText"/>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

/*

// Functional Base Component default props Declaration
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

// Functional Base Component Prop Types Declaration
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


* */

export default Navbar;