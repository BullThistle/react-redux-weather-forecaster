import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import HeaderMenu from './components/header_menu';

import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenu />
        <Container>
          <SearchBar />
          <WeatherList />
        </Container>
      </div>
    );
  }
}

export default App;
