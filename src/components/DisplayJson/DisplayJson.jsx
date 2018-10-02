import React, { Component } from "react";
import preload from "../../../data/data.json";

class displayJson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "This is a search term",
      selectValue: "Bananas"
    };

    this.handleChangeTermChange = this.handleChangeTermChange.bind(this);
    this.dropdownValueChange = this.dropdownValueChange.bind(this);
  }

  handleChangeTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  dropdownValueChange(event) {
    this.setState({ selectValue: event.target.value });
  }

  render() {
    return (
      <div className="loadData">
        {/* {preload.cities.map((city) => <h3>{city.name}</h3>)} */}
        {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
        <input
          onChange={this.handleChangeTermChange}
          value={this.state.searchTerm}
        />
        <h1>{this.state.searchTerm}</h1>

        <select
          onChange={this.dropdownValueChange}
          value={this.state.selectValue}
        >
          {preload.cities.map(city => (
            <option value={city.name}>{city.name}</option>
          ))}
        </select>
        <h1>{this.state.selectValue}</h1>
      </div>
    );
  }
}

export default displayJson;
// { preload.cities.map(city => city.name) }
