import "./counter.css";

import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-1">
						<span className={`badge badge-pill badge-${this.handleBadge()}`}>
							{this.handleInitialValue()}
						</span>
					</div>
					<div className="col-sm-11">
						<button
							onClick={() => this.props.onIncrement(this.props.counter)}
							className="btn btn-secondary btn-sm m-2"
						>
							+
						</button>
						<button
							onClick={() => this.props.onDecrement(this.props.counter)}
							className="btn btn-secondary btn-sm m-2"
							disabled={this.handelDecrementButton()}
						>
							-
						</button>
						<button
							onClick={() => this.props.onDelete(this.props.counter.id)}
							className="btn btn-danger btn-sm m-2"
						>
							x
						</button>
					</div>
				</div>
			</div>
		);
	}

	handleInitialValue() {
		return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
	}

	handleBadge() {
		return this.props.counter.value === 0 ? "warning" : "secondary";
	}

	handelDecrementButton() {
		return this.props.counter.value === 0 ? true : false;
	}
}

export default Counter;
