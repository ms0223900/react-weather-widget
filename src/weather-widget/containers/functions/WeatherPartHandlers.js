const WeatherWidgetHandlers = {
  getSingleWeatherDataFromElementTimes(weatherElementTimes) {
    const element = weatherElementTimes[0];
    const res = element.parameter.parameterName;
    return res;
  },

  getSingleWeatherDataParameterValueFromElementTimes(weatherElementTimes) {
    const element = weatherElementTimes[0];
    const res = element.parameter.parameterValue;
    return res;
  },

  getCountyWeatherData(rawData=undefined, county='臺北市') {
    let res = {
      pop: '0',
      minTemperature: 24,
      maxTemperature: 24,
      wxValue: '0',
      wxName: '',
    };
    if(!rawData) {
      return res
    } else {
      const countyWeather = rawData.records.location.find(l => l.locationName === county);
      if(countyWeather) {
        const pop = countyWeather.weatherElement.find(e => e.elementName === 'PoP');
        const minT = countyWeather.weatherElement.find(e => e.elementName === 'MinT');
        const maxT = countyWeather.weatherElement.find(e => e.elementName === 'MaxT');
        const wx = countyWeather.weatherElement.find(e => e.elementName === 'Wx');
  
        if(pop && minT && maxT && wx) {
          res = {
            pop: this.getSingleWeatherDataFromElementTimes(pop.time),
            minTemperature: this.getSingleWeatherDataFromElementTimes(minT.time),
            maxTemperature: this.getSingleWeatherDataFromElementTimes(maxT.time),
            wxValue: this.getSingleWeatherDataParameterValueFromElementTimes(wx.time),
            wxName: this.getSingleWeatherDataFromElementTimes(wx.time),
          };
        }
      }
      return res;
    }
  },

  getCountyOptions(rawData=undefined) {
    if(!rawData) {
      return []
    } else {
      const options = rawData.records.location
        .map(l => ({
          text: l.locationName,
          value: l.locationName,
        }))
      return options
    }
  }
}

export default WeatherWidgetHandlers;