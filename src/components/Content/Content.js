import React , {Component} from 'react';

class Content extends Component{
  render(){
    let {weather,description,clouds,wind,icon,main,sys,name,fiveDay} = this.props.weather;
    fiveDay = fiveDay.map((weatherDay)=>{
      return   <div className="border-mild bord-color-green">
                        <div className="weather-title color-black margin-bottom-weak"><b>{weatherDay.day}</b></div>
                        <div className="weather-title color-black margin-bottom-weak">Description: {weatherDay.weather[0].description} </div>
                        <div className="weather-title color-black margin-bottom-weak">Wind Speed: {weatherDay.wind.speed}</div>
                        <div className="weather-title color-black margin-bottom-weak">Temperature: {weatherDay.main.temp}</div>
                </div>
    })
    return(
      <div className="Content">
        <div className="grid-col-8">
          <div className="weather-container grid-col-2 grid-row-5 edges-strong">
            <div className="rw-span-6  text-center ">
              <h2>Today's Weather</h2>
              <div className="weather-title color-black margin-bottom-weak">Location:<br/> {name} ,{sys.country}</div>
              <div className="weather-title color-black margin-bottom-weak">Description:<br/> {description}</div>
              <div className="weather-title color-black margin-bottom-weak">Wind Speed:<br/> {wind.speed}</div>
              <div className="weather-title color-black margin-bottom-weak">Temperature:<br/> {main}</div>
            </div>
            <div className="rw-span-6 text-center">
              <h2 className="sz-9 ">5 Day Forecast</h2>
              <div className="grid-col-6 grid-row-1 ">
                {fiveDay}

              </div>

            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default  Content;
