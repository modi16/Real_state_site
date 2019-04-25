import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className="col-3 mb-3">
			<div className="card">
				<img
					className="card-img-top cardHomeProperties"
					src={props.housePic}
					alt="500 X 325"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.houseTitle}</h5>
					<p className="card-text">{props.houseAddress}</p>
					<p className="card-text">{props.houseZipCode}</p>
					<p className="card-text">
						{props.houseBed} Bed {props.houseBath}
						Bath
					</p>

					<p className="card-text">{props.housePrice}</p>
					<p className="card-text">{props.houseDescription}</p>
					<a href="#" className="btn btn-primary align-middle">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	housePic: PropTypes.string,
	houseTitle: PropTypes.string,
	houseAddress: PropTypes.string,
	houseZipCode: PropTypes.number,
	houseBed: PropTypes.number,
	houseBath: PropTypes.number,
	housePrice: PropTypes.number,
	houseDescription: PropTypes.string
};
