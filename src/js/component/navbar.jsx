import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						React Webapp Boilerplate
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">
							Check the Context in action
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
=======
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
	return (
		<div className="container-fluid p-4 ">
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav  ml-auto ">
						<Context.Consumer>
							{({ store }) => {
								return store.navBarArray.map(
									(navItem, index) => {
										return (
											<li
												className="nav-item"
												key={index}>
												<a
													className="nav-link"
													href={navItem.url}>
													{navItem.label}
												</a>
											</li>
										);
									}
								);
							}}
						</Context.Consumer>
					</ul>
				</div>
			</nav>
		</div>
	);
};
>>>>>>> f0fd4f6485b532a0e15bc746d1ac96d6ed35cad5
