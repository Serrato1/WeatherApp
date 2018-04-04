import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from './api.js';
import axios from 'axios';
import Content from './components/Content/Content.js'
import TopNav from './components/TopNavigation/TopNav.js'

class App extends Component {
  state ={
    search : 'phoenix',
    weather: '',
    clouds : '',
    wind   : '',
    description : '',
    icon   : '',
    main   : '',
    sys    : '',
    fiveDay : [],
    sixTCast : '',
    today : {}
  }
  getDay = (date) =>{
    let day = new Date(date);
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[day.getDay()]
  }
  componentDidMount = ()=>{
    axios(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.search},us&appid=${API.api_key}`)
    .then(({data})=>{
      let {weather,clouds,wind,sys,name}= data;
      let {description,icon,main} = weather[0];
      let search = this.state.search;
      let stateObj = {search,weather,clouds,wind,description,icon,main , sys ,name};
      axios(`http://api.openweathermap.org/data/2.5/forecast?q=${search},us&appid=${API.api_key}`)
      .then(({data})=>{
        console.log("list" + data.list);
        let lastDay = "";
        let fiveDay = [];
        for(let i = 0 ;i<= data.list.length -1 ; i++){
          let day = this.getDay(data.list[i].dt_txt )      ;
          if(lastDay === day){
          }else{
            lastDay = day;
            data.list[i].day = day;
            fiveDay.push(data.list[i]);
          }
        }
        this.setState({fiveDay : fiveDay });
        this.setState(stateObj);
      })
    })
  }
  searchQuery = (search) =>{
    console.log(search.replace(' ', '%20'));
    axios(`http://api.openweathermap.org/data/2.5/weather?q=${search},us&appid=${API.api_key}`)
    .then(({data})=>{
      let {weather,clouds,wind,sys,name}= data;
      let {description,icon,main} = weather[0];
      let search = this.state.search;
      let stateObj = {search,weather,clouds,wind,description,icon,main , sys ,name};
      this.setState(stateObj);
    })
    this.setState({state: search})

  }
  render() {
    console.log("APIKEY: ", API.api_key);
    console.log(this.state.fiveDay);
    let {weather,clouds,wind,description,icon,main} = this.state;
    console.log(this.state);
    return (
      <div className="WeatherApp">
        <TopNav querySearch={(search)=>{this.searchQuery(search)}}/>
        <Content weather={this.state}/>
      </div>
    );
  }
}

export default App;
