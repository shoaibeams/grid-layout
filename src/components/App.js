import React, { Component } from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import "./ImageList.css";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "10px", marginLeft: "10px" }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
