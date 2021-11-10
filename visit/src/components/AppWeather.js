import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Weather from './Weather.js';



export default class AppWeather extends React.Component {
    constructor(

    ) {
        super(
            
        )
        this.state = {
            
            city: undefined,
            country: "Nepal",
            icon: undefined,
            main: undefined,
            celsisus: undefined,
            temp_max: undefined,
            temp_min: undefined,
            description: "",
            error: false,
            place:"Myagdi"
        };
        this.getWeather();
    }

    getWeather = async () => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Myagdi&units=metric&appid=053ce8cd9407b89b75c9ec442e4d938e');
        const response = await api_call.json();
        console.log(response)
        this.setState({
            city: response.name,
            celsisus: response.main.temp,
            temp_min: response.main.temp_min,
            temp_max: response.main.temp_max,
            description: response.weather[0].description
        }
        )
    }

    render() {
        return (
            <div className="App">
                <Weather
                    city={this.state.city}
                    country={this.state.country}
                    celsisus={this.state.celsisus}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    description={this.state.description}
                />
            </div>
        );
    }

}