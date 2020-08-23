import React from 'react'
import { Box, makeStyles, Divider } from '@material-ui/core'
import WeatcherStatusIcon from './WeatherStatusIcon'
import MinMaxTemperatureList from './MinMaxTemperatureList'
import PopItem from './PopItem'
import CountySelectorSelector from './CountySelector'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 160,
    margin: 'auto',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    boxShadow: '0px 0px 10px #ccc',
  }
}));

const WeatherWidget = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <WeatcherStatusIcon {...props} />
      <MinMaxTemperatureList {...props} />
      <PopItem {...props} />
      <Divider />
      <CountySelectorSelector {...props} />
    </Box>
  )
}

export default WeatherWidget