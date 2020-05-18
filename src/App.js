import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "98c82ea6e04edce8521a08d4cff00aee";
class App extends Component {
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'',
  }
  getWeather = async (e)=> {
    e.preventDefault(); 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`)
    const data = await api.json();
    //console.log(data)
    if (city && country){
      this.setState({
        tempreature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:'',
      })
    }else{
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Enter City and Country',
      })
    }

  }
  render(){

    return (
      <div className="wrapper">
         <div className="form-container">
        <Form getWeaher={this.getWeather}/>
        <Weather 
         tempreature= {this.state.tempreature}
        city= {this.state.city}
        country= {this.state.country}
        humidity= {this.state.humidity}
        description= {this.state.description}
        error= {this.state.error}
        />
      </div>
      </div>


       );
  }
 
 
}

export default App;
