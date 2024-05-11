import React from 'react';
import {populateall, byType} from './api'

const types = [
  {type:"Fire"},
  {type:"Water"},
  {type:"Grass"},
  {type:"Ground"}

]

class PokeFilter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {value: 'Fire'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    byType(this.state.value);
    event.preventDefault();

  }
  componentDidMount() {
    // call api or anything
    populateall();
  }
  
  render() {
    return (
      <form id="type1" onSubmit={this.handleSubmit}>
        <label>
          First Type:
          <select value={this.state.value} onChange={this.handleChange}>
            {/* setting dropdown values to values in dictionary */}
            {types.map(type => (
              <option value={type.type}>{type.type}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default PokeFilter;