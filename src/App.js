import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	handleDelete = (id) => {
		const counters = this.state.counters.filter((c) => c.id !== id);
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value += 1;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value -= 1;
		this.setState({ counters });
	};

	handleReset = () => {
		let counters = [...this.state.counters];
		counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar sum={this.handelSum()} />
				<main className="container">
					<Counters
						counters={this.state.counters}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onReset={this.handleReset}
					/>
				</main>
			</React.Fragment>
		);
	}
	handelSum = () => {
		let sum = 0;
		this.state.counters.forEach((c) => {
			sum += c.value;
		});
		return sum;
	};
}

export default App;
