import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''}
  }

  //every React class must have a render function
  render() {
    return (
      <div  className="search-bar">
        <input
          value={this.state.term}
          placeholder="Search..."
          onChange={event => this._onInputChange(event.target.value)} />
      </div>
    )
  };

  _onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;