import React, { Component } from "react";
import fblogo from "../../img/fb-icon.png";
import instagramicon from "../../img/instalogo.png";
import twittericon from "../../img/twittericon.png";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer bg-dark mt-auto py-3 text-center">
				<a href="https://www.facebook.com/">
					<img className="fb img-responsive1" src={fblogo} />
				</a>
				<a href=" https://www.instagram.com/">
					<img
						className="insta img-responsive2"
						src={instagramicon}
					/>
				</a>
				<a href=" https://twitter.com">
					<img className="twit img-responsive3" src={twittericon} />
				</a>
			</footer>
		);
	}
}
