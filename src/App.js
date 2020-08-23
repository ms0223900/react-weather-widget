import React from 'react';
import WeatcherStatusIcon from './weather-widget/components/WeatherStatusIcon';
import MinMaxTemperatureList from './weather-widget/components/MinMaxTemperatureList';
import WeatherWidget from './weather-widget/components/WeatherWidget';

function App() {
  return (
    <div>
      <WeatherWidget 
        wxName={'晴天'}
        wxValue={1}
        minTemperature={20}
        maxTemperature={30}
        pop={20}
      />
    </div>
  );
}

export default App;
