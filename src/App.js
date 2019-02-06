import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };
  getIncremented = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  getDelete = id => {
    const counters = this.state.counters.filter(c => c.id != id);
    this.setState({ counters });
  };
  getReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            getReset={this.getReset}
            getDelete={this.getDelete}
            getIncremented={this.getIncremented}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
