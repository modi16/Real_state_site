import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Search = props => {
	return (
		<div className="input-group md-form form-sm form-2 pl-0">
			<input
				className="form-control my-0 py-1 red-border"
				type="text"
				placeholder="Search"
				aria-label=" Search"
			/>
			<div className="input-group-append">
				<button type="button" className="btn btn-primary btn-lg">
					Search..
				</button>
			</div>
		</div>
	);
};

export default Search;
