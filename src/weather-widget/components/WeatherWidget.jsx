import React from 'react'
import { Box } from '@material-ui/core'
import WeatcherStatusIcon from './WeatherStatusIcon'
import MinMaxTemperatureList from './MinMaxTemperatureList'
import PopItem from './PopItem'

const WeatherWidget = (props) => {
  return (
    <Box>
      <WeatcherStatusIcon {...props} />
      <MinMaxTemperatureList {...props} />
      <PopItem {...props} />
    </Box>
  )
}

export default WeatherWidget