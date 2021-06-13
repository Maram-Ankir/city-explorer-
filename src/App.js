import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      displayData: false
    }
  };

  updateCityNameState = (e) => {
    // console.log(e.target.value);
 
    this.setState({
      cityName: e.target.value
    });
    console.log(this.state);
  }

  getCityData = async (e) => {
    e.preventDefault();
    const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.cityName}&format=json`);

 
    console.log(axiosResponse);
    this.setState({
      cityData: axiosResponse.data[0],
      displayData: true
    })

  }


  render() {
    return (
      <div>
        <h2>City Explorer</h2>
        <form onSubmit={this.getCityData}>
          <label>
            City Name:
          </label>
          <input onChange={this.updateCityNameState} type="text" />
          <br></br>
          <br></br>
          <input type="submit" value="get City" />
        </form>
     
        {this.state.displayData &&
          <div>

            <p>
              {this.state.cityData.display_name}
            </p>

            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />

          </div>
        }
      </div>
    )
  }
}

export default App