import "./navBar.css";
import React, { Component } from "react";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="App.jsx">
					Navbar
					<span className="badge badge-pill badge-secondary m-2">
						{this.props.sum}
					</span>
				</a>
			</nav>
		);
	}
}

export default NavBar;
