import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	const renderCard = props.cardsArray.map((card, index) => {
		return (
			<div className="col-3" key={index}>
				<div className="card cardTwo">
					<img
						className="card-img-top"
						src={card.imgLink}
						alt="500 X 325"
					/>
					<div className="card-body">
						<h5 className="card-title">{card.title}</h5>
						<p className="card-text">{card.bodyText}</p>
						<a href="#" className="btn btn-primary align-middle">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		);
	});

	return <div className="row">{renderCard}</div>;
};

Cards.propTypes = {
	cardsArray: PropTypes.array
	
};
