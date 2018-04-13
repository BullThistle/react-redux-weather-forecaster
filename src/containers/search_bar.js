import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import { Input, Button } from 'semantic-ui-react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.citySearch = this.citySearch.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  citySearch() {
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <Input
          fluid
          style={{marginBottom: '20px'}}
          onKeyPress={event => {
              if (event.key === "Enter") {
                this.citySearch();
              }
            }}
          action={ <Button icon='search' onClick={ this.citySearch } />}
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder='Search a city...'
        >
        </Input>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
