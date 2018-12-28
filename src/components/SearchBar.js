import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  handleInput = e => {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="" style={{ textAlign: "center" }}>
            <label>Image Search </label>
            <br />
            <br />
            <input
              type="text"
              onChange={this.handleInput}
              placeholder="Type any word here..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
