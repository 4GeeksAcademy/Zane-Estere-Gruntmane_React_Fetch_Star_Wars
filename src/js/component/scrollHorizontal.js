import React from "react";
import PropTypes from "prop-types";

class ScrollHorizontal extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(500, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default ScrollHorizontal;
ScrollHorizontal.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any
};
