import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-small m-2"
          onClick={this.props.getReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.getDelete}
            getIncrement={this.props.getIncremented}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
