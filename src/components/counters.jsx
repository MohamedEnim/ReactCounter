import "./counters.css";

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		return (
			<React.Fragment>
				<button onClick={this.props.onReset} className="btn btn-primary btn-sm">
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						onDecrement={this.props.onDecrement}
					/>
				))}
			</React.Fragment>
		);
	}
}

export default Counters;
