import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      displayData: false,
      errorMsg: '',
      weatherData: [],
    }
  };

  updatCityName = (e) => {
    // console.log(e.target.value);

    this.setState({
      cityName: e.target.value
    });
    // console.log(this.state);
  }

  getCityData = async (e) => {
    try {
      e.preventDefault();
      const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.51a8a7fa9038e75df8dfa5b9d46b1691&q=${this.state.cityName}&format=json`);
      const cityLoc= axiosResponse.data[0]
      console.log(process.env.REACT_APP_URL)
      const myApiRes = await axios.get(`${process.env.REACT_APP_URL}/weather`);
      console.log(myApiRes)
      // console.log(axiosResponse);
      this.setState({
        cityData: axiosResponse.data[0],
        weatherData: myApiRes.data,
        displayData: true,
        errorMsg: ''
      })
    }
    catch (error) {
      this.setState({
        errorMsg: error.message,
        displayData: false,
      })
      // console.log(error.message)
    }

  }


  render() {
    const { errorMsg, displayData } = this.state
    return (
      <div class="container">
        <h2>City Explorer</h2>

        <Form onSubmit={this.getCityData}>
          <Form.Group className="mb-2" controlId="formBasiCities">
            <Form.Label>City Name </Form.Label>
            <Form.Control onChange={this.updatCityName} type="text" placeholder="Enter City Name" />
          </Form.Group>

          <Button variant="secondary" size="lg" type="submit">
            Explore !
    </Button>


          {errorMsg && <Alert key={1} variant={'danger'}>
            {errorMsg}
          </Alert>}

        </Form>
        {displayData &&
          <div>

            <p>
              {this.state.cityData.display_name}
            </p>

            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} alt='' />


            {
              this.state.weatherData.map(value => {
                return (
                  <p>
                    {value.description},date={value.date}
                  </p>
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}

export default App