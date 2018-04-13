import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

function average(arr) {
  let sum = parseInt(arr[0]);
  for (let i = 1; i < arr.length; i++){
    sum = sum + parseInt(arr[i]);
  }

  return (sum / arr.length).toFixed(0);
}

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => ({
      temp: ((weather.main.temp * 9 / 5) - 459.67).toFixed(0)
    }));

    const pressures = cityData.list.map(weather => ({
      temp: (weather.main.pressure).toFixed(0)
    }));

    const humidities = cityData.list.map(weather => ({
      temp: (weather.main.humidity).toFixed(0)
    }));

    const tempsArr = cityData.list.map(weather => ((
      weather.main.temp * 9 / 5) - 459.67).toFixed(0)
    );

    const pressuresArr = cityData.list.map(weather => weather.main.pressure);
    const humiditiesArr = cityData.list.map(weather => weather.main.humidity);

    const minTemp = Math.min(...tempsArr);
    const maxTemp = Math.max(...tempsArr);

    const minPres = Math.min(...pressuresArr);
    const maxPres = Math.max(...pressuresArr);

    const minHum = Math.min(...humiditiesArr);
    const maxHum = Math.max(...humiditiesArr);

    const { lon, lat } = cityData.city.coord;

    return (
      <Table.Row key={name} textAlign='center'>
        <Table.Cell><GoogleMap lon={lon} lat={lat}/></Table.Cell>
        <Table.Cell>
          <Chart data={temps} color={'blue'} min={minTemp} max={maxTemp}/>
          <div>Avg: {average(tempsArr)}</div>
        </Table.Cell>
        <Table.Cell>
          <Chart data={pressures} color={'green'} min={minPres} max={maxPres}/>
          <div>Avg: {average(pressuresArr)}</div>
        </Table.Cell>
        <Table.Cell>
          <Chart data={humidities} color={'red'} min={minHum} max={maxHum}/>
          <div>Avg: {average(humiditiesArr)}</div>
        </Table.Cell>
      </Table.Row>
    )
  }

  render() {
    return (
      <div>
      <Table>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Temperature (F)</Table.HeaderCell>
            <Table.HeaderCell>Pressure (hPa)</Table.HeaderCell>
            <Table.HeaderCell>Humidity (%)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.weather.map(this.renderWeather)}
        </Table.Body>
      </Table>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
