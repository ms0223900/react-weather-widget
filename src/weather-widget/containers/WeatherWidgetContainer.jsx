import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import WeatherWidget from '../components/WeatherWidget'
import useWeatherWidget from './functions/useWeatherWidget'

const WeatherWidgetContainer = () => {
  const {
    loading,
    value,
    handleChange,
    countyOptions,
    weatherWidgetData,
  } = useWeatherWidget()

  if(loading)
    return (
      <CircularProgress />
    )

  return (
    <WeatherWidget
      {...weatherWidgetData}
      value={value}
      options={countyOptions}
      onSelect={handleChange}
    />
  )
}

export default WeatherWidgetContainer